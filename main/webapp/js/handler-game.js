var fCur= 1;
var iCur= 26;
var turn= false;
var map= [];
var flag= 0;
var roomNo;
var count= 0;
for(var i=0; i< 20;i++) {
	if(i< 10) {
		map[i]= parseInt((Math.random()* 25)+ 1);
	}
	else {
		map[i]= parseInt((Math.random()* 25)+ 26);
	}
}
function show(team) {
    var x= document.querySelectorAll(".detail-fire p");
    var y= document.querySelectorAll(".detail-ice p");
    if(team== 1) {
        for(var i= 0;i< 10;i++) {
            x[i].innerHTML= map[i];
        }
    }
    if(team== 2) {
        for(var i= 0;i< 10;i++) {
            y[i].innerHTML= map[i+10];
        }
    }
}
function fire(id) {
	var hit=1;
    var iSum=0;
    var fSum=0;
    if(id <26) {
//        document.getElementById(id).style.backgroundColor= "#CB1C1C";
        for(var i=0;i< 10; i++) {
            if(map[i]==id) {
                map[i]= 0;
//                document.getElementById(id).style.backgroundColor= "#6EFFF6";
                sendInfo(id, "#6EFFF6", turn);
                hit=0;
            }
            iSum= iSum+ map[i];
        }
        if(hit==1) {
        	sendInfo(id, "#CB1C1C", turn);
        }
        if(iSum== 0) {
            flag= 1;
            document.getElementById("winner").innerHTML= "The winner is team ICE";
        }
    }
    if(id> 25) {
        for(var i=10;i< 20; i++) {
            if(map[i]==id) {
                map[i]= 0;
                sendInfo(id, "#CB1C1C", turn);
                hit=0;
            }
            fSum= fSum+ map[i];
        }
        if(hit==1) {
        	sendInfo(id, "#6EFFF6", turn);
        }
        if(fSum== 0) {
            flag= 2;
            document.getElementById("winner").innerHTML= "The winner is team FIRE";
        }
    }
}
function arrowPressed() {
	if(turn==true) {			
		document.getElementById(fCur).setAttribute("class", "moving");
	}
	else {
		document.getElementById(iCur).setAttribute("class", "moving");
	}
}
document.onkeydown= function(event) {
	if(turn==true) {
		document.getElementById("turn").innerHTML= "Ice turn";
		document.getElementById("turn").style.color= "#6EFFF6";
		var x= document.querySelectorAll(".moving");
		for(var i=0; i< x.length; i++) {
			x[i].classList.remove("moving");
		}
	}
	else {
		document.getElementById("turn").innerHTML= "Fire turn";
		document.getElementById("turn").style.color= "#CB1C1C";
		var x= document.querySelectorAll(".moving");
		for(var i=0; i< x.length; i++) {
			x[i].classList.remove("moving");
		}
	}
	event= event || window.event;
	switch (event.keyCode) {
		case 39:
			if(turn==true&& fCur<25) {					
				fCur= fCur+ 1;
			}
			if(turn==false&& iCur< 50) {
				iCur= iCur+ 1;
			}
			break;
		case 37:
			if(turn==true&& fCur> 1) {
				fCur= fCur- 1;
			}
			if(turn==false&& iCur> 26) {
				iCur= iCur- 1;
			}
			break;
		case 38:
			if(turn==true&& fCur> 5) {
				fCur= fCur- 5;
			}
			if(turn==false&& iCur> 30) {
				iCur=iCur- 5;
			}
			break;
		case 40:
			if(turn==true&& fCur< 21) {
				fCur= fCur+ 5;
			}
			if(turn==false&& iCur< 46) {
				iCur=iCur+ 5;
			}
			break;
		case 13:
			if(turn==true) {
				fire(fCur);
			}
			else {
				fire(iCur);
			}
			break;
	}
	if(fCur>= 1 ||iCur>= 26) {
		arrowPressed();
	}
}