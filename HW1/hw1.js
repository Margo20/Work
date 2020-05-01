var list = [
	{
		distanceKm: 70,
		timeMinutes: 30
	},
	{
		distanceKm: 120,
		timeMinutes: 70
	},
	{
		distanceKm: 170,
		timeMinutes: 80
	},
	{
		distanceKm: 30,
		timeMinutes: 10
	},
	{
		distanceKm: 200,
		timeMinutes: 120
	}
];
function velocity(distanceKm,timeMinutes){
	var tHours = timeMinutes/60;
	var vKmh = distanceKm / tHours;
	return vKmh;
}

var vMax = 0;
for (var i = 1; i < list.length; i++){
	var vKmh = velocity(
		list[i].distanceKm,
		list[i].timeMinutes);
	if (vMax < vKmh) {
		vMax = vKmh;
	}
}

console.log(vMax);