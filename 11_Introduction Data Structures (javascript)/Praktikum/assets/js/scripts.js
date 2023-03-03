const formProduct = document.getElementById("formProduct");
const inputProductName = document.getElementById("productName");
const inputProductCategory = document.getElementById("productCategory");
const inputProductImage = document.getElementById("formFile");
const inputProductPrice = document.getElementById("productPrice");
const inputProductDescription = document.getElementById(
  "additionalDescription"
);

const productNameFeedback = document.getElementById("productNameFeedback");
const submitButton = document.getElementById("submitButton");

let isProductNameValid = false;

inputProductName.addEventListener("input", (e) => {
  const productName = e.target.value;
  const nameLength = e.target.value.length;
  const specialCharacter = /[@/#{}]/;

  if (nameLength > 10) {
    productNameFeedback.innerText =
      "Product Name must not exceed 25 characters.";
    productNameFeedback.style.color = "orange";
    if (nameLength > 25) {
      isProductNameValid = false;
      const trimmedString = productName.substring(0, 25);
      e.target.value = trimmedString;
      productNameFeedback.style.color = "red";
    } else {
      if (specialCharacter.test(productName)) {
        isProductNameValid = false;
        productNameFeedback.innerText = "Name must not contain symbols.";
        productNameFeedback.style.color = "red";
      } else {
        isProductNameValid = true;
      }
    }
  } else {
    if (specialCharacter.test(productName)) {
      isProductNameValid = false;
      productNameFeedback.innerText = "Name must not contain symbols.";
      productNameFeedback.style.color = "red";
    } else {
      if (productName == "") {
        isProductNameValid = false;
        productNameFeedback.innerText = "Please enter a valid Prouct name.";
      } else {
        isProductNameValid = true;
      }
    }
  }
});

// Menonaktifkan button submit saat inputan
// belum valid secara keseluruhan.
formProduct.addEventListener("input", () => {
  if (fieldValidation()) {
    submitButton.classList.remove("disabled");
  } else {
    submitButton.classList.add("disabled");
  }
});

formProduct.addEventListener("submit", (e) => {
  e.preventDefault();
  const specialCharacter = /[@/#{}]/;

  if (inputProductName.value == "") {
    productNameFeedback.innerText = "Please enter a valid Prouct name.";
    productNameFeedback.style.color = "red";
    alert("Please enter a valid Prouct name.");
  } else {
    if (specialCharacter.test(inputProductName.value)) {
      productNameFeedback.innerText = "Name must not contain symbols.";
      productNameFeedback.style.color = "red";
      alert("Name must not contain symbols.");
    } else {
      window.scrollTo(0, 0);
      const productData = document.getElementById("productData");
      const div = document.createElement("div");
      div.innerHTML =
        ` 
        <p>Name: ` +
        inputProductName.value +
        `</p>
        <p>Category: ` +
        inputProductCategory.value +
        `</p>
        <p>Image: ` +
        inputProductImage.files[0].name +
        `</p>
        <p>Freshness: ` +
        formProduct.querySelector('input[name="productFreshness"]:checked')
          .value +
        `</p>
        <p>Additional Description: ` +
        document.getElementById("additionalDescription").value +
        `</p>
        <p class="mb-0">Price: $` +
        inputProductPrice.value +
        `</p>
        <hr />
      `;
      productData.appendChild(div);
      productData.classList.remove("d-none");
      alert(
        "Product Data : \n" +
          "Name: " +
          inputProductName.value +
          "\n" +
          "Category: " +
          inputProductCategory.value +
          "\n" +
          "Image: " +
          inputProductImage.files[0].name +
          "\n" +
          "Freshness: " +
          formProduct.querySelector('input[name="productFreshness"]:checked')
            .value +
          "\n" +
          "Additional Description: " +
          document.getElementById("additionalDescription").value +
          "\n" +
          "Price: $" +
          inputProductPrice.value
      );
    }
  }
});

// function untuk mengubah warna border pada input
// dan menampilkan pesan error jika inputan tidak valid.
function fieldValidation() {
  let isNameValid,
    isCategoryValid,
    isImageValid,
    isPriceValid,
    isFreshnessValid,
    isDescriptionValid = false;

  if (!isProductNameValid) {
    inputProductName.style.border = "1px solid red";
    productNameFeedback.classList.remove("d-none");
  } else {
    inputProductName.style.border = "1px solid #dee2e6";
    productNameFeedback.classList.add("d-none");
    isNameValid = true;
  }

  if (inputProductCategory.value == "") {
    inputProductCategory.style.border = "1px solid red";
  } else {
    inputProductCategory.style.border = "1px solid #dee2e6";
    isCategoryValid = true;
  }

  if (inputProductImage.value == "") {
    inputProductImage.style.border = "1px solid red";
    document.getElementById("productImageFeedback").classList.remove("d-none");
  } else {
    inputProductImage.style.border = "1px solid #0d6efd";
    document.getElementById("productImageFeedback").classList.add("d-none");
    isImageValid = true;
  }

  if (inputProductPrice.value == "") {
    inputProductPrice.style.border = "1px solid red";
    document.getElementById("productPriceFeedback").classList.remove("d-none");
  } else {
    inputProductPrice.style.border = "1px solid #dee2e6";
    document.getElementById("productPriceFeedback").classList.add("d-none");
    isPriceValid = true;
  }

  if (inputProductDescription.value == "") {
    inputProductDescription.style.border = "1px solid red";
    document.getElementById("descriptionFeedback").classList.remove("d-none");
  } else {
    inputProductDescription.style.border = "1px solid #dee2e6";
    document.getElementById("descriptionFeedback").classList.add("d-none");
    isDescriptionValid = true;
  }

  if (
    formProduct.querySelector('input[name="productFreshness"]:checked') == null
  ) {
    document
      .getElementById("productFreshnessFeedback")
      .classList.remove("d-none");
  } else {
    document.getElementById("productFreshnessFeedback").classList.add("d-none");
    isFreshnessValid = true;
  }

  return (
    isNameValid &&
    isCategoryValid &&
    isImageValid &&
    isFreshnessValid &&
    isPriceValid &&
    isDescriptionValid
  );
}

fieldValidation();
