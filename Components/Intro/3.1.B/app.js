// Vue.component('name', object);
Vue.component('greeting', {
	template: '<p>Hey there, I am {{ name }}. <button v-on:click="changeName">Change Name</button> </p>',// template that is rendered when we use this component
	data: function() {	// We can create data just like a stand-alone Vue instance... however, data must be a function because we have		
		return {		// to output data to multiple places now. Calling a function to return fresh data. *** It will not be updated in another place
			name: 'Yoshi'
		}
	},
	methods: {
		changeName: function() {	// demonstrates different data for each component
			this.name = "Mario";
		}
	}
});

new Vue({
	el: '#instance-one'
});

new Vue({
	el: '#instance-two'
});