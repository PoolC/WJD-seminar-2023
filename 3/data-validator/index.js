const isDataValid1 = (data) => {
  if (!data) {
    return false;
  } else if (!data.name || !data.age) {
    return false;
  } else {
    return true;
  }
};

const isDataValid2 = (data) => {
  if (data && data.name && data.age) {
    return true;
  } else {
    return false;
  }
};

const isDataValid3 = (data) => {
  return !!(data && data.name && data.age);
};

const validateDate1 = (data) => {
  if (isDataValid3(data)) {
    console.log(`Data is valid, name: ${data.name}, age: ${data.age}`);
  } else {
    console.log("Data is invalid");
  }
};

const validateDate2 = (data) => {
  console.log(
    isDataValid3(data)
      ? `Data is valid, name: ${data.name}, age: ${data.age}`
      : "Data is invalid"
  );
};
