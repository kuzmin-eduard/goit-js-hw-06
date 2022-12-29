const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені");
    return;
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  e.currentTarget.reset();
}
