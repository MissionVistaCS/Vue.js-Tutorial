# Vue.js Tutorial

A short, concise tutorial on the popular front-end framework Vue.js. Written for the Mission Vista High School Web Programming course.

## Table of Contents
1. [Getting Started](#getting-started)
   + [Installation and Usage](#installation-and-usage)
2. [Basics](#basics)
    + [Syntax](#syntax)
    + [V-Directives](#v-directives)
    + [Basic Directory Structure](#basic-directory-structure)
5. [Resources](#resources)

### Getting Started  
 Vue.js is the  Javascript framework. In this section, we will start off with installing and getting exposed to Vue.js
 
 #### Installation and Usage  
 Vue.js is tremendously simple to install and use. Although we will be using the Vue command line interface (vue-cli), you can get started with Vue in 3 different ways.
 
**CDN:** [To Github Section](https://github.com/MissionVistaCSClub/Vue.js-Tutorial/tree/master/GettingStarted/InstallationAndUsage/1.1.A)   

Import Vue.js into your `index.html` file using the `<script>` tag.  

```html
<!-- development version with alarms and alerts -->
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```
  
**NPM:**  [To Github Section](https://github.com/MissionVistaCSClub/Vue.js-Tutorial/tree/master/GettingStarted/InstallationAndUsage/1.1.B)   

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
  
  
**Vue-CLI:**  [To Github Section](https://github.com/MissionVistaCSClub/Vue.js-Tutorial/tree/master/GettingStarted/InstallationAndUsage/1.1.C)   

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

### Basics  
In this section, we will learn about the basics of Vue: basic directory structure, syntax, and v-directives.  
### Syntax
### Basic Directory Structure
#### V-Directives 
Vue.js uses an attribute called v-directives, similar to [Angular's](https://angular.io/) ng-directives. They allow us to retrieve, bind, show, and other actions to our data. 
**Declarative Rendering:** [To Github Section]()










### Resources  
 Vue.js is one of the better documented frameworks out there. Regardless, I have compiled a list of my favorite Vue.js documentations/tutorials while writing this tutorial.
   + **[Vue.js Official Documentation](https://vuejs.org/)**
    
