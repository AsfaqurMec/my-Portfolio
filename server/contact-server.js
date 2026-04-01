import "./load-env.js";
import cors from "cors";
import express from "express";
import { appendContact, listContacts } from "./contact-storage.js";

const app = express();
const PORT = process.env.CONTACT_SERVER_PORT || 8787;

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.get("/api/contact-messages", async (req, res) => {
  const key = process.env.CONTACT_ADMIN_KEY;
  if (!key) {
    return res.status(500).json({ message: "CONTACT_ADMIN_KEY is not configured on the server." });
  }
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (token !== key) {
    return res.status(401).json({ message: "Unauthorized." });
  }
  try {
    const messages = await listContacts();
    return res.status(200).json(messages);
  } catch (e) {
    return res.status(500).json({ message: e?.message || "Failed to load messages." });
  }
});

app.post("/api/contact", async (req, res) => {
  const { name, email, mobile, description } = req.body || {};

  if (!name?.trim() || !email?.trim() || !mobile?.trim() || !description?.trim()) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (description.trim().length < 50) {
    return res.status(400).json({ message: "Description must be at least 50 characters." });
  }

  try {
    const saved = await appendContact({ name, email, mobile, description });

    return res.status(200).json({
      message: "Message received successfully.",
      id: saved._id,
    });
  } catch (error) {
    return res.status(500).json({
      message: error?.message || "Failed to save your message.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API server running on http://localhost:${PORT}`);
});
