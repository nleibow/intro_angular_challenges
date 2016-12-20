console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);

function WelcomeController(){

	this.full_name = "Nathan Leibowitz"
	this.age = 23
	this.city = "Denver"
	this.state = "Colorado"
	this.lengthy = this.full_name.length
	this.shout = this.full_name.toUpperCase()
	
}

app.controller("SecondController", SecondController);

function SecondController(){
	this.class_name = "WDI"
	this.enrolled_students = 10
	this.start_date = new Date(2016, 10, 31);
	this.end_date = new Date(2017, 2, 3);
	daysRemaining()
	function daysRemaining(){
		
}