const age: number = 50;
const username: string = 'Max';
const toggle: boolean = true;
const empty: null = null;
const callback = (a: number): number => {
  return 100 + a;
};


console.log('age:', age, 'username:', username, 'toggle:', toggle, 'empty:', empty, 'callback:', callback(10));

export {}