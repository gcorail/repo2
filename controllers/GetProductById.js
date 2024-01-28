const Product = require("../models/Product");

const getProductById = async (req, res) => {
  try {
      const {_id} = req.params;

      const productById = await Product.findById(_id);

      res.json({success: true, msg: "Se ha cargado el producto", productById})


  } catch (error) {
      res.status(500).json({success: false, msg: error.message})
  } 

}




module.exports = getProductById;

// puede que el problema sea el findBYId