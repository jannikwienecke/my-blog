---
external: false
title: "The Power of Generics in TypeScript: A Beginner's Guide"
description: "The Power of Generics in TypeScript: A Beginner's Guide"
date: 2023-04-09
tags: ["typescript"]
---

## The Power of Generics in TypeScript: A Beginner's Guide

# Introduction:

TypeScript has taken the development world by storm with its optional static type checking, enhancing JavaScript by providing better code quality and maintainability. Among TypeScript's most potent features are generics, which allow developers to create more reusable and adaptable code by crafting functions and classes compatible with various types.

In a previous post, we delved into the basics of TypeScript generics. Building upon that foundation, this blog post will present a series of practical examples and real-world scenarios to further demonstrate the power and versatility of TypeScript generics. By the end, you'll have a solid understanding of how generics can help you write

## Returning What is Passed In

Let's start with a simple example of a function that takes in a generic type `T` and returns it. This means that the function can be used with any type, and will return the same type that was passed in.

```typescript
const returnWhatIPassIn = <T>(t: T): T => {
  return t;
};
```

We can test this function with both a number and a string:

```typescript
const one = returnWhatIPassIn(1); // returns 1
const matt = returnWhatIPassIn("matt"); // returns "matt"
```

The function simply returns the value that is passed in, no matter what type it is.

### Using "extends"

The "extends" keyword can be used to constrain the types that a generic function can accept. For example, we can write a function that only accepts string inputs:

```typescript
const returnWhatIPassInStrings = <T extends string>(t: T): T => t;
```

This function takes in a generic type `T` that extends `string`, and returns `t`. We can test this function with a string:

```typescript
const a = returnWhatIPassInStrings("a"); // returns "a"
```

However, if we try to pass in a number, we'll get a TypeScript error:

```typescript
// @ts-expect-error
returnWhatIPassInStrings(1); // error: Argument of type '1' is not assignable to parameter of type 'string'.
```

This is because the function only accepts strings, and we're trying to pass in a number.

### Multiple Generic Parameters

We can also use multiple generic parameters in TypeScript functions. For example, we can write a function that takes in two generic parameters `T` and `L`, and returns an object with both values:

```typescript
const returnBothOfWhatIPassIn = <T, L>(a: T, b: L) => {
  return {
    a,
    b,
  };
};
```

We can test this function with a number and a string:

```typescript
returnBothOfWhatIPassIn(1, "test"); // returns { a: 1, b: "test" }
```

The function returns an object with `a` and `b` properties, with their corresponding values.

### Generics in Classes

Generics can also be used in TypeScript classes to create more reusable code. For example, we can write a class that takes a generic parameter `T` and has a method to return the value of that parameter:

```typescript
export class Component<T> {
  private props: T;

  constructor(props: T) {
    this.props = props;
  }

  getProps = () => this.props;
}
```

We can create an instance of this class with an object as the generic parameter:

```typescript
const component = new Component({ a: 1, b: 2, c: 3 });
```

And we can call the `getProps()` method to get the value of the generic parameter:

```typescript
component.getProps(); // returns { a: 1, b: 2, c: 3 }
```

This class is reusable because it can work with any type that is passed in as the generic parameter.

### Real-World Example: Generic Mapper Function

Let's look at a real-world example of how generics can be useful. Suppose we have a `User` type with `firstName` and `lastName` properties, and we want to add a `fullName` property that concatenates the first and last names.

We can write a generic mapper function that accepts a `User` object and returns a new object with the `fullName` property added:

```typescript
type User = {
  firstName: string;
  lastName: string;
};

export const concatenateFirstNameAndLastName = <T extends User>(user: T) => {
  return {
    ...user,
    fullName: `${user.firstName} ${user.lastName}`,
  };
};
```

We can test this function with a `User` object:

```typescript
const user = { firstName: "John", lastName: "Doe" };
const userWithFullName = concatenateFirstNameAndLastName(user);

console.log(userWithFullName); // logs { firstName: "John", lastName: "Doe", fullName: "John Doe" }
```

The function adds the `fullName` property to the `User` object and returns it.

### Conclusion

In this post, we've explored some basic examples of how generics work in TypeScript. We've seen how generics allow for code to be more reusable and flexible, and how they can be used in functions, classes, and real-world scenarios like a generic mapper function.

If you're new to TypeScript, we hope this post has helped you understand the power of generics and how they can be used to write more efficient and reusable code. And if you're already familiar with TypeScript, we hope this post has provided a helpful refresher on the basics of generics.

Remember, there's a lot more to learn about TypeScript and its powerful features, including more advanced uses of generics. So keep exploring, and happy coding!

"In this post, we've explored some basic examples of how generics work in TypeScript. These examples were inspired by Matt Pocock's Total TypeScript course, which provides a comprehensive guide to TypeScript from beginner to advanced topics. If you're interested in learning more about TypeScript, we highly recommend checking out Matt's course at https://www.totaltypescript.com/. With TypeScript's powerful features like generics, you can write more efficient and reusable code than ever before. Happy coding!"
