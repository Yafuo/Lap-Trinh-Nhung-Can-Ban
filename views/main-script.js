
		// var socket = io.connect('http://127.0.0.1:3000');
		// socket.on("List-device", function(data){
			// data.forEach(function(i){
				// $("#list-device").append(i);
			// });

		// });
		$(document).ready(function(){
			$("#xacthuc").click(function(){
			alert("Xin chao");
			//socket.emit("Xac-thuc",123);
		});
		});
	
		// xg = yg = 0;
		// socket.on("Sent-key-from-AAA", function(key){
				
		// key = parseInt(key);
			// switch(key){
				// case 1:    //left
				// xc = -1; yc =0;
				// break;
				// case 2:    //up
				// xc = 0; yc =1;
				// break;
				// case 3:    //right
				// xc = 1; yc =0;
				// break;
				// case 4:    //down
				// xc = 0; yc =-1;
				// break;
				// case 5:    //enter
				// xc = 0; yc =0;
				// $("#choose").text(xg+","+yg);
				// $('#'+xg+yg).css("background-color","red");
				// socket.emit("Toa-do",xg+""+yg);
				// break;
				// default: return;

			// }
			// xg+= xc;
			// yg+=yc;
		// if(xg<0) xg =0; if(xg>7) xg =7;  // limit cursor into grid
		// if(yg<0) yg =0; if(yg>7) yg =7;
		// var element = $('#'+xg+yg);
			// xt=xg - xc;								//clear prev cursor
			// yt=yg - yc;
		// $(element).css("background-color","red");
		// $('#'+xt+yt).css("background-color","white");
		// $("#display").text(xg+","+yg);

		// });