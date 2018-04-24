# Vue.js Tutorial

A short, concise tutorial on the popular front-end framework Vue.js. Written for the Mission Vista High School Web Programming course. ***Not every directory in the repo will be accounted for here... make sure to poke around in the repo for more information***

## Table of Contents
1. [Getting Started](#getting-started)
   + [Installation and Usage](#installation-and-usage)
2. [Basics](#basics)
    + [Syntax](#syntax)
    + [Basic Directory Structure](#basic-directory-structure)
    + [V-Directives](#v-directives)
3. [Components](#components)  
   + [Intro](#intro)
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

#### Syntax
Vue.js has special syntax. In this section, we discover interpolations and basic data bindings related to Vue.js.

#### Basic Directory Structure
For this tutorial we go over 3 different templates. However, we use [webpack-simple](https://github.com/MissionVistaCSClub/Vue.js-Tutorial/tree/master/Basics/Basic-Structure/2.2.B) the most. The other templates can be found using the documentation. 

#### V-Directives 
Vue.js uses an attribute called v-directives, similar to [Angular's](https://angular.io/) ng-directives. They allow us to retrieve, bind, show, and other actions to our data. With every new v-directive demonstrated, make sure to test out its data binding by trying it out in the console.

**Declarative Rendering:** [To Github Section](https://github.com/MissionVistaCSClub/Vue.js-Tutorial/tree/master/Basics/V-Directives/2.3.A)  
Declarative Rendering basically means that Vue.js hooks up the data from our `<script>` tag to the DOM. To prove this, run the provided example and in the browser console type: 
``` bash
app.message
```
This should output: 
```html 
Hello Vue! 
```

You can also *set* the data of your Vue app and it will update reactively.
``` bash
app.message = "Vue is cool!"
```
This should dynamically change the webpage.


### Components  
In this section, we will learn about the basics of scaling up: components. In Vue.js, components are the way to easily reuse code. Components can split up pages or even make new HTML tags (will get into later).  

#### Intro 
Components are just reusable Vue instances with a name. Since they are reusable Vue instances, they accept the same properties like `data`, `computed`, and `methods`. The only exceptions are with options like `el`.

**Nesting Components:** [To Github Section](https://github.com/MissionVistaCSClub/Vue.js-Tutorial/tree/master/Components/Intermediate/3.2.A)
 
![Components Tree](https://vuejs.org/images/components.png)

As seen in this image, we can nest components of our web page. We most often do this in medium to large-sized applications. However, we can do it on small sized applications to ensure order and clean code. 




### Resources  
 Vue.js is one of the better documented frameworks out there. Regardless, I have compiled a list of my favorite Vue.js documentations/tutorials while writing this tutorial.
   + **[Vue.js Official Documentation](https://vuejs.org/)**
   + [6 Best Vue.js Tutorials](https://medium.com/quick-code/top-tutorials-to-learn-vue-js-for-beginners-6c693e41091d)
    
