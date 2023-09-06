// Welcome to a journey into TypeScript generics and classes!

// In TypeScript, we can create generic functions and classes
// that provide flexibility and type safety. Let's explore
// some practical examples step by step.

// Define a generic function that echoes its input value.
function echo<T>(arg: T): T {
    return arg;
  }
  
  // Usage examples of the generic function.
  const strResult = echo("Hello, TypeScript!"); // Inferred type: string
  const numResult = echo(42); // Inferred type: number
  
  // Here, we've defined a function 'echo' that can work with
  // any data type and returns the input as is. TypeScript
  // infers the return type based on the input.
  
  // Now, let's move on to the next example.
  
  // Define a generic function to check if an object is an object (excluding arrays).
  function isObject<T>(arg: T): boolean {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
  }
  
  // Usage examples of the isObject function.
  const objCheck = isObject({ name: "John" }); // true
  const arrCheck = isObject([1, 2, 3]); // false
  
  // In this case, we've created a function 'isObject' that
  // checks if a given value is an object but not an array.
  // It returns a boolean value indicating whether the input
  // is an object.
  
  // Let's explore more advanced usage.
  
  // Define a generic function that checks if an object has an "ID" property.
  function hasId<T extends { ID: any }>(obj: T): boolean {
    return "ID" in obj;
  }
  
  // Usage examples of the hasId function.
  const userWithId = { ID: 1, name: "Alice" };
  const userWithoutId = { name: "Bob" };
  
  const hasIdCheck1 = hasId(userWithId); // true
  const hasIdCheck2 = hasId(userWithoutId); // Error - Type '{ name: string; }' is not assignable to type '{ ID: any; }'.
  
  // Here, 'hasId' is a function that uses a type constraint
  // to ensure that the input object must have an 'ID' property.
  // This adds a layer of type safety during development.
  
  // Let's explore more functionality.
  
  // Define a generic function that retrieves specified properties from an array of objects.
  function getPropertyFromObjects<T, K extends keyof T>(arr: T[], key: K): T[K][] {
    return arr.map((obj) => obj[key]);
  }
  
  // Usage example of the getPropertyFromObjects function.
  const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ];
  
  const names = getPropertyFromObjects(users, "name"); // Inferred type: string[]
  
  // 'getPropertyFromObjects' extracts specified properties from
  // an array of objects. It uses TypeScript's keyof to ensure
  // type safety when accessing object properties.
  
  // Now, let's delve into generic classes.
  
  // Define a generic class representing a state object with a getter and setter.
  class StateObject<T> {
    private data: T;
  
    constructor(initialValue: T) {
      this.data = initialValue;
    }
  
    get state(): T {
      return this.data;
    }
  
    set state(value: T) {
      this.data = value;
    }
  }
  
  // Usage examples of the StateObject class.
  const stringState = new StateObject("Hello");
  const numberState = new StateObject(42);
  
  stringState.state = "World"; // Valid assignment
  numberState.state = 100; // Valid assignment
  // stringState.state = 42; // Error - Type '42' is not assignable to type 'string'.
  
  // We've created a generic class 'StateObject' that allows
  // you to create state containers for different types.
  // It ensures type safety when accessing and modifying state.
  
  // That concludes our journey through TypeScript generics
  // and classes. You've seen how they enhance flexibility and
  // type safety in your code. Feel free to explore further!
  