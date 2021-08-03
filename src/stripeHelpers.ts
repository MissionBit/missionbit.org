export const FREQUENCIES = ["one-time", "monthly"] as const;
export type Frequency = typeof FREQUENCIES[number];

export const PAYMENT_METHODS = ["Stripe Checkout"] as const;
export type PaymentMethod = typeof PAYMENT_METHODS[number];

const gtag =
  (typeof window === "undefined" ? undefined : window.gtag) ??
  (() => undefined);

export function isFrequency(frequency: string): frequency is Frequency {
  return FREQUENCIES.includes(frequency as unknown as Frequency);
}

export function capitalizeFirst(s: string): string {
  return s.length >= 1 ? `${s.charAt(0).toUpperCase()}${s.substr(1)}` : s;
}

function donationItem(amount: number, frequency: Frequency) {
  return {
    id:
      frequency === "one-time"
        ? "web-donation-once"
        : `web-donation-${frequency}`,
    name: `${capitalizeFirst(frequency)} Donation`,
    price: amount / 100,
    quantity: 1,
  } as const;
}

export function parseCents(s: string): number | null {
  /* Parse a string representing a dollar value to cents */
  const m = /^\s*\$?([1-9]\d*)((?:,\d\d\d)*)(?:\.(\d\d))?\s*$/.exec(s);
  if (!m) {
    return null;
  }
  const leading = m[1];
  const comma_groups = m[2] || "";
  const cents = m[3] || "00";
  return Number(leading + comma_groups.replace(/,/g, "") + cents);
}

export function trackCheckoutEvent(
  amount: number,
  frequency: Frequency,
  paymentMethod: PaymentMethod
): void {
  const item = donationItem(amount, frequency);
  gtag("event", "begin_checkout", {
    items: [item],
    coupon: "",
  });
  gtag("event", "set_checkout_option", {
    checkout_step: 1,
    checkout_option: "payment method",
    value: paymentMethod,
  });
}
