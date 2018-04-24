let one = new Vue({
	el: "#instance-one", 
	data: {
		title: "Instance One"
	},
	methods: {
		changeTitle: function() {	// we can change the title of another Vue instance
			two.title = "Title Changed from Instance One!"	// reference the other Vue instance to be chnaged
		}
	},
	computed: {	// another type of function
		greet: function() {
			return "Hello from Instance One!";
		}
	}
});

let two = new Vue({
	el: "#instance-two", 
	data: {
		title: "Instance Two"
	},
	computed: {
		greet: function() {
			return "I am instance two!";
		}
	}
});

// we can also reference instances from outside of an instance
setTimeout('2000');
alert('about to change title of instance two from outside!');
two.title = "Title Changed from the outside!"