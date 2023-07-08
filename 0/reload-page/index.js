const reloadButton = document.createElement("button");
document.body.appendChild(reloadButton);

reloadButton.textContent = "새로고침하는 버튼";
reloadButton.style = `
padding: 12px 20px;
background: none;
border: 1px solid gray;
border-radius: 6px;
`;

reloadButton.addEventListener("click", () => {
  location.reload();
});
