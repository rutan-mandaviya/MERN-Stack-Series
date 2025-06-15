const throttledFn = throttle(() => console.log("Throttled Execution"), 5000);
throttledFn();
