function normalFunction() {
  return "normal";
}

const arrowFunction = () => "arrow";

const functionWithParams = (param1, param2, param3 = "default") => {
  return param1 + param2;
};

normalFunction();
arrowFunction();
functionWithParams("a");
functionWithParams("a", "b");
functionWithParams("a", "b", "c");
functionWithParams("a", "b", "c", "d");

function introduce(name, age, log) {
  log(`Hello, my name is ${name} and I'm ${age} years old`);
}

introduce("John", 20, console.log);
