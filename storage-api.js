function StorageAPI(storageName) {
  this.storageName = storageName;
}

StorageAPI.prototype.findAll = function () {
  return read.call(this);
};

StorageAPI.prototype.create = function (data) {
  let items = read.call(this);
  let id = items.length + 1;
  items.push({ ...data, id });
  return save.call(this, items);
};

StorageAPI.prototype.update = function (id, newdata) {
  let items = read.call(this);
  let existing = items.find((item) => item.id === id);
  Object.assign(existing, newdata);
  return save.call(this, items);
};

StorageAPI.prototype.delete = function (id) {
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

export default StorageAPI;
