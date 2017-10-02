 <script type="text/javascript">
  dropdown.addEventListener("Menu3",function () {
  	document.getElementByClassName("subitems").style.display = "block";
  	ins.style.background = "2a2a2a";
  	setTimeout(function () {
       document.getElementByClassName("subitems").style.height = "40px;"
  	},1);
  });
  var closedropdown = function () {
    document.getElementsByClassName("subitems").style.height = "0";
    ins.style.background = "#000";
    setTimeout(function () {
        document.getElementsByClassName("subitems").style.display = "none";
    }, 200);
};
dropdown.addEventListener("mouseleave", closedropdown);

// Adding Click-EventListeners to elements
home.addEventListener("click", function () {
    document.getElementById("Menu").style.background = "#fff";
    document.getElementById("Menu").style.background = "inherit";
    document.getElementById("Menu3").style.background = "inherit";
});
    function airforce1() {
    	var imagea = document.getElementById("image");
    	imagea.src = "img.png";

    	document.getElementById("content").innerHTML = "The Indian Air Force (IAF; IAST: Bhāratīya Vāyu Senā) is the air arm of the Indian armed forces. It is the world's fourth largest air force in terms of both personnel and aircraft.[7] Its primary responsibility is to secure Indian airspace and to conduct aerial warfare during a conflict. It was officially established on 8 October 1932 as an auxiliary air force of the British Empire and the prefix Royal was added in 1945 in recognition of its services during World War II. ";

    	document.getElementById("posthead").innerHTML = "Indian Air Force";
    }
    
  	function image1Set() {
  		
  		
        document.getElementById("posthead").innerHTML = "Sukhoi MK-30";
  		document.getElementById("image").style.visibility = "visible";

  		document.getElementById("content").innerHTML = "The Sukhoi Su-30MKI[a] (NATO reporting name: Flanker-H) is a twinjet multirole air superiority fighter developed by Russia's Sukhoi and built under licence by India's Hindustan Aeronautics Limited (HAL) for the Indian Air Force (IAF). A variant of the Sukhoi Su-30, it is a heavy, all-weather, long-range fighter.";

  		var image1 = document.getElementById("image");
  		image1.src = "img1.png";
  	}
  	function image2Set() {
  		document.getElementById("posthead").innerHTML = "Jaguar";
  		document.getElementById("image").style.visibility = "visible";

  		document.getElementById("content").innerHTML = "The SEPECAT Jaguar is an Anglo-French jet attack aircraft, originally used by the British Royal Air Force and the French Air Force in the close air support and nuclear strike role, and still in service with the Indian Air Force.";

  		var image2 = document.getElementById("image");
  		image2.src = "img2.png";
  	}
  	function image3Set() {
  		document.getElementById("posthead").innerHTML = "Mirage 2000";
  		document.getElementById("image").style.visibility = "visible";

  		document.getElementById("content").innerHTML = "The Dassault Mirage 2000 is a French multirole, single-engine fourth-generation jet fighter manufactured by Dassault Aviation. It was designed in the late 1970s as a lightweight fighter based on the Mirage III for the French Air Force (Armée de l'Air).";

  		var image3 = document.getElementById("image");
  		image3.src = "img3.png";
  	}
  	function image4Set() {
  		document.getElementById("posthead").innerHTML = "MIG-21";
  		document.getElementById("image").style.visibility = "visible";

  		document.getElementById("content").innerHTML = "The Mikoyan-Gurevich MiG-21 is a jet fighter/interceptor aircraft, designed by the Mikoyan-Gurevich Design Bureau in the Soviet Union. It was popularly nicknamed Balalaika , from the aircraft's planform-view resemblance to the shape of its fuselage. ";

  		var image4 = document.getElementById("image");
  		image4.src = "img4.png";
  	}
    function submenu() {
    	onmouseover("Menu3").submenu().show();
    }
     function submenu1() {
    	onmouseover("Menu").submenu().show();
    }
    function airforce(x) {
      menu1.style.background = "#00E676";
      menu2.style.background = "#00E676";
      menu3.style.background = "#00E676";
      x.style.background = "#69F0AE";

    }
    function postMain(y) {
      
      post1.style.background = "#FF3D00";
      post2.style.background = "#FF3D00";
      post3.style.background = "#FF3D00";
      post4.style.background = "#FF3D00";
      y.style.background = "#DD2C00";
    }
  </script>