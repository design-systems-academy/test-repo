---
title: OUr website
---

Here you find information about how we build this website.

This website is built with [GatsbyJS](https://www.gatsbyjs.org/).

You can find a source code in this repository: https://github.devcloud.elisa.fi/styleguide/design.elisa.fi

## How to contribute

If you want to provide changes into this website, fix or add texts, you can do it changing the code in the repo.

### Prerequisites

If you do not have Gatsby Cli installed yet, do it first.

```text
npm install --global gatsby-cli
```

More information on [GatsbyJS.org](https://www.gatsbyjs.org/tutorial/part-one)

### Installing

If you have rights to commit into the original repository, you can push new branches into it. If not, work via fork.

* Fork the repo on GitHub
* Clone your repo `git clone <REPO_URL>`
* Create your feature branch `git checkout -b feature/fooBar`
* Commit your changes `git commit -am 'Add some fooBar'`
* Push to the branch `git push origin feature/fooBar`
* Create a new Pull Request (via GitHub interface)

## How to writre a new blog post

The blog posts are hosted in `content/posts` folder. Each blog post has its subfolder. To create a new blog post, create
a folder by analogy to existing ones. The folder name should start with the date of the post.

Put the text of the post into `index.md` file. It should have the following formmat.

```md
---
title: Title of your post
author: You name
---

Text of your post. For formatting, you can use Makrdown (https://en.wikipedia.org/wiki/Markdown).
```

## How to make a new page

Text pages are hosted in `content/pages`, each it its folder. The names of the folders start with numbers which make the
order of pages in the menu. You can add a new first-level page or subpages. Figure out the structure from the following
scheme:

```text
content/
  pages/
    1--super-page/
      index.md
    2--projects/
      index.md
      some-other-page.md    # <-- 2nd-level page
    3--about/
      docs/
        index.md            # <-- 2nd-level page
      index.md              # <-- 1st-level page
```

As you can see, additional levels can be done with subfolders or with additional files. On the website, the URL for a
page will be `http://design.elisa.fi/parent-page/children-page/`. You can use as many levels as you want but be
reasonable.

Put the text of the page into the markdown file, the structure should be like the following:

```md
---
title: Title of your page
menuTitle: Optional title for menu, or it shows original title
---
Text of your post. For formatting, you can use Makrdown (https://en.wikipedia.org/wiki/Markdown).
```

## Awesome features for your posts and pages
### How to use pictures

You can illustrate your posts with pictures. Put the picture into the post folder, then you can access it in Markdown
like that:

```md
![Picture Title](./picture_file_name.png)
```
### How to use markup

You can use whatever HTML markup inside your markdown texts. For example,

```md

Hello, world!

<div>
  Something special.
</div>

```

### How to insert React component

You can insert interactive React components into the texts similarly to how it is done at the [Pattern Journey
page](/pattern-journey/). Make sure that this component is implemented in this website repository. If it is available,
do the following:

* Import the component into `src/components/Article/Bodytext.js` file.
* Register it inside `renderAst` function in the same file:<br/>
  ```js
  "comp-my-component": MyComponent
  ```
* Use it inside Markdown as<br/>
  ```md
  Some text before.
  <comp-my-component></comp-my-component>
  Some text after.
  ```
