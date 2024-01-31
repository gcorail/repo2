const getProducts = require("./GetProducts");
const getProductsCart = require("./GetProductsCart");
const addProductCart = require("./addProductCart");
const putProduct = require("./PutProduct");
const deleteProduct = require("./DeleteProduct");
const getProductById = require("./GetProductById")

module.exports = {
  getProducts,
  getProductsCart,
  addProductCart,
  putProduct,
  deleteProduct,
  getProductById
};
