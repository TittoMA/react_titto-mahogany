const formProduct = document.getElementById("form-product");
const submitButton = document.getElementById("submit-button");

/**
 * Function untuk menambahkan data product ke dalam
 * tabel product.
 *
 * @param {string} productName - product name
 * @param {string} productCategory - product catgegory
 * @param {string} productImage - filename of product image
 * @param {string} productDescription - description of product
 * @param {string} productPrice - product price
 * @param {string} productFreshness - product freshness
 * @return {void}
 *
 */
const addProduct = (
  productName,
  productCategory,
  productImage,
  productDescription,
  productPrice,
  productFreshness
) => {
  const productTable = document.getElementById("product-table");
  const tableRow = document.createElement("tr");
  const number = productTable.childElementCount;
  tableRow.innerHTML = ` 
    <td>${number}</td>
    <td>${productName}</td>
    <td>${productCategory}</td>
    <td>${productImage}</td>
    <td>${productFreshness}</td>
    <td>${productDescription}</td>
    <td>${productPrice}</td>
  `;
  productTable.appendChild(tableRow);
};

/**
 * Melakukan validasi untuk input product freshness
 * yang berbentuk radio button.
 *
 * @return {boolean}
 *
 */
const productFreshnessValidation = () => {
  const productFreshness = formProduct.querySelector(
    'input[name="product-freshness"]:checked'
  );
  const feedBackElement = document.getElementById("product-freshness-feedback");

  if (productFreshness === null) {
    feedBackElement.innerText = "Please fill out this field.";
    feedBackElement.style.color = "red";
    feedBackElement.classList.remove("d-none");
    return false;
  }

  feedBackElement.classList.add("d-none");
  return true;
};

/**
 * Validasi tambahan untuk product name input.
 *
 * @param {string} feedBackId - HTML element id of feedback text
 * @return {boolean}
 *
 */
const productNameValidation = (feedBackId) => {
  const productName = document.getElementById("product-name");
  const feedBackElement = document.getElementById(feedBackId);
  const specialCharacter = /[@/#{}]/;

  if (productName.value.length > 25) {
    const trimmedString = productName.value.substring(0, 25);
    productName.value = trimmedString;
    feedBackElement.innerText = "Product Name must not exceed 25 characters.";
    feedBackElement.style.color = "red";
    return false;
  }

  if (specialCharacter.test(productName.value)) {
    feedBackElement.innerText = "Name must not contain symbols.";
    feedBackElement.style.color = "red";
    return false;
  }
};

/**
 * function untuk mengubah warna border pada input
 * dan menampilkan pesan error jika inputan tidak valid.
 *
 * @param {string} elementId - HTML element id of input
 * @param {string} feedBackId - HTML element id of feedback text
 * @param {string} [additionalValidation=null] - optional function for additional validation
 * @return {boolean}
 *
 */
const inputValidation = ({
  elementId,
  feedBackId,
  additionalValidation = null,
}) => {
  const element = document.getElementById(elementId);
  const feedBackElement = document.getElementById(feedBackId);

  element.style.border = "1px solid red";
  feedBackElement.classList.remove("d-none");
  if (element.value === "") {
    feedBackElement.innerText = "Please fill out this field.";
    return false;
  }
  if (additionalValidation !== null) {
    if (!additionalValidation) {
      return false;
    }
  }

  element.style.border = "1px solid #dee2e6";
  feedBackElement.classList.add("d-none");
  console.log("validated");
  return true;
};

/**
 * Melakukan validasi untuk semua input pada form
 *
 * @return {boolean}
 *
 */
const allFormValidation = () => {
  const nameValidation = inputValidation({
    elementId: "product-name",
    feedBackId: "product-name-feedback",
    additionalValidation: productNameValidation("product-name-feedback"),
  });
  const categoryValidation = inputValidation({
    elementId: "product-category",
    feedBackId: "product-category-feedback",
  });
  const imageValidation = inputValidation({
    elementId: "product-image",
    feedBackId: "product-image-feedback",
  });
  const freshnessValidation = productFreshnessValidation();
  const descriptionValidation = inputValidation({
    elementId: "product-description",
    feedBackId: "product-description-feedback",
  });
  const priceValidation = inputValidation({
    elementId: "product-price",
    feedBackId: "product-price-feedback",
  });

  if (
    nameValidation &&
    categoryValidation &&
    imageValidation &&
    freshnessValidation &&
    descriptionValidation &&
    priceValidation
  ) {
    return true;
  } else {
    return false;
  }
};

/**
 * Menonaktifkan button submit saat inputan
 * belum valid secara keseluruhan.
 */
formProduct.addEventListener("input", () => {
  if (allFormValidation()) {
    submitButton.classList.remove("disabled");
  } else {
    submitButton.classList.add("disabled");
  }
});

formProduct.addEventListener("submit", (e) => {
  e.preventDefault();
  if (allFormValidation()) {
    const productName = document.getElementById("product-name");
    const productCategory = document.getElementById("product-category");
    const productImage = document.getElementById("product-image");
    const productDescription = document.getElementById("product-description");
    const productPrice = document.getElementById("product-price");
    const productFreshness = formProduct.querySelector(
      'input[name="product-freshness"]:checked'
    );
    alert(`
        INPUT SUCCESS\n
        Product data:
        Name: ${productName.value}
        Category:  ${productCategory.value}
        Image: ${productImage.files[0].name}
        Freshness: ${productFreshness.value}
        Additional Description: ${productDescription.value}
        Price: $${productPrice.value}
      `);
    addProduct(
      productName.value,
      productCategory.value,
      productImage.files[0].name,
      productDescription.value,
      productPrice.value,
      productFreshness.value
    );
  } else {
    alert("input is not valid!");
  }
});
