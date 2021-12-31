export default async (
  url: string,
  method: "get" | "post" | "put" | "delete" | "update" | "patch" = "get",
  body: any,
  headers: any
): Promise<any> => {
  const result = await fetch(url, {
    headers,
    method,
    body,
  });
  const resultJson = await result.json();
  return resultJson;
};
