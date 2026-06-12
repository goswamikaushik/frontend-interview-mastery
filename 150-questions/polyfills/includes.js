Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
  let startIndex = fromIndex;

  if (startIndex < 0) {
    startIndex = Math.max(startIndex + this.length, 0);
  }

  for (let i = startIndex; i < this.length; i++) {
    const curr = this[i];

    if (
      searchElement === curr ||
      (Number.isNaN(searchElement) && Number.isNaN(curr))
    ) {
      return true;
    }
  }
  return false;
};

const arr = [1, 2, 3, 4, 5];

console.log(arr.myIncludes("s"));
