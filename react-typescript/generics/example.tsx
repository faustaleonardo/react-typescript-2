type Link<T> = {
  value: T;
  nextLink?: Link<T>;
};

const link: Link<number> = {
  value: 2,
  nextLink: {
    value: 4
  }
};

function print<T>(something: T) {
  return something;
}

print('hello');
print<number>(2);

function tap<T>(arg: T, fn: (fnArg: T) => void): T {
  fn(arg);
  return arg;
}

const printTwo = <T,>(arg: T): T => {
  return arg;
};

printTwo<string>('hello');
