const getProducts = require("./getProducts");
const getProductsCart = require("./GetProductsCart");
const addProductCart = require("./addProductCart");
const putProduct = require("./putProduct");
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
