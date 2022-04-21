const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('mongo connection open')
    })
    .catch(err => {
        console.log('mongo error sorry thats an error')
        console.log(err)
    })


// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit',
// })

// p.save().
//     then(p => {
//         console.log(p)
//     })
//     .catch(err => {
//         console.log(err)
//     })

const seedProducts = [
    {
        name: 'Eggplant',
        price: 1.00,
        category: 'vegetable',
    },
    {
        name: 'Tomato',
        price: 2.50,
        category: 'vegetable',
    },
    {
        name: 'Milk',
        price: 20,
        category: 'dairy'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })