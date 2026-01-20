const codes = [
  "FZ3BA06F496XGP68",
  "ZVSVWK5KN2Y2H3SQ",
  "HWBXPTTGYPMR6NP1",
  "3TBE89CJ0JPM3X1W",
  "4W3PEAF0K26CAQ83",
  "326KRSQ9041492BQ"
];

const container = document.getElementById("codeList");

codes.forEach(code => {
  const box = document.createElement("div");
  box.className = "code-box";

  const span = document.createElement("span");
  span.className = "code";
  span.innerText = code;

  const btn = document.createElement("button");
  btn.className = "copy";
  btn.innerText = "Copy";
  btn.onclick = () => {
    navigator.clipboard.writeText(code);
    btn.innerText = "Copied";
    setTimeout(() => btn.innerText = "Copy", 1200);
  };

  box.appendChild(span);
  box.appendChild(btn);
  container.appendChild(box);
});
