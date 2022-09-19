var person = {
  first_name: "John",
  last_name: "Doe",
  email: "john@email.com",
};

function snakeToCamel(data) {
  let output = {};
  Object.keys(data).forEach((key) => {
    const newkey = key.toLowerCase().replace(/[_-][a-z]/g, (c) => {
      return c.toUpperCase().replace("-", "").replace("_", "");
    });
    output[newkey] = data[key];
  });
  return output;
}

snakeToCamel(person);
console.log(snakeToCamel(person));
