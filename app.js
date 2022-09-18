import StorageAPI from "./storage-api.js";

const storage = new StorageAPI("test-storage");

console.log(storage.findAll());

console.log(storage.create({ name: "Skate Shoes" }));
console.log(storage.create({ name: "Bearings" }));
console.log(storage.create({ name: "Griptape" }));

console.log(storage.update(1, { name: "Shoes" }));

console.log(storage.delete(3));
