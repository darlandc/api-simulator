const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const api = express();
const port = 3000;
const router = express.Router();

api.use(cors());

const userData = {}

api.use(bodyparser.urlencoded({extended: true}));
api.use(bodyparser.json({limit: '20mb', extended: true}));
api.use(bodyparser.json({userData, extended: true}));

router.get("/", (req, resp)=> resp.json({
    welcome: "API Online!",
}));

api.use("/", router);
api.listen(port);
console.log('Running API!');