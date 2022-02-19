// 1. keyof
type ObjectLiteralType = {
  first: 1;
  second: 2;
};
// inferred type: first | second
type R = keyof ObjectLiteralType;

// 2. Getting the type of a single key in an object
type Obj = {
  0: 'a';
  1: 'b';
  lorem: 'ipsum';
};
type R2 = Obj[0];
type R3 = Obj[0 | 'lorem'];

// 3. What about getting the values?
type Obj2 = {
  0: 'a';
  1: 'b';
  lorem: 'ipsum';
};
type R4 = Obj2[keyof Obj2];

// 4. unions
type A = 'a' | 'b' | 'c';
type B = 'b' | 'c' | 'd';
type R5 = A | B;

// 5. unions with objects
type ObjectTypeA = {
  name: string;
  age: number;
};
type ObjectTypeB = {
  name: string;
  hobby: string;
};
// inferred type: {name | age | hobby}
type R6 = ObjectTypeA | ObjectTypeB;

// 6. intersections
type A1 = 'a' | 'b' | 'c';
type A2 = 'b' | 'c' | 'd';
type R7 = A1 & A2;

// 7. conditionals
type IsAssignableTo<A, B> = A extends B ? true : false;
type R8 = IsAssignableTo<123, number>;
type R9 = IsAssignableTo<number, 123>;

// 8. Exclude
type R10 = Exclude<'a' | 'b' | 'c', 'b'>;
type R11 = Exclude<'a' | 'b' | true | 22, string | boolean>;

// 9. Extract (opposite of Exclude)
type R12 = Extract<'a' | 'b' | 'c', 'b'>;

// 10. Objects
type ObjWithAKey = {
  name: string;
};
type ObjWithStringKeys = {
  [name: string]: number;
};
type ObjWithStringKeys2 = Record<string, number>;
// iteration
type R13 = {
  [K in 'a' | 'b' | 'c']: number;
};
type R14 = {
  [K in keyof ObjectLiteralType]: boolean;
};

// 11.Pick
type ObjectLiteralType2 = {
  john: 1;
  kane: 2;
  bill: 3;
};
type R15 = Pick<ObjectLiteralType2, 'john' | 'kane'>;

// 12.Omit (opposite of Pick)
type ObjectLiteralType3 = {
  john: 1;
  kane: 2;
  bill: 3;
};
type R16 = Omit<ObjectLiteralType2, 'john' | 'kane'>;

// 13. String manipulation
type UppercaseWes = Uppercase<'Wes'>;
type LowercaseWes = Lowercase<'Wes'>;
type CapitalizeWes = Capitalize<'Wes'>;
type UncapitalizeWes = Uncapitalize<'Wes'>;
