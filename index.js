let a;
let b;
let c;

document.addEventListener("keydown", (event) => {
  event.key == "Enter" && document.getElementById("button").click();
});

document.getElementById("button").addEventListener("click", () => {
  a = document.getElementById("input-a").value;
  a = Number(a);

  b = document.getElementById("input-b").value;
  b = Number(b);

  c = Math.pow(a, 2) + Math.pow(b, 2);

  document.getElementById("result").classList.add("bold");
  document.getElementById("result").innerHTML = c;
});
