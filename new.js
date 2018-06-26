$("#sizePicker").submit(function(evt){
	evt.preventDefault();
	var Height = $("#inputHeight").val();
	var Width = $("#inputWeight").val();
	makeGrid(Height, Width);
	});

	function makeGrid(Height,Width) {
		$("tr").empty();
		for(var row = 1; row <= Height; row++){
			$("#pixelCanvas").append("<tr></tr>");
	    	for(var column = 1; column <= Width; column++){
	    		$("tr").filter(":last").append("<td></td>");
		    }
		}
		applyColor();
	}

	function applyColor(){
		let cells = $("td");
	    cells.click(function (){
		    let  color = $("#colorPicker").val();
		    if($(this).attr('style')) {
				$(this).removeAttr('style');
			}else {
			    $(this).attr('style', 'background-color:'+color);
			}   
		});
	};