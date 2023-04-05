var button = document.getElementById("enter");
var input = document.getElementById("listinput");
var ul = document.querySelector("ul");

function addlist() {
var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

button.addEventListener("click", function(){
	if(input.value.length > 0){
addlist();
}})

input.addEventListener("keypress", function(event){
	if(input.value.length > 0 && event.keyCode == 13){
	addlist();
}
})