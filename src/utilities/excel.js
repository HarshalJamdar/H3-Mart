const xlsx = require("xlsx");

//--CONVERTING SHEET TO JSON
const getJson = function (data) {
  const file = xlsx.read(data.buffer);
  let arr = [];

  const sheets = file.SheetNames;
  for (let i = 0; i < sheets.length; i++) {
    const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    temp.forEach((i) => arr.push(i));
  }
  return arr;
};

module.exports = { getJson };
