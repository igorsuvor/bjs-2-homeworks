// Задача № 1

function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let idx = cache.findIndex((item) => item.hash === hash);
    
    if (idx !== -1 ) {
      console.log("Из кэша: " + cache[idx].value); 
      return "Из кэша: " + cache[idx].value;
    } 

    let result = func(...args); 
    cache.push({hash:hash, value:result});
    
    if (cache.length > 5) { 
      cache.shift();
    }
    
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
    
  }

  return wrapper;
}

// Задача № 2

function debounceDecoratorNew(func, ms) {

  let timeout;
  let isThrottled = false;

  function wrapper(...rest) {
    if (!isThrottled) {
      func.apply(this, ...rest);
      isThrottled = true;
      return;
    }
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      isThrottled = false
      func.apply(this, ...rest)
    }, ms)
  }
  return wrapper;
}

// Задача № 3

function debounceDecorator2(func) {
  let count = 0;
  function wrapper(...rest) {
    wrapper.history = count++;
    return func.call(this, ...rest);
  }
  return wrapper;
}
