export function getSavedData() {
  const data = localStorage.getItem("myCounter");

  if (data !== null) {
    return JSON.parse(data);
  }

  return 0;
}

export function saveData(count) {
  localStorage.setItem("myCounter", JSON.stringify(count));
}
