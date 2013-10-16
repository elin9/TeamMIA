$(function() { 
	$("#students li").draggable({ 
        appendTo: "body", 
		cursor: "default", 
        revert: "invalid",
		helper: "original"
		/*function (event){
			return $('<span style="white-space:nowrap;"/>')
            .text($(this).text());
		}*/
     }); 
    
	initDroppable($("#551"),551); 
	initDroppable($("#552"),552);
	initDroppable($("#553"),553);
	
    function initDroppable($elements, $id) { 
        $elements.droppable({  
            drop: function(event, ui) { 
                var tempid = ui.draggable.text();
				var droparea = document.getElementById($id);				
				droparea.value = tempid; 
				ui.draggable.hide();
            } 
        }); 
    } 
}); 