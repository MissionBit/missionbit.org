export const FREQUENCIES = ["once", "monthly"] as const;
export type Frequency = typeof FREQUENCIES[number];

export const PAYMENT_METHODS = ["Stripe Checkout"] as const;
export type PaymentMethod = typeof PAYMENT_METHODS[number];

const gtag =
  (typeof window === "undefined" ? undefined : window.gtag) ?? (() => {});

export function donationItem(amount: number, frequency: Frequency) {
  return {
    id: frequency === "monthly" ? "web-donation-monthly" : "web-donation-once",
    name: frequency === "monthly" ? "Monthly Donation" : "One-time Donation",
    price: amount / 100,
    quantity: 1,
  };
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
) {
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
  // fbq("track", "InitiateCheckout", {
  //   value: item.price,
  //   currency: "USD",
  //   contents: [
  //     {
  //       id: item.id,
  //       quantity: item.quantity,
  //       item_price: item.price,
  //     },
  //   ],
  //   content_ids: [item.id],
  //   content_type: "product",
  //   payment_method: paymentMethod,
  // });
}
