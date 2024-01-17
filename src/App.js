import { Product } from "./Product.js";
import { UI } from "./UI.js";
import { Owner } from "./Owner.js";

// DOM Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    // Override the default Form behaviour
    e.preventDefault();

    // Getting Form Values
    const name = document.getElementById("name").value,
      price = document.getElementById("price").value,
      year = document.getElementById("year").value,
      nombre = document.getElementById("nombre").value,
      apellido = document.getElementById("apellido").value,
      num_tel = document.getElementById("num_tel").value;

    // Create a new Oject Product
    const product = new Product(name, price, year);
    const owner = new Owner(nombre,apellido,num_tel);
    owner.añadirProducto(product);

    // Create a new UI instance
    const ui = new UI();

    // Input User Validation
    if (name === "" || price === "" || year === "") {
      ui.showMessage("Please Insert data in all fields", "danger");
    }

    // Save Product
    ui.addProduct(product,owner);
    ui.showMessage("Product Added Successfully", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});
