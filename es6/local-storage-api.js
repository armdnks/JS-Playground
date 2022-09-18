/**
 *  ### LocalStorageAPI Library
 *  CRUD functionality to local storage
 *
 *  @version  1.0.1
 *  @author   Armadan KS
 *
 *  @example
 *  import LocalStorageAPI from "./storage-api.js";
 *  // Instantiate LocalStorageAPI
 *  const storage = new LocalStorageAPI("dummy-storage");
 *  // Get storage data
 *  console.log(storage.findAll());
 *  // Create new data
 *  console.log(storage.create({ name: "Skate Shoes" }));
 *  console.log(storage.create({ name: "Bearings" }));
 *  console.log(storage.create({ name: "Griptape" }));
 *  // Update data
 *  console.log(storage.update(1, { name: "Shoes" }));
 *  // Delete data
 *  console.log(storage.delete(3));
 *
 *
 *  @param {String} storageName
 *
 */

function LocalStorageAPI(storageName) {
  this.storageName = storageName;
}

/**
 *  ### _.findAll() Method
 *
 *  @returns Get all items in local storage
 *
 */
LocalStorageAPI.prototype.findAll = function () {
  return read.call(this);
};

/**
 *  ### _.create() Method
 *
 * @param {Object} data new object value
 * @returns Insert new data to local storage
 *
 */
LocalStorageAPI.prototype.create = function (data) {
  let items = read.call(this);
  let id = Math.max(...items.map((item) => item.id)) + 1;
  items.push({ ...data, id });
  return save.call(this, items);
};

/**
 *  ### _.update() Method
 *
 *  @param {Number} id item id
 *  @param {Object} newdata new object value
 *  @returns Update data by ID into a new value
 *
 */
LocalStorageAPI.prototype.update = function (id, newdata) {
  let items = read.call(this);
  let existing = items.find((item) => item.id === id);
  Object.assign(existing, newdata);
  return save.call(this, items);
};

/**
 *  ### _.delete() Method
 *
 * @param {Number} id item id
 * @returns Remove data by ID in local storage
 *
 */
LocalStorageAPI.prototype.delete = function (id) {
  let items = read.call(this);
  items = items.filter((item) => item.id !== id);
  return save.call(this, items);
};

function read() {
  return JSON.parse(localStorage.getItem(this.storageName) || "[]");
}

function save(data) {
  return localStorage.setItem(this.storageName, JSON.stringify(data));
}

export default LocalStorageAPI;
