const xlsx = require("xlsx");
const { getPrices } = require("../utilities/axios");
const { getJson } = require("../utilities/excel");

//--UPLOADING FILE
const upload = async function (req, res) {
  try {
    let file = req.files;
    
    //--getting the sheet required
    const getFile = getJson(file[0]);

    //--making axios calls to get price
    for (let i = 0; i < getFile.length; i++) {
      let price = await getPrices(getFile[i].product_code);
      getFile[i]["price"] = price;
    }

    //--adding price to the file
    let newWB = xlsx.utils.book_new();
    let newWS = xlsx.utils.json_to_sheet(getFile);
    xlsx.utils.book_append_sheet(newWB, newWS, "newFile");
    await xlsx.writeFile(newWB, "product_list.xlsx");

    //--sending file in response
    return res.download("product_list.xlsx");
  }
   catch (err) {
    return res.status(500).send({ status: false, error: err.message });
  }
};

module.exports = { upload };
