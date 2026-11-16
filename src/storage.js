// Counter ki saved value get karna
export function getSavedData() {
  const data = localStorage.getItem("counterData");

  if (data) {
    return JSON.parse(data);
  }

  // Agar pehli dafa website open ho
  return {
    count: 0,
    darkMode: false,
  };
}

// Counter aur theme save karna
export function saveData(data) {
  localStorage.setItem("counterData", JSON.stringify(data));
}
