function cleanSet(set, startString) {
  const result = [];
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(startString)) {
      result.push(element.substring(startString.length));
    }
  });
  return result.join('-');
}
export default cleanSet;
