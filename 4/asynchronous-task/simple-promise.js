const doTaskAsynchronously = () => {
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("첫 번째 작업");
      resolve();
    }, 1000);
  })
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("두 번째 작업");
          resolve();
        }, 1000);
      });
    })
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("세 번째 작업");
          resolve();
        }, 1000);
      });
    });
};

doTaskAsynchronously();
