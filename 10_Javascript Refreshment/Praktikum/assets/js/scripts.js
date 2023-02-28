const formProduct = document.getElementById("formProduct");
const inputProductName = document.getElementById("productName");
const productNameFeedback = document.getElementById("productNameFeedback");

inputProductName.addEventListener("input", (e) => {
  const nameLength = e.target.value.length;
  const specialCharacter = /[@/#{}]/;
  if (nameLength > 10) {
    productNameFeedback.innerText = "Last Name must not exceed 25 characters.";
    productNameFeedback.style.color = "orange";
  } else {
    productNameFeedback.innerText = "";
  }

  if (nameLength > 25) {
    const trimmedString = e.target.value.substring(0, 25);
    e.target.value = trimmedString;
    productNameFeedback.style.color = "red";
  } else {
    if (specialCharacter.test(e.target.value)) {
      productNameFeedback.innerText = "Name must not contain symbols.";
      productNameFeedback.style.color = "red";
    }
  }
});

formProduct.addEventListener("submit", (e) => {
  e.preventDefault();
  const specialCharacter = /[@/#{}]/;

  if (inputProductName.value == "") {
    productNameFeedback.innerText = "Please enter a valid Prouct name.";
    productNameFeedback.style.color = "red";
    alert("Please enter a valid Prouct name.");
  }

  if (specialCharacter.test(inputProductName.value)) {
    productNameFeedback.innerText = "Name must not contain symbols.";
    productNameFeedback.style.color = "red";
    alert("Name must not contain symbols.");
  }
});
