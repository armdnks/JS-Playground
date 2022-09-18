import LocalStorageAPI from "./local-storage-api.js";
// Instantiate LocalStorageAPI
const storage = new LocalStorageAPI("dummy-storage");
// Get storage data
console.log(storage.findAll());
// Create new data
// console.log(storage.create({ name: "Skate Shoes" }));
// console.log(storage.create({ name: "Bearings" }));
// console.log(storage.create({ name: "Griptape" }));
// Update data
// console.log(storage.update(1, { name: "Shoes" }));
// Delete data
// console.log(storage.delete(4));
