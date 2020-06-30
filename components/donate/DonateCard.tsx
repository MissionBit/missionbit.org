import * as React from "react";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { useStripe } from "@stripe/react-stripe-js";
import clsx from "clsx";
import { brand } from "src/colors";
import BaseToggleButton from "@material-ui/lab/ToggleButton";
import BaseToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import BaseOutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import BaseInputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useCallback, useState } from "react";
import IndigoButton from "components/IndigoButton";
import ArrowRightIcon from "components/icons/ArrowRightIcon";
import {
  parseCents,
  Frequency,
  FREQUENCIES,
  trackCheckoutEvent,
  isFrequency,
} from "src/stripeHelpers";
import { Stripe } from "@stripe/stripe-js";
import { Typography, Theme } from "@material-ui/core";

const InputLabel = withStyles({
  root: {
    "&$focused": {
      color: brand.indigo,
    },
  },
  focused: {},
})(BaseInputLabel);

const FontSize = {
  large: {
    arrow: 28,
    heading: 28,
    smallInput: 16,
    input: 24,
  },
  small: {
    arrow: 24,
    heading: 24,
    smallInput: 14,
    input: 20,
  },
};

function mkFontSize(
  theme: Theme,
  k: "arrow" | "heading" | "smallInput" | "input"
) {
  return {
    fontSize: FontSize.large[k],
    [theme.breakpoints.down("sm")]: {
      fontSize: FontSize.small[k],
    },
  };
}

const FrequencyToggleButtonGroup = withStyles((theme) => ({
  groupedHorizontal: {
    ...mkFontSize(theme, "input"),
  },
}))(BaseToggleButtonGroup);

const AmountToggleButtonGroup = withStyles((theme) => ({
  root: {
    width: "100%",
    display: "grid",
    gridGap: theme.spacing(3),
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  groupedHorizontal: {
    ...mkFontSize(theme, "input"),
    "&:not(:first-child)": {
      borderTopLeftRadius: "inherit",
      borderBottomLeftRadius: "inherit",
      borderLeft: "1px solid",
      marginLeft: "inherit",
    },
    "&:not(:last-child)": {
      borderTopRightRadius: "inherit",
      borderBottomRightRadius: "inherit",
    },
  },
}))(BaseToggleButtonGroup);

const OutlinedInput = withStyles((theme) => ({
  root: {
    "&:hover $notchedOutline": {
      borderColor: brand.indigo,
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      "&:hover $notchedOutline": {
        borderColor: brand.indigo,
      },
    },
    "&$focused $notchedOutline": {
      borderColor: brand.indigo,
    },
    "&$error $notchedOutline": {
      borderColor: theme.palette.error.main,
    },
    "&$disabled $notchedOutline": {
      borderColor: theme.palette.action.disabled,
    },
  },
  focused: {},
  error: {},
  disabled: {},
  notchedOutline: {
    borderColor: brand.lightGray,
  },
}))(BaseOutlinedInput);

const ToggleButton = withStyles((theme) => ({
  root: {
    color: brand.indigo,
    borderColor: brand.indigo,
    "&$selected": {
      color: theme.palette.common.white,
      backgroundColor: brand.indigo,
      "&:hover": {
        backgroundColor: fade(brand.indigo, 0.8),
      },
    },
    "&:hover": {
      backgroundColor: fade(brand.indigo, 0.1),
    },
  },
  selected: {},
}))(BaseToggleButton);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(0, 2),
    },
  },
  form: {
    ...theme.typography.body1,
    margin: "0 auto",
    display: "grid",
    gridTemplate: "auto / 1fr",
    gridGap: theme.spacing(2),
    justifyItems: "center",
    maxWidth: 550,
  },
  inputText: mkFontSize(theme, "input"),
  button: {
    ...mkFontSize(theme, "heading"),
    margin: theme.spacing(2, 0),
  },
  frequency: {
    margin: theme.spacing(2, 0),
  },
  arrowIcon: mkFontSize(theme, "arrow"),
  heading: {
    ...theme.typography.body1,
    ...mkFontSize(theme, "heading"),
    backgroundColor: brand.indigo,
    color: theme.palette.common.white,
    padding: theme.spacing(2),
  },
  content: {
    border: `1px solid ${brand.lightGray}`,
    padding: theme.spacing(2),
  },
  margin: {},
}));

const PRESET_AMOUNT_CENTS = [25000, 10000, 5000] as const;

