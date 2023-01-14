---
external: false
title: "UseEffect vs useLayout in typescript"
description: "Code blocks are syntax highlighted using Prism.js"
date: 2022-10-30
tags: ["react", "typescript"]
---

![A starry night sky.](/images/sky.avif)

Whether you're just getting started with React or you're a seasoned pro, you've
likely encountered the `useEffect` and `useLayout` hooks. These hooks are essential for managing state and side effects in your React components, but it's important to understand the differences between them.

In this blog, we'll look at the differences between `useEffect` and `useLayout` in Typescript and provide some examples of each.

## What is useEffect?

`useEffect` is a React hook that allows you to run side effects in your components. This can include tasks such as setting up subscriptions, triggering network requests, or manipulating the DOM. It's important to note that `useEffect` is run after every render, so it's best to use it for tasks that don't rely on data from previous renders.

## What is useLayout?

`useLayout` is a React hook that allows you to run layout effects in your components. This can include tasks such as measuring the size of an element, calculating positions, or computing styles. Unlike `useEffect`, `useLayout` is only run after the initial render, so it's best to use it for tasks that rely on data from previous renders.

## Examples

To better understand the differences between `useEffect` and `useLayout`, let's take a look at some examples.

### useEffect Example

This example shows how to use `useEffect` to set up a subscription to a data source:

```typescript
const [data, setData] = useState<Data[]>([]);

useEffect(() => {
  const subscription = dataSource.subscribe((data) => {
    setData(data);
  });

  return () => {
    subscription.unsubscribe();
  };
});
```

### useLayout Example

This example shows how to use `useLayout` to measure the size of an element:

```typescript
const [dimensions, setDimensions] = useState<{ width: number; height: number }>(
  { width: 0, height: 0 }
);

useLayout(() => {
  const element = document.getElementById("element");
  const rect = element.getBoundingClientRect();
});
```
