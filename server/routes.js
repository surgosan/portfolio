const salesPersonController = require('./controllers/salesPersonController');
const productController = require('./controllers/productController');

module.exports = (app) => {
    app.post('/salesPeople/new',salesPersonController.register);
    app.post('/salesPeople/checkPhone', salesPersonController.checkPhoneNumber);
    app.post('/salesPeople/get', salesPersonController.findById);
    app.get('/salesPeople/getAll', salesPersonController.getAllSalespeople);
    app.put('/products/edit', productController.editProductById);
}