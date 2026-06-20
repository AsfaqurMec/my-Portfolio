import api from "./api";

export const contactService = {
  // Get all messages (admin)
  getMessages: async () => {
    const response = await api.get("/contact-messages");
    return response.data;
  },

  // Send message (create)
  sendMessage: async (contactData) => {
    const response = await api.post("/contact", contactData);
    return response.data;
  },

  // Delete message (optional)
  deleteMessage: async (id) => {
    const response = await api.delete(`/contact/${id}`);
    return response.data;
  },
};




// import api from "./api";

// const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";
// const CONTACT_MESSAGES_URL =
//   import.meta.env.VITE_CONTACT_MESSAGES_URL || "/api/contact-messages";

// const parseResponseData = async (response) => {
//   const contentType = response.headers.get("content-type") || "";
//   const raw = await response.text();

//   if (!raw) return {};
//   if (contentType.includes("application/json")) {
//     try {
//       return JSON.parse(raw);
//     } catch {
//       return {};
//     }
//   }

//   return { message: raw };
// };

// export const contactService = {
//   getMessages: async () => {
//     const key = import.meta.env.VITE_CONTACT_ADMIN_KEY;
//     if (!key) {
//       throw new Error("Set VITE_CONTACT_ADMIN_KEY in your environment (same value as CONTACT_ADMIN_KEY on the server).");
//     }
//     const response = await fetch(CONTACT_MESSAGES_URL, {
//       headers: {
//         Authorization: `Bearer ${key}`,
//       },
//     });
//     const data = await parseResponseData(response);
//     if (!response.ok) {
//       throw new Error(data?.message || "Failed to load contact messages.");
//     }
//     return Array.isArray(data) ? data : [];
//   },

//   sendMessage: async (payload) => {
//     // If a dedicated absolute URL is configured, use fetch directly.
//     if (CONTACT_API_URL.startsWith("http://") || CONTACT_API_URL.startsWith("https://") || CONTACT_API_URL.startsWith("/api/")) {
//       const response = await fetch(CONTACT_API_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await parseResponseData(response);
//       if (!response.ok) {
//         throw new Error(
//           data?.message ||
//             `Request failed (${response.status}). Configure VITE_CONTACT_API_URL to your email API.`
//         );
//       }
//       return data;
//     }

//     // Fallback to configured API instance base URL.
//     const response = await api.post(CONTACT_API_URL, payload);
//     return response.data;
//   },
// };
