# Vue.js Tutorial

A short, concise tutorial on the popular front-end framework Vue.js. Written for the Mission Vista High School Web Programming course.

## Table of Contents
1. [Getting Started](#start)
   + [Installation and Usage](#installation)
2. [Basics](#basics)
5. [Resources](#resources)
 


### Getting Started  <a name="start"></a>
 Vue.js is the  Javascript framework. In this section, we will go over the core concepts to and understand and use Vue.js.
 
 #### Installation and Usage <a name="installation"></a>
 Vue.js is tremendously simple to install and use. Although we will be using the Vue command line interface (vue-cli), you can get started with Vue in 3 different ways.
 
**CDN:**  
Import Vue.js into your `index.html` file using the `<script>` tag.  

```html
<!-- development version with alarms and alerts -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

  
**NPM:**  
Start by creating a project with npm
```bash 
	$ npm init -y
```
  
  
Install Vue and save dependencies
```bash
	$ npm install -s vue
```
  
Then in your `index.html` file reference vue with a `<script>` tag
``` html
<body>
	<script src="node_modules/dist/vue/vue.js"></script>
</body>
```
\* As a note: in the `/dist` folder of the `vue` npm package, there are many other versions that refer to different builds of Vue.js. We will only be using the Full build. For more information see [here](https://vuejs.org/v2/guide/installation.html#Explanation-of-Different-Builds)
  
  
**Vue-CLI:**  
This is the method we will most often use. The Vue-CLI allows us to quickly create Single Page Applications with built in templates.
Start by installing the Vue-CLI module from NPM

```bash
	$ sudo npm install -g vue-cli
```

Create your project using the CLI with the command `vue init <template-name> <project-name>`  
Ex: 
```bash 
	$ vue init webpack-simple myFirstVueProject
```

  
**JSFiddle:**  
 You can play around with Vue.js in JSFiddle's [Hello World Example](https://jsfiddle.net/chrisvfritz/50wL7mdz/)












### Resources <a name="resources"></a>
 Vue.js is one of the better documented frameworks out there. Regardless, I have compiled a list of my favorite Vue.js documentations/tutorials while writing this tutorial.
   + **[Vue.js Official Documentation](https://vuejs.org/)**
    

