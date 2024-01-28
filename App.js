const express = require("express");
const cors = require("cors");
require('dotenv').config();


// Traemos la conexion de la abse de dtaos al servidor
const db=require('./config/database');

const controllers = require("./controllers");
const userRouter = require("./routes/userRoute");

const pkg = require("mercadopago");
const { MercadoPagoConfig, Preference } = pkg;

const client = new MercadoPagoConfig({

  accessToken: `${process.env.ACCESTOKEN}`, 
});


const app = express();

app.use(cors());
app.use(express.json());






/* GET */
app.get("/products", controllers.getProducts);
app.get("/products-cart", controllers.getProductsCart);


app.get("/productById/:_id", controllers.getProductById);


/* POST */
app.post("/products-cart", controllers.addProductCart);

/* PUT */
app.put("/products-cart/:productId", controllers.putProduct);

/* DELETE */
app.delete("/products-cart/:productId", controllers.deleteProduct);


app.use(userRouter);

// Levantamiento de servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor conectado en puerto: ${process.env.PORT}`)
  db();
})


app.post("/create_preference", async (req, res) => {
  try {
    const body = {
      items: [
        {
          title: req.body.title,
          quantity: Number(req.body.quantity),
          unit_price: Number(req.body.price),
          currency_id: "CLP",
        },
      ],
      back_urls: {
        success: "https://www.mercadopago.cl/developers/es/docs/checkout-api/integration-test/make-test-purchase",
        failure: "https://www.mercadopago.cl/developers/es/docs/checkout-api/integration-test/make-test-purchase",
        pending: "https://www.mercadopago.cl/developers/es/docs/checkout-api/integration-test/make-test-purchase",
      },
      auto_return: "approved",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.json({
      id: result.id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Error al crear la preferencia :(",
    });
  }
});


module.exports = app;
