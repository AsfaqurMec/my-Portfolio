import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, "data", "contacts.json");

async function ensureDataFile() {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf8");
  }
}

export async function appendContact({ name, email, mobile, description }) {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  const list = JSON.parse(raw || "[]");
  const record = {
    _id: `c_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
    name: name.trim(),
    email: email.trim(),
    mobile: mobile.trim(),
    description: description.trim(),
    createdAt: new Date().toISOString(),
  };
  list.unshift(record);
  await fs.writeFile(DATA_FILE, JSON.stringify(list, null, 2), "utf8");
  return record;
}

export async function listContacts() {
  await ensureDataFile();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  return JSON.parse(raw || "[]");
}
