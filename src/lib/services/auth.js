import { getRegularHeaders } from "./header";

export async function authenticate({username, password}) {
  const response = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    body: JSON.stringify({username, password}),
    credentials: "include",
    headers: getRegularHeaders()
  });

  if (!response.ok) {
    const details = await response.json();
    throw new Error(details.message);
  }

  return await response.json();
}