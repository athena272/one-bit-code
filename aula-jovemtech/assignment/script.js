const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const telInput = document.getElementById("tel");
const messageInput = document.getElementById("message");

function setError(input, errorId, message)
{
  const errorEl = document.getElementById(errorId);
  errorEl.textContent = message;
  errorEl.classList.add("error");
  errorEl.setAttribute("role", "alert");

  input.setAttribute("aria-invalid", "true");
}

function clearError(input, errorId)
{
  const errorEl = document.getElementById(errorId);
  errorEl.textContent = "";
  errorEl.removeAttribute("role");

  input.removeAttribute("aria-invalid");
}

function validateRequired(input, errorId, message)
{
  const value = input.value.trim();
  if (value === "")
  {
    setError(input, errorId, message);
    return false;
  }
  clearError(input, errorId);
  return true;
}

function validateEmailBasic(input, errorId)
{
  const value = input.value.trim();
  // Validação bem básica (para aula teste)
  const ok = value.includes("@") && value.includes(".");
  if (!ok)
  {
    setError(input, errorId, "Digite um email válido (ex: nome@dominio.com).");
    return false;
  }
  clearError(input, errorId);
  return true;
}

/*
  ==========================
  ATIVIDADE DO ALUNO
  ==========================
  Criar a função validatePhone:
  - Campo obrigatório
  - Deve ter pelo menos 10 dígitos
  - Dica: remover tudo que não for número usando regex
*/
// function validatePhone(input, errorId) {
//   ...
// }

form.addEventListener("submit", (event) =>
{
  event.preventDefault();

  let isValid = true;

  // Obrigatórios
  if (!validateRequired(nameInput, "nameError", "Nome é obrigatório."))
  {
    isValid = false;
  }
  if (!validateRequired(emailInput, "emailError", "Email é obrigatório."))
  {
    isValid = false;
  }
  if (
    !validateRequired(messageInput, "messageError", "Mensagem é obrigatória.")
  )
  {
    isValid = false;
  }

  // Se email não estiver vazio, valida formato básico
  if (emailInput.value.trim() !== "")
  {
    if (!validateEmailBasic(emailInput, "emailError")) isValid = false;
  }

  /*
    ATIVIDADE:
    Depois de validar se o telefone está vazio,
    validar se ele tem pelo menos 10 dígitos
  */
  // if (!validatePhone(telInput, "telError")) {
  //   isValid = false;
  // }

  if (!isValid)
  {
    return;
  }

  alert("Formulário válido! (Aqui você enviaria para o servidor.)");
});

// UX: ao digitar, tenta limpar erro do campo
nameInput.addEventListener("input", () =>
  validateRequired(nameInput, "nameError", "Nome é obrigatório.")
);
emailInput.addEventListener("input", () =>
{
  if (emailInput.value.trim() === "")
  {
    validateRequired(emailInput, "emailError", "Email é obrigatório.");
  } else
  {
    validateEmailBasic(emailInput, "emailError");
  }
});
messageInput.addEventListener("input", () =>
  validateRequired(messageInput, "messageError", "Mensagem é obrigatória.")
);
