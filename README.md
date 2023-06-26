# redux-activity

This repository deals with examples of redux functions, it is segregated in:

0 - Creation of a react application using vite <br>
1 - Creation of a redux <br>
2 - the useSelector hook <br>

*************************

# 0 - Creation of a react application using vite.

1 - Clone an empty repository <br>
2 - Open the terminal and type: npm create vite@latest <br>
3 - type project's name and press enter <br>
4 - Choose the React framework and press enter <br>
5 - Choose TypeScript + SWC and press enter <br>
6 - Open the project folder "cd ..." <br>
7 - type npm install and press enter <br>

**Organizing:

8 - open index.html and: <br>
    a- change title <br>
    b- remove:  <link rel="icon" type="image/svg+xml" href="/vite.svg" /> <br>
    c- delete: vite-env.d.ts <br>
    d- delete: index.css <br>
    e- delete: App.css <br>
    f- inside App.tsx > delete error imports <br>
    g- npm run dev > test and delete erroring imports and files <br>

** Installing libraries:

9 - yarn add react-router-dom <br>
10 - yarn add axios <br>
11 - yarn add react-toastify <br>
12 - yarn add react-hook-form <br>
13 - yarn add @hookform/resolvers <br>
14 - yarn add zod <br>
15 - yarn add styled-components <br>
16 - yarn add @types/styled-components -D <br>

*************************

# 1 - Creation of a redux

1 - yarn add redux react-redux <br>
2 - create folder in src: store <br>
3 - inside store folder, create: index.tsx and a folder: modules <br>
4 - inside modules folder, create an any name folder. <br>
5 - inside of it: actions.tsx and reducer.tsx <br>
