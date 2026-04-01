import { Fragment, useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { contactService } from "../../services/contactService";

const truncate = (text, max = 48) => {
  const t = text || "";
  if (t.length <= max) return t;
  return `${t.slice(0, max)}…`;
};

const formatDate = (iso) => {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
};

const DashboardContacts = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError("");
      try {
        const data = await contactService.getMessages();
        if (!cancelled) setMessages(data);
      } catch (e) {
        if (!cancelled) setError(e?.message || "Failed to load submissions.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-100 mb-2">Contact submissions</h2>
      <p className="text-stone-500 text-sm mb-6">
        Messages from the portfolio contact form. Expand a row to read the full description.
      </p>

      {loading && (
        <div className="text-center py-16 text-stone-400">Loading submissions…</div>
      )}

      {!loading && error && (
        <div className="rounded-xl border border-rose-500/40 bg-rose-950/30 text-rose-200 px-4 py-3 text-sm">
          {error}
        </div>
      )}

      {!loading && !error && messages.length === 0 && (
        <div className="card-light p-10 text-center text-stone-400">
          No submissions yet. They appear here after visitors submit the contact form.
        </div>
      )}

      {!loading && !error && messages.length > 0 && (
        <div className="overflow-x-auto rounded-xl border border-stone-600/60 bg-stone-900/40">
          <table className="w-full text-left text-sm text-stone-200">
            <thead>
              <tr className="border-b border-stone-600/80 bg-stone-800/50 text-stone-400 uppercase text-xs tracking-wide">
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Email</th>
                <th className="px-4 py-3 font-semibold">Mobile</th>
                <th className="px-4 py-3 font-semibold min-w-[140px]">Description</th>
                <th className="px-4 py-3 font-semibold w-28 text-center">Details</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((row) => {
                const isOpen = expandedId === row._id;
                return (
                  <Fragment key={row._id}>
                    <tr className="border-b border-stone-700/80 hover:bg-stone-800/30 transition-colors">
                      <td className="px-4 py-3 text-stone-400 whitespace-nowrap">
                        {formatDate(row.createdAt)}
                      </td>
                      <td className="px-4 py-3 font-medium text-stone-100">{row.name}</td>
                      <td className="px-4 py-3 text-sky-300/90 break-all max-w-[180px]">
                        {row.email}
                      </td>
                      <td className="px-4 py-3 text-stone-300 whitespace-nowrap">{row.mobile}</td>
                      <td className="px-4 py-3 text-stone-400 max-w-xs">
                        {truncate(row.description)}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button
                          type="button"
                          onClick={() => toggleExpand(row._id)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-700/80 hover:bg-stone-600 text-stone-200 text-xs font-medium transition-colors"
                          aria-expanded={isOpen}
                        >
                          {isOpen ? (
                            <>
                              Hide <FaChevronUp className="h-3 w-3" />
                            </>
                          ) : (
                            <>
                              Expand <FaChevronDown className="h-3 w-3" />
                            </>
                          )}
                        </button>
                      </td>
                    </tr>
                    {isOpen && (
                      <tr className="bg-stone-950/60 border-b border-stone-700/80">
                        <td colSpan={6} className="px-4 py-4">
                          <div className="rounded-lg border border-stone-600/50 bg-stone-900/80 p-4 text-left space-y-3">
                            <div className="grid sm:grid-cols-2 gap-3 text-sm">
                              <p>
                                <span className="text-stone-500">Name:</span>{" "}
                                <span className="text-stone-200">{row.name}</span>
                              </p>
                              <p>
                                <span className="text-stone-500">Email:</span>{" "}
                                <span className="text-sky-300/90">{row.email}</span>
                              </p>
                              <p>
                                <span className="text-stone-500">Mobile:</span>{" "}
                                <span className="text-stone-200">{row.mobile}</span>
                              </p>
                              <p>
                                <span className="text-stone-500">Submitted:</span>{" "}
                                <span className="text-stone-300">{formatDate(row.createdAt)}</span>
                              </p>
                            </div>
                            <div>
                              <p className="text-stone-500 text-xs font-semibold uppercase tracking-wide mb-1">
                                Full description
                              </p>
                              <p className="text-stone-200 whitespace-pre-wrap leading-relaxed">
                                {row.description}
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashboardContacts;
