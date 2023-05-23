const salesPersonController = require('./controllers/salesPersonController');
const productController = require('./controllers/productController');
const salesController = require('./controllers/saleController');
const customerController = require('./controllers/customerController');
const discountController = require('./controllers/discountController');

module.exports = (app) => {
    app.get('/', (req, res) => {res.send('Hello ERIK')})

    app.post('/salesPeople/new',salesPersonController.register);
    app.post('/salesPeople/checkPhone', salesPersonController.checkPhoneNumber);
    app.post('/salesPeople/get', salesPersonController.findById);
    app.get('/salesPeople/getAll', salesPersonController.getAllSalespeople);

    
    app.post('/products/new', productController.createProduct);
    app.put('/products/edit', productController.editProductById);
    app.post('/products/get', productController.getProductById);
    app.post('/products/name', productController.getProductByName);
    app.get('/products/getAll', productController.getAllProducts);

    app.post('/sales/new', salesController.createSale);
    app.post('/sales/get', salesController.getSaleById);
    app.get('/sales/getAll', salesController.getAllSales);

    app.post('/customers/new', customerController.register);
    app.post('/customers/checkPhone', customerController.checkPhone);
    app.post('/customers/get', customerController.getById);
    app.get('/customers/getAll', customerController.getAllCustomers);

    app.post('/discounts/new', discountController.create);
    app.get('/discounts/get', discountController.getById);

    app.post('/post', (req, res) => {
        res.send("Connection Complete! Msg: " + req.body.msg);
    })
}