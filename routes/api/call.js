const axios = require('axios');
const router = require("express").Router();

const BASEURL ="https://maps.googleapis.com/maps/api/place/textsearch/json?query=point+of+interest+in+"
const key="&key=AIzaSyCrt6AwoIdJpK1fTr4Qq6SObHysC6RFwS8";

router.route("/:query").get((req, res) => {
    axios.get(BASEURL + req.params.query + key)
    .then(response => res.json(response.data));
});

module.exports = router;