export function isLoggedIn() {
  if (localStorage.getItem("accessToken")) return true;
  return false;
}
