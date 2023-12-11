export function jsonCopy<T>(data: T): T {
  const objectJsonCopy = JSON.stringify(data);
  const objectCopy = JSON.parse(objectJsonCopy) as T;
  return objectCopy;
}
