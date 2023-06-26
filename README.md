# redux-activity

This repository deals with examples of redux functions, it is segregated in:

0 - Creation of a react application using vite <br>
1 - Creation of a redux <br>
2 - the useSelector hook <br>

*************************

# 0 - Creation of a react application using vite.

1 - Clone an empty repository
2 - Open the terminal and type: npm create vite@latest
3 - type project's name and press enter
4 - Choose the React framework and press enter
5 - Choose TypeScript + SWC and press enter
6 - Open the project folder "cd ..."
7 - type npm install and press enter

**Organizing:

8 - open index.html and:
    a- change title
    b- remove:  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    c- delete: vite-env.d.ts
    d- delete: index.css
    e- delete: App.css
    f- inside App.tsx > delete error imports
    g- npm run dev > test and delete erroring imports and files

** Installing libraries:

9 - yarn add react-router-dom
10 - yarn add axios
11 - yarn add react-toastify
12 - yarn add react-hook-form
13 - yarn add @hookform/resolvers
14 - yarn add zod
15 - yarn add styled-components
16 - yarn add @types/styled-components -D

*************************

# 1 - Creation of a redux

1 - yarn add redux react-redux
2 - create folder in src: store
3 - inside store folder, create: index.tsx and a folder: modules
4 - inside modules folder, create an any name folder.
5 - inside of it: actions.tsx and reducer.tsx
