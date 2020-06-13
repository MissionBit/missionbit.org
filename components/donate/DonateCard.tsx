import * as React from "react";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import clsx from "clsx";
import { brand } from "src/colors";
import BaseToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useCallback, useState } from "react";

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
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    border: "1px solid #707070",
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
        <Box>Button</Box>
      </Box>
    </Box>
  );
};

export default DonateCard;