async function checkoutDonation(
  stripe: Stripe,
  amount: number,
  frequency: Frequency,
  metadata: { [k: string]: string } = {}
) {
  trackCheckoutEvent(amount, frequency, "Stripe Checkout");
  const response = await fetch("/api/checkout-sessions", {
    method: "POST",
    body: JSON.stringify({
      amount,
      frequency,
      metadata,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Could not connect to server, please try again.");
  }
  const json = await response.json();
  const result = await stripe.redirectToCheckout(json);
  throw new Error(result.error.message);
}

function formatCents(cents: number): string {
  return Math.floor(cents / 100).toFixed(0);
}

export interface DonatePrefill {
  frequency: Frequency;
  amount: string;
}

const DEFAULT_PREFILL: DonatePrefill = {
  frequency: "one-time",
  amount: "",
};

export function parseDonatePrefill(obj: {
  frequency?: unknown;
  dollars?: unknown;
}): DonatePrefill {
  const { frequency, dollars } = obj;
  const rval = { ...DEFAULT_PREFILL };
  if (typeof frequency === "string" && isFrequency(frequency)) {
    rval.frequency = frequency;
  }
  if (typeof dollars === "string") {
    const cents = parseCents(dollars);
    if (cents) {
      rval.amount = formatCents(cents);
    }
  }
  return rval;
}

export const DonateCard: React.FC<{
  className?: string;
  prefill?: DonatePrefill;
}> = ({ className, prefill = DEFAULT_PREFILL }) => {
  const classes = useStyles();
  const stripe = useStripe();
  const [frequency, setFrequency] = useState<Frequency>(prefill.frequency);
  const [amountString, setAmountString] = useState<string>(prefill.amount);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const amountCents = parseCents(amountString);
  const disabled = stripe === null || loading || (amountCents ?? 0) <= 0;
  const handleFrequency = useCallback((_event, newFrequency) => {
    if (FREQUENCIES.indexOf(newFrequency) >= 0) {
      setFrequency(newFrequency);
    }
  }, []);
  const handleAmountCents = useCallback((_event, newAmountCents) => {
    if (newAmountCents) {
      setAmountString(formatCents(newAmountCents));
    }
  }, []);
  const handleChangeAmount = useCallback((event) => {
    setAmountString(event.currentTarget.value);
  }, []);
  const handleOnSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      if (disabled || stripe === null || amountCents === null) {
        return;
      }
      try {
        setLoading(true);
        await checkoutDonation(stripe, amountCents, frequency);
      } catch (err) {
        setLoading(false);
        console.error(err);
        setErrorMessage(err.message);
      }
    },
    [disabled, stripe, amountCents, frequency]
  );
  return (
    <Box className={clsx(classes.root, className)}>
      <Box className={classes.heading}>Choose amount</Box>
      <Box className={classes.content}>
        <form className={classes.form} onSubmit={handleOnSubmit}>
          <FrequencyToggleButtonGroup
            value={frequency}
            exclusive
            onChange={handleFrequency}
            aria-label="Donation frequency"
            className={classes.frequency}
          >
            <ToggleButton value="one-time">One-time</ToggleButton>
            <ToggleButton value="monthly">Monthly</ToggleButton>
          </FrequencyToggleButtonGroup>
          <AmountToggleButtonGroup
            value={amountCents}
            exclusive
            onChange={handleAmountCents}
            aria-label="Preset donation amounts"
          >
            {PRESET_AMOUNT_CENTS.map((cents) => (
              <ToggleButton key={cents} value={cents}>
                ${(cents / 100).toFixed(0)}
              </ToggleButton>
            ))}
          </AmountToggleButtonGroup>
          <FormControl fullWidth className={classes.margin} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={amountString}
              onChange={handleChangeAmount}
              className={classes.inputText}
              startAdornment={
                <InputAdornment position="start">
                  <Typography
                    color="textSecondary"
                    className={classes.inputText}
                  >
                    $
                  </Typography>
                </InputAdornment>
              }
              labelWidth={60}
            />
          </FormControl>
          {errorMessage ? <Typography>{errorMessage}</Typography> : null}
          <IndigoButton
            variant="contained"
            disabled={disabled}
            type="submit"
            className={classes.button}
          >
            Donate with card <ArrowRightIcon className={classes.arrowIcon} />
          </IndigoButton>
        </form>
      </Box>
    </Box>
  );
};

export default DonateCard;
