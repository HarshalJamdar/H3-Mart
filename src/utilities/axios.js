const axios = require("axios");

//--MAKING AXIOS CALLS
let getPrices = async function (product_code) {
  try {
    let options = {
      method: "get",
      url: `https://api.storerestapi.com/products/${product_code}`,
    };
    let result = await axios(options);
    let price = await result.data.data.price;
    return price;
  } catch (err) {
    return res.status(500).send({ status: false, error: err.message });
  }
};

module.exports = { getPrices };
