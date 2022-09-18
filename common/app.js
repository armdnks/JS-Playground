const LocalDB = require("./local-db");

const db = new LocalDB();
console.log(db.findAll());
console.log(db.findById("a13b03a83bad5e6bc5859d3a"));
console.log(db.create({ product: "beverages", price: 4.99 }));
console.log(db.update("b2efb325804a51831a162027", { price: 19.99 }));
console.log(db.delete("6aecb73970af324743ce19b4"));
