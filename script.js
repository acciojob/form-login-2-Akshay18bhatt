//your JS code here. If required.
let form =document.querySelector("form");


form.addEventListener("submit", onsubmit);

function onsubmit(){
	const firstName=document.getElementById("fn").value;
	const lastName=document.getElementById("ln").value;
	const phoneNumber=document.getElementById("tel").value;
	const email=document.getElementById("email").value;

	const message= `First Name: John`+"\n"+
		`Last Name: Doe`+"\n"+
		`Phone Number: 1234567890`+"\n"+
		`Email: john.doe@example.com`;
	alert(message);
}