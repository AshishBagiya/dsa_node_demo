function throttle(fn, limit) {
    let lastRun = 0;
  
    return function (...args) {
      const now = Date.now();
  
      if (now - lastRun >= limit) {
        lastRun = now;
        fn.apply(this, args);
      }
    };
  }
  
  // Example usage
  function onScroll() {
    console.log("Scroll event fired");
  }
  
  const throttledScroll = throttle(onScroll, 5000);
  
  // Simulate rapid calls
  setInterval(throttledScroll, 100);
  