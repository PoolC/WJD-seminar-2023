const getData = () => {
  setTimeout(() => {
    return "옛다 데이터!";
  }, 1000);
};

const data = getData();
console.log(data);
