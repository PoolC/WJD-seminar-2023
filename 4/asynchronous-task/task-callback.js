const doFirstTask = (doAfterTask) => {
  setTimeout(() => {
    console.log("첫 번째 작업");
    doAfterTask();
  }, 1000);
};

const doSecondTask = (doAfterTask) => {
  setTimeout(() => {
    console.log("두 번째 작업");
    doAfterTask();
  }, 1000);
};

const doThirdTask = (doAfterTask) => {
  setTimeout(() => {
    console.log("세 번째 작업");
    doAfterTask();
  }, 1000);
};

const doFourthTask = (doAfterTask) => {
  setTimeout(() => {
    console.log("네 번째 작업");
    doAfterTask();
  }, 1000);
};

const doFifthTask = (doAfterTask) => {
  setTimeout(() => {
    console.log("다섯 번째 작업");
    doAfterTask?.();
  }, 1000);
};

doFirstTask(() => {
  doSecondTask(() => {
    doThirdTask(() => {
      doFourthTask(() => {
        doFifthTask();
      });
    });
  });
});
