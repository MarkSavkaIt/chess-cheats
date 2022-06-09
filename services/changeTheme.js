const btn = document.getElementById("theme");
const body = document.getElementsByTagName("body")[0];

console.log(btn);
console.log(body);

btn.addEventListener("click", () => {
  console.log(111);
  const theme = body.dataset.theme;
  console.log("theme: ", theme);
  if (theme === "dark") {
    body.dataset.theme = "light";
  } else {
    body.dataset.theme = "dark";
  }
});
