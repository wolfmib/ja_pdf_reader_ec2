


## Note only , not the source code


# ja_aws_app_pdf_reader
<<<<<<< HEAD

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
=======


Used to learning (read) pdf material anywhere any time, life is short


# ja_aws_app_pdf_reader
Used to learning (read) pdf material anywhere any time, life is short

---

## Install

Step 1: Install Node.js and npm 
Node.js and npm (Node Package Manager) are essential for managing packages in a Node.js project, including a Vue.js application.

Download Node.js: Go to the Node.js website and download the LTS version for macOS. This will also install npm.
Install Node.js and npm: Open the downloaded file and follow the installation prompts.
To confirm the installation, open your terminal and run:


## intall package in ec2
chomod 400 your key
ssh -i /path/to/your/key.pem ec2-user@your_ec2_public_ip
######
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
nvm ls-remote (node 18 is stable...)
nvm install v18.xx
about pdfjs use old version: 3.11.174 then 4.xx(<< not working)


export LC_CTYPE=en_US.UTF-8


######################################## god 
rm -rf ~/.nvm

sudo rm -rf /usr/local/lib/node*
sudo rm -rf /usr/local/include/node*
sudo rm -rf /usr/local/bin/node*
sudo rm -rf /usr/local/bin/npm*
sudo rm -rf /usr/local/share/man/man1/node*
sudo rm -rf /usr/local/share/man/man1/npm*
sudo rm -rf /usr/local/share/doc/node*

sudo rm -rf ~/.npm


*/ ################



nvm -v
#####
nvm install --lts
nvm install --lts=carbon


#check
node -v
npm -v



# install-vue
npm install -g @vue/cli




ERROR
Cannot read properties of undefined (reading 'GlobalWorkerOptions')
TypeError: Cannot read properties of undefined (reading 'GlobalWorkerOptions')
    at eval (webpack-internal:///./src/main.js:17:51)
    at ./src/main.js (http://35.180.43.169:8080/js/app.js:175:1)
    at __webpack_require__ (http://35.180.43.169:8080/js/app.js:348:32)
    at http://35.180.43.169:8080/js/app.js:1494:109
    at __webpack_require__.O (http://35.180.43.169:8080/js/app.js:390:23)
    at http://35.180.43.169:8080/js/app.js:1495:53
    at http://35.180.43.169:8080/js/app.js:1497:12

import * as PDFJS from 'pdfjs-dist'


# create project
vue create pdf_reader
cd pdf_reader


# git related
cd your-project-name

# git init
git init

git remote add origin https://github.com/your-username/your-repository.git


git add .
git commit -m "Initial Vue project setup"
git branch -M main  # Only needed if you want to rename the branch to main
git push -u origin main

.... some pull confilt issue , sovle by urself


## intall
npm install pdfjs-dist
  - if issue try old version:
    - npm show pdfjs-dist versions
    - npm install pdfjs-dist@2.0.95

vue add vuetify
#### stable version
pm install vuetify@v2-stable




---- 
issue
npm verb reify failed optional dependency /home/ec2-user/ja_pdf_reader_ec2/node_modules/@vue/cli-service/node_modules/fsevents
npm http fetch POST 200 https://registry.npmjs.org/-/npm/v1/security/advisories/bulk 2342ms
(#########⠂⠂⠂⠂⠂⠂⠂⠂⠂) ⠇ reify:fsevents: http fetch POST 200 https://registry.npmjs.org/-/npm/v1/security/advisories/bulk 2342ms









----
# what is vue3 and vue2 
Vue 3 is the latest major version of Vue.js and it includes a number of improvements and new features compared to Vue 2. Here are some key differences:

Composition API: Vue 3 introduces the Composition API, which provides an alternative way to compose components using functions. This can help with organization and reuse of logic, especially in larger applications.
Performance: Vue 3 has a smaller bundle size and better performance due to internal optimizations such as static tree hoisting and static props hoisting.
Better TypeScript Support: Vue 3 has improved TypeScript support out of the box, making it easier to type-check your applications.
Fragment, Teleport, and Suspense: These are new built-in components that Vue 3 offers. Fragments let you return multiple root nodes from a component, Teleport allows you to render content in a different place in the DOM, and Suspense lets you wait for asynchronous components to load.
Reactivity Enhancements: Vue 3's reactivity system has been rewritten using Proxies, which provides better performance and allows Vue to track more types of changes.
Multiple v-models: Vue 3 allows you to use multiple v-models on the same component, which is useful for custom components that need to model more than one piece of state.
If you're starting a new project, it's generally recommended to go with Vue 3, as it's the future of the framework and has more advanced features and improvements. However, if you have existing Vue 2 projects or plugins you depend on that have not yet been updated for Vue 3, you may need to stick with Vue 2 until those are updated.
