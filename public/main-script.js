xg = yg = 0;
SttA = SttB  = 0;
		var socket = io.connect('http://127.0.0.1:3000');
		 socket.on("Thietbi-da-chon",function(data){
			 data.forEach(function(i){
				if (i =="Device01") document.getElementById("Device01").disabled = true;
				if (i =="Device02") document.getElementById("Device02").disabled = true;			 
			 });					
			 });
		socket.on("Da-ket-noi",function(data){
			$("#list-device").append(data);
		});
		socket.on("ReadyA",function(){
			SttA = 1;
			$("#MyStatus").text("Ready!");
			socket.emit("ReadyA-client",1);
		});
		socket.on("ReadyB",function(){
			SttB = 1;
			socket.emit("ReadyB-client",1);
			$("#YourStatus").text("Ready!");
		});
		socket.on("Ban-do-ta",function(data){
				data.forEach(function(i){
					$("#A"+i).css("background-color","#6EFFF6");
				});
			})
		socket.on("Youlose",function(){
			// $("#chontau").hide();
			alert("You lose");
		});
		socket.on("Youwin",function(){
			alert("You win");
		})
		
		$(document).ready(function(){
			$("#Play").hide();
			$("#chontau").hide();
			
			 
			 
			$("#chon").click(function(){
			//alert("Xin chao");
			$("#thietbi").hide();
			$("#chontau").show();
			var device = $("input[name='device']:checked").val();
			//alert(device);
			socket.emit("Xac-thuc-"+device, device);
		});
		
			
			
		});
		
	xg = yg = 0;	
		socket.on("Sent-key-from-AAA", function(data){
		var key = parseInt(data);
			switch(key){
				case 1:    //left
				xc = -1; yc =0;
				break;
				case 2:    //up
				xc = 0; yc =1;
				break;
				case 3:    //right
				xc = 1; yc =0;
				break;
				case 4:    //down
				xc = 0; yc =-1;
				break;
				case 5:    //enter
				xc = 0; yc =0;
				$("#choose").text(xg+","+yg);
				if(SttA || SttB){
				$('#A'+xg+yg).css("background-color","white");
				}else{
				$('#A'+xg+yg).text("O");
				};
				socket.emit("Toa-do",xg+""+yg)
				break;
				default: return;

			}
			xg+= xc;
			yg+=yc;
		if(xg<0) xg =0; if(xg>7) xg =7;  // limit cursor into grid
		if(yg<0) yg =0; if(yg>7) yg =7;
		var element = $('#A'+xg+yg);
			xt=xg - xc;								//clear prev cursor
			yt=yg - yc;
		$(element).css("background-color","#CB1C1C");
		$('#A'+xt+yt).css("background-color","white");
		//$("#display").text(xg+","+yg);

		});	
		xgA = ygA = 0;
/////////////////////////////////////////////////////////CHOI///////////////////////////////////
		
		socket.on("Sent-key-to-Play", function(data){
		var key = parseInt(data);
			switch(key){
				case 1:    //left
				xcA = -1; ycA =0;
				break;
				case 2:    //up
				xcA = 0; ycA =1;
				break;
				case 3:    //right
				xcA = 1; ycA =0;
				break;
				case 4:    //down
				xcA = 0; ycA =-1;
				break;
				case 5:    //enter
				xcA = 0; ycA =0;
				socket.emit("Fire",xgA+""+ygA);
				break;
				default: return;

			}
			xgA+= xcA;
			ygA+=ycA;
		if(xgA<0) xgA =0; if(xgA>7) xgA =7;  // limit cursor into grid
		if(ygA<0) ygA =0; if(ygA>7) ygA =7;
		var element = $('#B'+xgA+ygA);
			xtA=xgA - xcA;								//clear prev cursor
			ytA=ygA - ycA;
		$(element).css("background-color","#CB1C1C");
		$('#B'+xtA+ytA).css("background-color","white");
		$("#displayB").text(xgA+","+ygA);

		});		