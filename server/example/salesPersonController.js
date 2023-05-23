const { Salesperson } = require('../models')

module.exports = {
    async register (req, res) {
        try {
            console.log(req.body);
            const person = await Salesperson.create(req.body);
            res.send("Very cool " + person.first_name)
        } catch (err) {
            res.status(400).send({
                error: "Something went wrong " + err
            })
        }
    },

    async checkPhoneNumber(req, res) {
        try {
            const { phone } = req.body;
            const existingPerson = await Salesperson.findOne({ where: { phone } });

            if (existingPerson) {
                res.send("exists");
            } else {
                res.send("doesNotExist");
            }
        } catch (err) {
            res.status(400).send({
                error: 'Something went wrong ' + err,
            });
        }
    },

    async findById(req, res) {
        try {
          const id = req.body.id
          console.log(id)
          const salesperson = await Salesperson.findOne({ where: { id } })
    
          if(salesperson) {
            res.send(salesperson)
          }
          else{
            res.send("Salesperson not found")
          }
    
          
        } catch (err) {
          return res.status(400).send({
            error: 'An error occurred while fetching the salesperson: ' + err.message
          })
        }
    },

    async getAllSalespeople(req, res) {
        try {
          const salespeople = await Salesperson.findAll();
          res.send(salespeople);
        } catch (err) {
          res.status(400).send({
            error: 'An error occurred while fetching salespeople: ' + err.message
          });
        }
      },
}