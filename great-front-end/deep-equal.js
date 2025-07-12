export default function deepEqual(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return a === b;
  }

  if (typeof a !== "object" || typeof b !== "object") {
    return a === b;
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    return a.reduce((result, item, index) => {
      if (result) {
        result = deepEqual(item, b[index]);
      }
      return result;
    }, true);
  }

  return Object.keys(a).reduce((result, key) => {
    if (result) {
      result = deepEqual(a[key], b[key]);
    }
    return result;
  }, true);
}
