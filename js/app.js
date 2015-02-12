$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
<<<<<<< HEAD
	var exampleView = new View($("#exampleView"));
=======
	var exampleView = new ExampleView($("#exampleView"), model);
>>>>>>> FETCH_HEAD

});