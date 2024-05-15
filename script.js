const form = document.createElement("form");

// Input Euro
const inputEuro = document.createElement("input");
inputEuro.className = "input";
inputEuro.type = "text";
inputEuro.placeholder = "Euros";

// Input Suisse
const inputSwiss = document.createElement("input");
inputSwiss.className = "input";
inputSwiss.type = "text";
inputSwiss.placeholder = "Franc Suisse";

// Ajout des éléments dans le DOM
form.appendChild(inputEuro);
form.appendChild(inputSwiss);
document.body.appendChild(form);

// Ajoute un message si la valeur nest pas un nombre.
const alertNotNumber = document.createElement("h3");
alertNotNumber.innerHTML = "Veuillez entrer un nombre valide !";
alertNotNumber.style.color = "red";

// Blocage de la soumission du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Convertion euros en franc suisse
inputEuro.addEventListener("input", (e) => {
  const inputValue = e.target.value;

  if (isNaN(inputValue)) {
    document.body.appendChild(alertNotNumber);
  } else {
    alertNotNumber.remove();
    const conversion = inputValue * 0.98;
    inputSwiss.value = conversion.toFixed(2);
  }

  if (inputValue.length == 0) {
    inputSwiss.value = "";
  }
});

// Convertion franc suisse en euro
inputSwiss.addEventListener("input", (e) => {
  const inputValue = e.target.value;

  if (isNaN(inputValue)) {
    document.body.appendChild(alertNotNumber);
  } else {
    alertNotNumber.remove();
    const conversion = inputValue / 0.98;
    inputEuro.value = conversion.toFixed(2);
  }

  if (inputValue.length == 0) {
    inputEuro.value = "";
  }
});
