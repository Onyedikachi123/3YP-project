// lib/apiClient.ts
// export async function apiFetch<T>(url: string, init?: RequestInit): Promise<T> {
//   const res = await fetch(url, init);
//   if (!res.ok) throw new Error(`API error: ${res.status}`);
//   return res.json() as Promise<T>;
// }

export async function apiFetch<T>(url: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
    next: { revalidate: 0 }, // always fresh
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json() as Promise<T>;
}
