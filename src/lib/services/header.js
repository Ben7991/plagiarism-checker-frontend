export function getRegularHeaders() {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  return headers;
};


export function getHeadersWithAuth(token) {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${token}`);
  return headers;
}