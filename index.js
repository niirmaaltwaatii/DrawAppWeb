		var canvas=document.getElementById("canvas");
		var ctx=canvas.getContext("2d");

		canvas.width=window.innerWidth;
		canvas.height=window.innerHeight;

		var radius=5;
		var start=0;
		var end=Math.PI*2;
		var dragging=false;
		var colour = "lime";
		ctx.lineWidth=radius*2;

		var draw = function(e){
			if(dragging){
				ctx.lineTo(e.offsetX,e.offsetY);
				ctx.strokeStyle=colour;
				ctx.stroke();
				ctx.beginPath();
				ctx.arc(e.offsetX,e.offsetY,radius,start,end);
				ctx.fillStyle=colour;
				ctx.fill();
				ctx.beginPath();
				ctx.moveTo(e.offsetX,e.offsetY);
			}
		}

		var dragin = function(e){
			dragging=true;
			draw();
		}

		var dragout = function(e){
			dragging=false;
			ctx.beginPath();
		}

		canvas.addEventListener("mousedown",dragin);
		canvas.addEventListener("mousemove",draw);
		canvas.addEventListener("mouseup",dragout);
