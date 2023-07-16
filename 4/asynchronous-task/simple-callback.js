const doTaskAsynchronously = () => {
  setTimeout(() => {
    console.log("첫 번째 작업");

    setTimeout(() => {
      console.log("두 번째 작업");

      setTimeout(() => {
        console.log("세 번째 작업");
      }, 1000);
    }, 1000);
  }, 1000);
};

doTaskAsynchronously();
