import { NextApiHandler } from "next";
import getStripe from "src/getStripe";

const stripe = getStripe();

interface PostBody {
  id: string;
}

function parseBody(body: unknown): PostBody | undefined {
  if (typeof body !== "object") {
    return undefined;
  }
  const { id } = body as { [k: string]: unknown };
  return typeof id === "string" ? { id } : undefined;
}

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const body = parseBody(req.body);
      if (body === undefined) {
        res.status(400).json({ error: "Invalid input" });
        return;
      }
      const subscription = await stripe.subscriptions.del(body.id);
      res.status(200).json({ subscription });
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
