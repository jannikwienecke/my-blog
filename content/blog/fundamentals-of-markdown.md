---
external: false
title: "Extended markdown style guide"
description: "In addition to supporting all basic Markdoc syntax, this template also supports extended markdown syntax to render custom components."
date: 2022-11-01
---

## About Markdown

Markdown is a lightweight markup language used to format text and create webpages. It was created in 2004 by John Gruber and Aaron Swartz, and has since become one of the most popular markup languages on the internet. With markdown, you can create documents that are easy to read and write, while still being able to add basic formatting such as bold, italic, lists, and headings. It is also often used in blogging platforms and other web applications. Markdown can be used for everything from writing blog posts to creating complex documents. It has become popular because it is easy to learn and use, and is highly versatile. It can be used for plain text notes, and even for creating entire websites.

## Inline formatting

Bold: **This text is bold**.

Italics: _This text is italics_.

Strikethrough: You can ~~strikethrough~~ text.

Inline code: You can add inline code like this `const hello = "world"`.

## Headings

The following HTML `<h2>`—`<h6>` elements represent five levels of section headings. `<h1>` is also available but not recommended since the post title is already a `<h1>` element it is not a good practice to have more than one `<h1>` elements in a page.

## H2: Heading Two

### H3: Heading Three

#### H4: Heading Four

##### H5: Heading Five

###### H6: Heading Six

## Paragraph

A standalone single paragraph of text.

Paragraphs can be multiline too when they constitute words that make up more than one line, i.e they wrap to the next line. Wow! I am really smart to write two lines of text that makes zero sense.

## Blockquotes

> This is a blockquote. And it's pretty long too. Long enough to wrap to next line. Surely it will wrap.

> You can use Markdown syntax like **bold** within a blockquote.

## Tables

| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |

## List Types

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- List item
- Another item
- And another item

### Nested list

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

## Code Blocks

Syntax highlighting is done using [Prism.js](https://github.com/PrismJS/prism). You can customise to whichever theme you want from the [plenty available prism themes](https://github.com/PrismJS/prism-themes).

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

## Images

![Blogster](/images/blogster.png)

## YouTube Video

You can embed YouTube videos in your blog posts.

{% youtube url="https://www.youtube-nocookie.com/embed/StTqXEQ2l-Y" label="Everything is awesome - Lego movie song" /%}

## Tweet

You can embed tweets in your blog posts.

{% tweet url="https://twitter.com/flexdinesh/status/1605685194312122370" /%}

## CodePen

You can embed codepens in your blog posts.

{% codepen url="https://codepen.io/ruphaa/pen/eYJqjgq" title="Ecosystem - Pen in CSS by Ruphaa" /%}

## GitHub Gist

You can embed GitHub gists in your blog posts.

{% githubgist id="d96064c9c4ef2e8ef71c90a10ffcf3b2" /%}

## Lesser Known HTML Elements

### abbr

{% abbr title="Graphics Interchange Format" %}GIF{% /abbr %} is a bitmap image format.

### sub

H{% sub %}2{% /sub %}O

### sup

X{% sup %}n{% /sup %} + Y{% sup %}n{% /sup %} = Z{% sup %}n{% /sup %}

### kbd

Press {% kbd %}{% kbd %}CTRL{% /kbd %}+{% kbd %}ALT{% /kbd %}+{% kbd %}Delete{% /kbd %}{% /kbd %} to end the session.

### mark

Most {% mark %}salamanders{% /mark %} are nocturnal, and hunt for insects, worms, and other small creatures.
