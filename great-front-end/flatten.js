export default function flatten(value) {
  if (!Array.isArray(value)) {
    return value;
  }

  const result = [];

  for (const item of value) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}
