function debounce(fn, delay) {
    let timer;
  
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }
  
  // Example usage
  function search(query) {
    console.log("Searching for:", query);
  }
  
  const debouncedSearch = debounce(search, 500);
  
  // Simulate typing
  debouncedSearch("H");
  debouncedSearch("He");
  debouncedSearch("Hel");
  debouncedSearch("Hello"); // Only this runs after 500ms
  