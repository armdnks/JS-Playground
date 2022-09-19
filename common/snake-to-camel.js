var person = {
  first_name: "John",
  last_name: "Doe",
  email: "john@email.com",
};

function snakeToCamel(data) {
  let output = {};
  Object.keys(data).forEach((key) => {
    const value = data[key];
    const newkey = key.toLowerCase().replace(/[_-][a-z]/g, (c) => {
      return c.toUpperCase().replace("-", "").replace("_", "");
    });
    output[newkey] = value;
  });
  return output;
}

snakeToCamel(person);
console.log(snakeToCamel(person));
