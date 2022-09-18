const fs = require("fs");
const path = require("path");
const { randomID } = require("./generate-id");

/**
 *  ### LocalDB Library
 *  CRUD functionality to local database using fs module
 *
 *  @version  1.0.0
 *  @author   Armadan KS
 *
 */

function LocalDB() {
  this.dirPath = path.join(__dirname, "data");
  this.filePath = path.join(__dirname, "data/db.json");

  this.createDatabase();

  this.getData = fs.readFileSync(this.filePath, "utf8");
}

/**
 *  ### createDatabase() Method
 *
 *  @extension .json
 *  @returns Create new local database
 *
 */
LocalDB.prototype.createDatabase = function () {
  if (!fs.existsSync(this.dirPath)) {
    fs.mkdirSync(this.dirPath);
  }

  if (!fs.existsSync(this.filePath)) {
    fs.writeFileSync(this.filePath, "[]", "utf-8");
  }
};

/**
 *  ### findAll() Method
 *
 *  @syntax db.findAll()
 *  @returns Get all items in database
 *
 *  @example
 *  db.findAll();
 *  // result
 *  [
 *    { product: 'shoes', price: 19.99, id: 'b2efb325804a51831a162027' },
 *    { product: 'snack', price: 9.99, id: 'f81c06e6d62a061fc16fe0d7' },
 *    { product: 'beverages', price: 4.99, id: 'a13b03a83bad5e6bc5859d3a' }
 *  ]
 *
 */
LocalDB.prototype.findAll = function () {
  return JSON.parse(this.getData);
};

/**
 *  ### findById() Method
 *
 *  @syntax db.findById(id)
 *  @param {String} id
 *  @returns Get single data by ID
 *
 *  @example
 *  db.findById("b2efb325804a51831a162027");
 *  // result
 *  {
 *    product: 'shoes',
 *    price: 19.99,
 *    id: 'b2efb325804a51831a162027'
 *  },
 *
 *
 */
LocalDB.prototype.findById = function (id) {
  let data = JSON.parse(this.getData);

  return data.find((item) => item.id === id);
};

/**
 *  ### create() Method
 *
 *  @syntax db.create({ object })
 *  @param {Object} value
 *  @returns Insert new data to database
 *
 *  @example
 *  db.create({ product: "beverages", price: 4.99 });
 *  // result
 *  {
 *    product: 'beverages',
 *    price: 4.99,
 *    id: 'a13b03a83bad5e6bc5859d3a'
 *  },
 *
 */
LocalDB.prototype.create = function (value) {
  let data = JSON.parse(this.getData);
  let id = randomID();

  let newData = { ...value, id };
  data.push(newData);

  fs.writeFileSync(this.filePath, JSON.stringify(data), "utf8");
  return newData;
};

/**
 *  ### update() Method
 *
 *  @syntax db.update(id, { object })
 *  @param {String} id
 *  @param {Object} newValue
 *  @returns Update data in database
 *
 *  @example
 *  db.update("a13b03a83bad5e6bc5859d3a", { price: 6.99 });
 *  // result
 *  {
 *    product: 'beverages',
 *    price: 6.99,
 *    id: 'a13b03a83bad5e6bc5859d3a'
 *  },
 *
 */
LocalDB.prototype.update = function (id, newValue) {
  let data = JSON.parse(this.getData);
  let existing = data.find((item) => item.id === id);

  let newdata = Object.assign(existing, newValue);

  fs.writeFileSync(this.filePath, JSON.stringify(data), "utf8");
  return newdata;
};

/**
 *  ### delete() Method
 *
 *  @syntax db.delete(id)
 *  @param {String} id
 *  @returns Delete data in database
 *
 *  @example
 *  db.delete("a13b03a83bad5e6bc5859d3a");
 *  // result
 *  {}
 *
 */
LocalDB.prototype.delete = function (id) {
  let data = JSON.parse(this.getData);
  data = data.filter((item) => item.id !== id);

  fs.writeFileSync(this.filePath, JSON.stringify(data), "utf8");
  return {};
};

module.exports = LocalDB;
