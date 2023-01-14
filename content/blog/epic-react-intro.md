---
external: false
title: "Intro to the EpicReact.dev Course by Kent C. Dodds"
description: "You can author content using the familiar markdown syntax you already know. All basic markdown syntax is supported."
date: 2020-12-16
---

##### Hello folks, this first post is a short introduction to my series, reviewing and summarising the epicReact.dev Course by Kent C. Dodds.

---

In this series I want to review the most important principles that I have learned, repeat the materials another time for myself, write about it to deepen my understanding, explain it and give code examples.

### The course is divided into 8 Sub-Courses:

1. React Fundamentals - [Go to Workshop](https://dev.to/jannikwienecke/workshop-react-fundamentals-epicreact-dev-12p3)
2. React Hooks
3. Advanced React Hooks
4. Advanced React Patterns
5. React Perfomance
6. Testing React Apps
7. React Suspense (**Experimental**)
8. Build an Epic React App

Each of the chapters as the names describe focus on a specific concept and topic. For each Course I will write a review which will come within the next weeks.
I won't cover the last chapter though, since it mostly covers the same concepts as the previous chapters.

The course is built based on the eggHead.io learning style. Meaning, the instructor shortly gives you an overview about the task that you are expected to solve by yourself. Then you will find instructions about the task itself and background information with links to posts or third party libraries.
Within the file that you have to write the solution in, you'll find additional hints and tips to successfully solve this exercise:

```javascript
function Counter{
// Tip create useState with the name counter and setCounter
return {}
}
```

Maybe, inside the React Hooks Course you see the comment above, giving you the hint that you need React.useState, so you know you have to create this:

```javascript
import React from 'react'
function Counter{
// create useState with the name counter and setCounter
   const [counter, setCounter] = React.useState(0)
   return {}
}
```

Each of the Courses is divided into multiple topics which each contain several exercises. Each Exercise again has several Extra Credit Exercises. For those, you won't find any tips. This is intentional and should force the student to find the solution by himself.

---

### Who is this Course for?

Before I started this course I had done some courses on Udemy and FrontendMasters, watched several talks on Youtube and build several small Apps(non professional). While I found that I knew most of what was teached in the first 4 Courses, I still learned something in every course. Further I only knew the most of the content of the Advanced React Patterns because I watched Kent C. Dodds Workshop about it at FrontendMasters.
From the courses 5-7 I learned a lot. I had almost never used testing and profiling before, so this was a lot new and really helpful stuff. Further, the Suspense Concepts which are an experimental feature, were great. Giving you a glimpse into what will come in the future. The Last Course, building an App helped you to remember and deepen the understanding, since a lot of the material was repeated.

#### So who should takes the course:

- I think someone without any Javascript experience should first buy a Course in Udemy or some other plattform (or buy a book)
- Someone with Javascript but without any React Experience can take the course but I think it will be very challenging. Maybe a short introduction into react and some reading can be very helpful
- Someone with Javascript and React Experience should definitely take the Course. It will bring you to the next level. It will teach you most of what you need to know to work as a Frontend Developer.

#### Should experienced developer take the course?

In my opinion yes. First of all while writing our programs we often get comfortable with our way of writing code. We forget stuff doesn't keep up with new material and come across bad habits. Taking the course will give you a fresh perspective, remind you of basic principles and will definitively teach you some new concepts.

---

To sum it up, I enjoyed taking the course, I learned a lot and I will come back to the course material to recap and to use some of the great code snippets that the instructor will show you. In total, it took me about 3 weeks to finish the course!! Each day I spend about 4 hours on the material. So there is a lot of it :)

PS: The Materials are open source. So everyone can use it and work through by himself. Though I recommend, buying the course, since firstly you support the creator, and secondly having the videos, will clarify a lot if you get stuck and will give you more insides. Further, the Extra Credits won't have tips that help you solve the exercise. So, its very helpful to get the explanation for why something is done the way it is shown in the solution.

_Check out the reviews of the individual chapters that will come in the future. Those will be a lot more focused on the contents itself and will contain more code examples_
