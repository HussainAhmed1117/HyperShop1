const productRouter = require("express").Router();

let arr = [
    {
        id: 1,
        name: 'Macbook Pro',
        price: '100',
        quantity: 8,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61OvV27-44L.__AC_SY300_SX300_QL70_FMwebp_.jpg'
    },
    {
        id: 2,
        name: 'Macbook Pro',
        price: '100',
        quantity: 5,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61OvV27-44L.__AC_SY300_SX300_QL70_FMwebp_.jpg'
    },
    {
        id: 3,
        name: 'Macbok Pro',
        price: '100',
        quantity: 4,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61OvV27-44L.__AC_SY300_SX300_QL70_FMwebp_.jpg'
    },
]

productRouter.get("/", (req, res) => {
    res.json(arr)
})

module.exports = productRouter;