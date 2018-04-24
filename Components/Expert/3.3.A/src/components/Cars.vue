<template>
	<div id="cars">
		<ul>
			<li v-for="cars in car" v-on:click="car.show = !car.show">
				<h2> {{ car.name }} </h2>
				<h3 v-show="car.show"> {{ car.speed }}</h3>
			</li> <!-- loop through all cars, each time you click - toggle the show -->
		</ul>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				cars: [
					{ name: "Bugatti", speed: "200MPH", show: false },
					{ name: "Ferrari", speed: "250MPH", show: false },
					{ name: "Corvette", speed: "180MPH", show: false },
					{ name: "Rollys Royce", speed: "120MPH", show: false },
					{ name: "Tesla", speed: "175MPH", show: false },
					{ name: "Jaguar", speed: "150MPH", show: false },
				]
			}
		}
	}

</script>

<style scoped>
#cars {
	width: 100%;
	max-width: 1200px;
	margin: 40px auto;
	padding: 0 20px;
	box-sizing: border-box;
}

ul {
	display: flex;
	flex-wrap: wrap;
	list-style-type: none;
	padding: 0;
}

li {
	flex-grow: 1;
	flex-basis: 300px;
	text-align: center;
	padding: 30px;
	border: 1px solid #222;
	margin: 10px;
}
</style>