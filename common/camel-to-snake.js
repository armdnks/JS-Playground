var person = {
  firstName: "John",
  lastName: "Doe",
  email: "john@email.com",
};

function camelToSnake(data) {
  let output = {};
  Object.keys(data).forEach((key) => {
    const value = data[key];
    const newkey = key.replace(/([A-Z])/g, "_$1").toLowerCase();
    output[newkey] = value;
  });
  return output;
}

camelToSnake(person);
console.log(camelToSnake(person));
