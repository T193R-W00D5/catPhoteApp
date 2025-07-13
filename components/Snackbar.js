export function showSnackbar(elementId, message, duration = 3000) {
  const snackbar = document.getElementById(elementId);
  snackbar.innerHTML = message;
  snackbar.className = "show";
  setTimeout(() => {
    snackbar.className = snackbar.className.replace("show", "");
  }, duration);
}