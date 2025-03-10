function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
type Person = {
  name: string
}
type Location = {
  city: string
}

const merged = merge<Person, Location>({ name: 'Anna' }, { city: 'Kharkiv' });
console.log(merged);

