import { NextApiHandler } from "next";
import getBalanceModifications from "src/googleBalanceModifications";
import getBalanceTransactions from "src/stripeBalanceTransactions";

function parseCreated(
  created: string | string[] | undefined
): number | undefined {
  if (typeof created !== "string") {
    return undefined;
  }
  return parseInt(created, 10);
}

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const created = parseCreated(req.query.created);
    if (created === undefined) {
      res.status(400).json({ error: "Invalid input" });
      return;
    }
    try {
      const [batch, modifications] = await Promise.all([
        getBalanceTransactions(created),
        getBalanceModifications(),
      ]);
      res.status(200).json({ batch, modifications });
    } catch (err) {
      console.error(err);
      res
        .status(500)
        .json({ statusCode: 500, message: (err as Error).message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
};

export default handler;
