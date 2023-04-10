---
external: false
title: "Expanding Your TypeScript Toolkit"
description: "Expanding Your TypeScript Toolkit: Mastering Generics Through Practical Examples"
date: 2023-04-10
tags: ["typescript"]
---

# Expanding Your TypeScript Toolkit: Mastering Generics Through Practical Examples

## Introduction:

TypeScript has taken the development world by storm with its optional static type checking, enhancing JavaScript by providing better code quality and maintainability. Among TypeScript's most potent features are generics, which allow developers to create more reusable and adaptable code by crafting functions and classes compatible with various types.

In a previous post, we delved into the basics of TypeScript generics. Building upon that foundation, this blog post will present a series of practical examples and real-world scenarios to further demonstrate the power and versatility of TypeScript generics. By the end, you'll have a solid understanding of how generics can help you write

## Default Generic Parameter

In this example, we create a function `createSet` that initializes a new Set with a generic type `T`. By specifying a default type parameter (`string` in this case), we allow the function to be called without explicitly defining the type.

```typescript
export const createSet = <T = string>() => {
  return new Set<T>();
};

const numberSet = createSet<number>();
const stringSet = createSet<string>();
const otherStringSet = createSet();
```

## Generics in Type Arguments:

In the `Component` class, we utilize a generic type `TProps` to represent the properties of the component. The `cloneComponent` function accepts a `Component` object and creates a new instance with the same properties, effectively cloning the component.

```typescript
export class Component<TProps> {
  private props: TProps;

  constructor(props: TProps) {
    this.props = props;
  }

  getProps = () => this.props;
}

const cloneComponent = <TProps>(component: Component<TProps>) => {
  return new Component(component.getProps());
};

const component = new Component({ a: 1, b: 2, c: 3 });
const clonedComponent = cloneComponent(component);
const result = clonedComponent.getProps();
```

## Generics in Array Reduce Method

Here, we use generics to create a strongly-typed version of the `reduce` method. This ensures that the resulting object has the correct structure and prevents any type errors during runtime.

```typescript
const array = [
  {
    name: "John",
  },
  {
    name: "Steve",
  },
];
const obj = array.reduce<Record<string, { name: string }>>((accum, item) => {
  accum[item.name] = item;
  return accum;
}, {});
```

## Fetching Data with Generics

The `fetchData` function demonstrates how to use generics in async functions. By specifying a generic type `TData`, we can ensure that the fetched data matches the expected structure.

```typescript
const fetchData = async <TData>(url: string) => {
  let data: TData = await fetch(url).then((response) => response.json());

  return data;
};

const data = await fetchData<{ name: string }>(
  "https://swapi.dev/api/people/1"
);
```

**Caution:** While the function is type-safe, remember that TypeScript's static type checking cannot guarantee complete runtime safety. It's essential to be cautious when working with external data and consider using runtime validation techniques to ensure data consistency.

To learn more about making your functions runtime safe, check out our article [How to Make a Function Runtime Safe with TypeScript and Zod](your-article-link), where we dive deeper into best practices for handling data validation and type safety at runtime.

## Typed Object Keys:

The `typedObjectKeys` function uses generics to return a strongly-typed array of object keys, providing better type safety and code completion during development.

```typescript
const typedObjectKeys = <TKey extends string>(obj: Record<TKey, any>) => {
  return Object.keys(obj) as Array<TKey>;
};

const result1 = typedObjectKeys({
  a: 1,
  b: 2,
});
```

## Creating Safe Generic Functions

The `makeSafe` function is a higher-order function that wraps any given function in a try-catch block. Using generics, it ensures that the returned result or error matches the expected type.

typescript

```typescript
const makeSafe =
  <TParams extends any[], TReturn>(func: (...params: TParams) => TReturn) =>
  (
    ...args: TParams
  ):
    | {
        type: "success";
        result: TReturn;
      }
    | {
        type: "failure";
        error: Error;
      } => {
    try {
      const result = func(...args);
      return {
        type: "success",
        result,
      };
    } catch (e) {
      return {
        type: "failure",
        error: e as Error,
      };
    }
  };

const func = makeSafe(() => 1);
```

# Conclusion:

TypeScript generics offer an effective way to create reusable and flexible components that can work with different data types. Through these real-world examples, we've demonstrated the power and versatility of generics in solving problems and improving code quality and maintainability. By understanding and applying generics, TypeScript developers can create more robust, reliable, and maintainable code in their projects.
