
var obj = {"Positions" :[ {"name" : "google" , "link" : "https://careers.google.com", "job": "Test 1 Description"},
{"name" : "prudential" , "link" : "http://jobs.prudential.com/", "job": "Test3"},
{"name" : "spacex" , "link" : "https://www.spacex.com/careers", "job": "Test 4"},
{"name" : "microsoft" , "link" : "https://careers.google.com", "job": "Test 5"},
{"name" : "icims" , "link" : "https://careers.icims.com/", "job": "Test 6"},
{"name" : "jj" , "link" : "https://www.careers.jnj.com/", "job": "Test 7"},
{"name" : "etsy" , "link" : "https://www.etsy.com/careers#engineering", "job": "Test 8"}]};


var listingDiv = document.getElementById("grid");
var myobj =obj.Positions;

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
