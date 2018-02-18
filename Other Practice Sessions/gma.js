var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"powderblue");
grd.addColorStop(1,"white");

ctx.fillStyle = grd;
ctx.fillRect(0,0,200,100);

var c = document.getElementById("Canvas1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(100,50,40,0,2*Math.PI);
ctx.stroke();
ctx.font = "30px Arial";
ctx.fillText("Hello World",30,60);


var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"powderblue");

ctx.fillStyle = grd;
ctx.fillRect(0,0,200,100);
ctx.drawImage(img,10,10);


function myMap(){
	var mapOptions = {
		center: new google.maps.LatLng(51.5,-0.12),
		zoom: 10,
		mapTypeId: google.mapss.MapTypeId.HYBRID
	}

	var map = new google.maps.Map(document.getElementById("map"),mapOptions);
}