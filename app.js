const express = require('express');
const fileUpload = require('express-fileupload');
const userRouter = require('./Routers/UserRouter');
const customerRouter = require('./Routers/CustomerRouter');
const storeOwnerRouter = require('./Routers/StoreOwnerRouter');
const categoryRouter = require('./Routers/CategotyRouter');

const productRouter = require('./Routers/ProductRouter');

//
const orderRouter = require('./Routers/OrderRouter'); // Import the order router

const app = express();
app.use(express.json());

app.use(fileUpload({
    createParentPath: true
  }));
app.use('/api/v1/products', productRouter );
app.use('/api/v1/users', userRouter );
app.use('/api/v1/customers', customerRouter );
app.use('/api/v1/stores',  storeOwnerRouter);
app.use('/api/v1/categories',  categoryRouter);
//order
//app.use('/api/v1/orders', orderRouter); // Add the order router

app.use('/api/v1/orders', orderRouter);







module.exports = app;