const doFirstTask = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("첫 번째 작업");
      resolve();
    }, 1000);
  });
};

const doSecondTask = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("두 번째 작업");
      resolve();
    }, 1000);
  });
};

const doThirdTask = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("세 번째 작업");
      resolve();
    }, 1000);
  });
};

const doFourthTask = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("네 번째 작업");
      resolve();
    }, 1000);
  });
};

const doFifthTask = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("다섯 번째 작업");
      resolve();
    }, 1000);
  });
};

doFirstTask()
  .then(() => doSecondTask())
  .then(() => doThirdTask())
  .then(() => doFourthTask())
  .then(() => doFifthTask());
