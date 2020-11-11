import { NextApiRequest, NextApiResponse } from "next";
import getBalanceTransactions from "src/stripeBalanceTransactions";

function parseCreated(
  created: string | string[] | undefined
): number | undefined {
  if (typeof created !== "string") {
    return undefined;
  }
  return parseInt(created, 10);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const created = parseCreated(req.query.created);
    if (created === undefined) {
      res.status(400).json({ error: "Invalid input" });
      return;
    }
    try {
      res.status(200).json(await getBalanceTransactions(created));
    } catch (err) {
      console.error(err);
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
