const input = document.querySelectorAll("input");
const body = document.querySelector("body");
let userData = {};
input.forEach(el => {
  el.addEventListener("blur", e => {
    const name = e.target.name,
      value = e.target.value;
    userData[name] = value;
    if (e.target.name === "digitalM") {
      fetch("https://dscmandya-ed9ad.firebaseio.com/candidates.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      }).then(res => {
        console.log(res);
      });
    }
  });
});
