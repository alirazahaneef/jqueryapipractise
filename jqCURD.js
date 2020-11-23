console.log("hey");

/*$(function () {
	loadRecipies();
});
function loadRecipies() {
	$.ajax({
		url: "https://usman-recipes.herokuapp.com/api/recipes",
		method: "GET",
		success: function (response) {
			console.log(response);
		},
	});
}*/
console.log("End");

$(function () {
	load();
});

function load() {
	$.ajax({
		url: "https://usman-recipes.herokuapp.com/api/recipes",
		method: "GET",
	});
}
