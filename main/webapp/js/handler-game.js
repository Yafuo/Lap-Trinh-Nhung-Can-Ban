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
			// document.getElementById("winner").innerHTML= "The winner is team ICE";
			sendInfoWin(0);
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
			// document.getElementById("winner").innerHTML= "The winner is team FIRE";
			sendInfoWin(1);
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
// document.onkeydown= function(event) {
// 	if(turn==true) {
// 		document.getElementById("turn").innerHTML= "Ice turn";
// 		document.getElementById("turn").style.color= "#6EFFF6";
// 		var x= document.querySelectorAll(".moving");
// 		for(var i=0; i< x.length; i++) {
// 			x[i].classList.remove("moving");
// 		}
// 	}
// 	else {
// 		document.getElementById("turn").innerHTML= "Fire turn";
// 		document.getElementById("turn").style.color= "#CB1C1C";
// 		var x= document.querySelectorAll(".moving");
// 		for(var i=0; i< x.length; i++) {
// 			x[i].classList.remove("moving");
// 		}
// 	}
// 	event= event || window.event;
// 	if(event.keyCode === 3 || event.keyCode === 39) {
// 		if(turn==true&& fCur<25) {
// 			fCur= fCur+ 1;
// 		}
// 		if(turn==false&& iCur< 50) {
// 			iCur= iCur+ 1;
// 		}
// 	}
// 	else if(event.keyCode === 1 || event.keyCode === 37) {
// 		if(turn==true&& fCur> 1) {
// 			fCur= fCur- 1;
// 		}
// 		if(turn==false&& iCur> 26) {
// 			iCur= iCur- 1;
// 		}
// 	}
// 	else if(event.keyCode === 2 || event.keyCode === 38) {
// 		if(turn==true&& fCur> 5) {
// 			fCur= fCur- 5;
// 		}
// 		if(turn==false&& iCur> 30) {
// 			iCur=iCur- 5;
// 		}
// 	}
// 	else if(event.keyCode === 4 || event.keyCode === 40) {
// 		if(turn==true&& fCur< 21) {
// 			fCur= fCur+ 5;
// 		}
// 		if(turn==false&& iCur< 46) {
// 			iCur=iCur+ 5;
// 		}
// 	}
// 	else if(event.keyCode === 5 || event.keyCode === 13) {
// 		if(turn==true) {
// 			fire(fCur);
// 		}
// 		else {
// 			fire(iCur);
// 		}
// 	}
// 	if(event.keyCode === 6 || event.keyCode === 7 || event.keyCode === 32) {
// 		alert("Board is connected");
// 	}
// 	if(fCur>= 1 ||iCur>= 26) {
// 		arrowPressed();
// 	}
// }
function gameHandle(keyPress) {
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
	if(keyPress === 3) {
		if(turn==true&& fCur<25) {
			fCur= fCur+ 1;
		}
		if(turn==false&& iCur< 50) {
			iCur= iCur+ 1;
		}
	}
	else if(keyPress === 1) {
		if(turn==true&& fCur> 1) {
			fCur= fCur- 1;
		}
		if(turn==false&& iCur> 26) {
			iCur= iCur- 1;
		}
	}
	else if(event.keyCode === 2) {
		if(turn==true&& fCur> 5) {
			fCur= fCur- 5;
		}
		if(turn==false&& iCur> 30) {
			iCur=iCur- 5;
		}
	}
	else if(event.keyCode === 4) {
		if(turn==true&& fCur< 21) {
			fCur= fCur+ 5;
		}
		if(turn==false&& iCur< 46) {
			iCur=iCur+ 5;
		}
	}
	else if(event.keyCode === 5) {
		if(turn==true) {
			fire(fCur);
		}
		else {
			fire(iCur);
		}
	}
	if(keyPress === 6) {
		alert("Board is connected");
	}
	if(fCur>= 1 ||iCur>= 26) {
		arrowPressed();
	}
}
