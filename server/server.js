const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors({
    origin: '*',
}));


// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();
// })

app.get("/", (req, res) => {
    res.json({
        message: 'App is Running'
    })
})

// app.post("/login",(req,res)=>{
//     console.log(req.body);
//     res.json({
//         username:req.body.username,
//         password:req.body.password
//     })
// });


app.use("/api",require("./controller/LoginController"))


app.use("/api/products",require("./controller/ProductController"));

app.listen(8080, () => {
    console.log('Server is Running on port 8080');
})