export const getData = async <T>(
  url: URL,
  options?: RequestInit,
): Promise<T> => {
  const res = await fetch(url, options);

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }

  return res.json();
};
