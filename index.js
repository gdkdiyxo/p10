
var request = new XMLHttpRequest();
request.onreadystatechange = function(){
  if (this.readyState == 4 && this.status == 200) {
    var obj = JSON.parse(this.responseText);
    displayPositions(obj);
  }
};
request.open("GET", "data.json", true);
request.send();


function displayPositions(obj){
var listingDiv = document.getElementById("grid");
myobj = obj.Positions;

for (var i in myobj) {
  var div = document.createElement("div");
  div.className = "listing";

  switch(myobj[i].name){
			case 'google':
				div.innerHTML = '<img src="images/googleLogo.png"><p>'+myobj[i].job+'</p><button class="btn" onclick="location.href='+myobj[i].link+'">Click for More Information</button>';
				break;
			case 'prudential':
				div.innerHTML = '<img src="images/prudentialLogo.png"><p>'+myobj[i].job+'</p><button class="btn" onclick="location.href='+myobj[i].link+'">Click for More Information</button>';
				break;
			case 'spacex':
				div.innerHTML = '<img src="images/spaceXlogo.png"><p>'+myobj[i].job+'</p><button class="btn" onclick="location.href='+myobj[i].link+'">Click for More Information</button>';
				break;
      case 'microsoft':
				div.innerHTML = '<img src="images/microsoftLogo.png"><p>'+myobj[i].job+'</p><button class="btn" onclick="location.href='+myobj[i].link+'">Click for More Information</button>';
				break;
      case 'icims':
				div.innerHTML = '<img src="images/icimsLogo.png"><p>'+myobj[i].job+'</p><button class="btn" onclick="location.href='+myobj[i].link+'">Click for More Information</button>';
				break;
      case 'jj':
				div.innerHTML = '<img src="images/JJLogo.png"><p>'+myobj[i].job+'</p><button class="btn" onclick="location.href='+myobj[i].link+'">Click for More Information</button>';
				break;
      case 'etsy':
				div.innerHTML = '<img src="images/etsyLogo.png"><p>'+myobj[i].job+'</p><button class="btn" onclick="location.href='+myobj[i].link+'">Click for More Information</button>';
				break;
			default:
			  div.innerHTML = "Nothing to Show"
		}

  listingDiv.appendChild(div);
}

}
