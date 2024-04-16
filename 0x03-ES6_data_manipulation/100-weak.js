export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    let endpointData = weakMap.get(endpoint);
    if (endpointData >= 5) {
      throw new Error('Endpoint load is high');
    }
    endpointData = endpointData ? endpointData + 1 : 1;
    weakMap.set(endpoint, (endpointData));
  } else {
    weakMap.set(endpoint, 1);
  }
}
