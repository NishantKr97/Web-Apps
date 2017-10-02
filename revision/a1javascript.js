/*function myfunction(){
	document.getElementById('hello').innerHTML = "Hello JavaScript!!!";
	document.getElementById('hello').style.color = "#006666";
	document.getElementById('image1').src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZmxpEXUbfvWyoKMtZld7jF7BkTkSdtuPCh4tf3RgWoM8AjKcvA";
}*/

 $(document).ready(function(){
            $(".btn").click(function(){
                $("*").hide();
            });
          
            $("p").mousedown(function()
            {
            	alert("Mouse down");
            });
        });