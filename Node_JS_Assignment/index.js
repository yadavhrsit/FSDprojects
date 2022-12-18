const express = require("express");
const Joi = require("joi");
const { join } = require("path");
const app = express();
app.use(express.json());

//Data for our Inventory
Data = [
  {
    id: 1,
    name: "Vans Maroon Shirt",
    total_quantity: 12,
    type_of_product: "Shirt",
    price: 4500,
  },
  {
    id: 2,
    name: "USPA Grey Shirt",
    total_quantity: 4,
    type_of_product: "Shirt",
    price: 1200,
  },
  {
    id: 3,
    name: "Converse Canvas",
    total_quantity: 100,
    type_of_product: "Shoes",
    price: 10000,
  },
];

// ---------- Get Functions ----------
// function to get all products
app.get("/products", (req, res) => {
  res.send(Data);
});
//  function to get product by ID
app.get("/product/id/:id", (req, res) => {
  const pId = req.params.id;
  const product = Data.find((product) => product.id === parseInt(pId));
  if (!product) {
    res.status(404).send("Invalid Product ID");
  } else res.send(product);
});
//  function to get product by Name
app.get("/product/name/:name", (req, res) => {
  const pName = req.params.name;
  const product = Data.find((product) => product.name === pName);
  if (!product) {
    res.status(404).send("Invalid Product Name");
  } else res.send(product);
});

// ---------- Post Function -----------
app.post("/product", (req, res) => {
  const validateResult = validateproduct(req.body);
  console.log(validateResult);

  if (validateResult.error) res.send(validateResult.error);
  else {
    var product = {
      id: Data.length + 1,
      name: req.body.name,
      total_quantity: req.body.price,
      type_of_product: req.body.price,
      price: req.body.price,
    };
    //push our new product into the Data array
    Data.push(product);
    res.send(product);
  }
});

// Validation of POST function using JOI
function validateproduct(product) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    total_quantity: Joi.integer().min(1).required(),
    type_of_product: Joi.string().min(3).max(15).required(),
    price: Joi.integer().min(1).required(),
  });

  try {
    const result = schema.validate(product);
    return result;
  } catch (err) {
    return err;
  }
}

app.listen(5000, () => {
  console.log("App Started");
});
