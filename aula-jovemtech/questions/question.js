const link = document.getElementById('link')
const input = document.getElementById('input')

link.addEventListener("click", (event) =>
{
    event.preventDefault();
    alert("Navegação bloqueada");
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});
