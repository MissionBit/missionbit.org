import * as React from "react";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import { brand } from "src/colors";
import BaseToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import BaseOutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import BaseInputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useCallback, useState } from "react";
import IndigoButton from "components/IndigoButton";
import ArrowRightIcon from "components/icons/ArrowRightIcon";

const InputLabel = withStyles({
  root: {
    "&$focused": {
      color: brand.indigo,
    },
  },
  focused: {},
})(BaseInputLabel);

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
  },
  heading: {
    ...theme.typography.body1,
    backgroundColor: brand.indigo,
    color: theme.palette.common.white,
    padding: theme.spacing(2),
  },
  content: {
    ...theme.typography.body1,
    display: "grid",
    gridTemplate: "auto / 1fr",
    gridGap: theme.spacing(2),
    justifyItems: "center",
    border: `1px solid ${brand.lightGray}`,
    padding: theme.spacing(2, 2, 4, 2),
  },
  margin: {},
}));

const FREQUENCIES = ["once", "monthly"] as const;
type Frequency = typeof FREQUENCIES[number];

const PRESET_AMOUNT_CENTS = [25000, 10000, 5000] as const;
type PresetAmountCents = typeof PRESET_AMOUNT_CENTS[number];

function parseCents(s: string): number | null {
  /* Parse a string representing a dollar value to cents */

  var m = /^\s*\$?([1-9]\d*)((?:,\d\d\d)*)(?:\.(\d\d))?\s*$/.exec(s);
  if (!m) {
    return null;
  }
  var leading = m[1];
  var comma_groups = m[2] || "";
  var cents = m[3] || "00";
  return Number(leading + comma_groups.replace(/,/g, "") + cents);
}

export const DonateCard: React.FC<{ className?: string }> = ({ className }) => {
  const classes = useStyles();
  const [frequency, setFrequency] = useState<Frequency>("once");
  const [amountString, setAmountString] = useState<string>("");
  const amountCents = parseCents(amountString);
  const disabled = (amountCents ?? 0) <= 0;
  const handleFrequency = useCallback((_event, newFrequency) => {
    if (FREQUENCIES.indexOf(newFrequency) >= 0) {
      setFrequency(newFrequency);
    }
  }, []);
  const handleAmountCents = useCallback((_event, newAmountCents) => {
    if (newAmountCents) {
      setAmountString(Math.floor(newAmountCents / 100).toFixed(0));
    }
  }, []);
  const handleChangeAmount = useCallback((event) => {
    setAmountString(event.currentTarget.value);
  }, []);
  return (
    <Box className={clsx(classes.root, className)}>
      <Box className={classes.heading}>Choose amount</Box>
      <Box className={classes.content}>
        <ToggleButtonGroup
          value={frequency}
          exclusive
          onChange={handleFrequency}
          aria-label="Donation frequency"
        >
          <ToggleButton value="once">One-time</ToggleButton>
          <ToggleButton value="monthly">Monthly</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButtonGroup
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
        </ToggleButtonGroup>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={amountString}
            onChange={handleChangeAmount}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>
        <IndigoButton variant="contained" disabled={disabled}>
          Donate with card <ArrowRightIcon />
        </IndigoButton>
      </Box>
    </Box>
  );
};

export default DonateCard;
