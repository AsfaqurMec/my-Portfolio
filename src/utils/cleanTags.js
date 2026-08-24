/**
 * Cleans a tag string by stripping nested escaped quotes, brackets, or backslashes
 * caused by prior double-stringification / formatting bugs.
 */
export function cleanTag(str) {
  if (str === null || str === undefined) return '';
  if (typeof str !== 'string') return String(str).trim();

  let clean = str.trim();
  while (
    (clean.startsWith('["') && clean.endsWith('"]')) ||
    (clean.startsWith('[\"') && clean.endsWith('\"]')) ||
    (clean.startsWith('"') && clean.endsWith('"')) ||
    (clean.startsWith('\\"') && clean.endsWith('\\"')) ||
    (clean.startsWith('[') && clean.endsWith(']'))
  ) {
    if (clean.startsWith('["') && clean.endsWith('"]')) clean = clean.slice(2, -2);
    else if (clean.startsWith('[\"') && clean.endsWith('\"]')) clean = clean.slice(3, -3);
    else if (clean.startsWith('\\"') && clean.endsWith('\\"')) clean = clean.slice(2, -2);
    else if (clean.startsWith('"') && clean.endsWith('"')) clean = clean.slice(1, -1);
    else if (clean.startsWith('[') && clean.endsWith(']')) clean = clean.slice(1, -1);
    clean = clean.trim();
  }

  return clean.replace(/\\"/g, '"').trim();
}

/**
 * Normalizes an array or string field into a clean array of non-empty strings.
 * Safely unrolls JSON-stringified arrays and delimited strings.
 */
export function cleanArray(value) {
  if (value === null || value === undefined) return [];

  if (Array.isArray(value)) {
    return value
      .flatMap((item) => {
        if (typeof item === 'string') {
          const trimmed = item.trim();
          if (
            (trimmed.startsWith('[') && trimmed.endsWith(']')) ||
            (trimmed.startsWith('"') && trimmed.endsWith('"'))
          ) {
            try {
              const parsed = JSON.parse(trimmed);
              if (Array.isArray(parsed)) return cleanArray(parsed);
              if (typeof parsed === 'string') return [cleanTag(parsed)];
            } catch {
              // Not valid JSON, process item
            }
          }
        }
        return [cleanTag(item)];
      })
      .filter(Boolean);
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (!trimmed) return [];

    if (
      (trimmed.startsWith('[') && trimmed.endsWith(']')) ||
      (trimmed.startsWith('"') && trimmed.endsWith('"'))
    ) {
      try {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed) || typeof parsed === 'string') {
          return cleanArray(parsed);
        }
      } catch {
        // Not valid JSON, fall through
      }
    }

    return trimmed
      .split(/\r?\n|,/)
      .map(cleanTag)
      .filter(Boolean);
  }

  return [];
}

/**
 * Sorts projects array in ascending order of `order` (default 0),
 * falling back to createdAt or natural index.
 */
export function sortProjects(projects) {
  if (!Array.isArray(projects)) return [];
  return [...projects].sort((a, b) => {
    const orderA = a.order !== undefined && a.order !== null ? Number(a.order) : (a.sort !== undefined ? Number(a.sort) : 0);
    const orderB = b.order !== undefined && b.order !== null ? Number(b.order) : (b.sort !== undefined ? Number(b.sort) : 0);
    if (orderA !== orderB) return orderA - orderB;
    return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
  });
}
