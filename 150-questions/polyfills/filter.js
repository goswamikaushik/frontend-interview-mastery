Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    const shouldInclude = callback(this[i], i, this);

    if (shouldInclude) {
      result.push(this[i]);
    }
  }

  return result;
};

const arr = [1, 2, 3, 4, 5];

console.log(arr.myFilter((n) => n < 2));
