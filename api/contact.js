const setCorsHeaders = (res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
};

export default async function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, mobile, description } = req.body || {};

  if (!name?.trim() || !email?.trim() || !mobile?.trim() || !description?.trim()) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (description.trim().length < 50) {
    return res.status(400).json({
      message: "Description must be at least 50 characters.",
    });
  }

  // Email sending is disabled. This handler only validates the payload.
  // For persisted submissions + dashboard, use the local Express server (npm run dev).
  return res.status(200).json({ message: "Message received successfully." });
}
