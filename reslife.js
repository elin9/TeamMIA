	/* global var */
	var text_box = document.getElementById('551');
	var selection = document.getElementById('students');

	/* show available rooms on front page */
	function rooms(building, room) {
  	document.getElementById("roombox").style.display = 'block';
		document.getElementById("roombox").innerHTML = "Rooms available in " + building + ": " + room;
  	return true;
  }

	window.onload = function() {
		text_box = document.getElementById('551');
		selection = document.getElementById('students');
	}

	function selectChange() {
		text_box.value = selection.value;
	}

	function fillBox(boxid) {
		text_box = document.getElementById(boxid);
	}


  /* show floor stack */
  function showStack(name, height) {
  	clearFloor();
  	document.getElementById("instbox1").style.display = 'block';
    var root = document.getElementById("floorstack");
		root.innerHTML= "";

		var tbl = document.createElement("table");
		tbl.className = "floorstack";
		tbl.cellSpacing = "15";
		var tbo = document.createElement("tbody");
		var row, cell;

		/* header */
		row = document.createElement("tr");
		cell = document.createElement("th");
		cell.appendChild(document.createTextNode("Floor number"));
		row.appendChild(cell);
		cell = document.createElement("th");
		cell.appendChild(document.createTextNode("Available number"));
		row.appendChild(cell);
		tbo.appendChild(row);

		/* content */
		for (var i=height; i>0; i--) {
			row = document.createElement("tr");
			/* floor */
			cell = document.createElement("td");
			cell.setAttribute
			cell.appendChild(document.createTextNode(i));
			row.appendChild(cell);
			/* # of available rooms */
			cell = document.createElement("td");
			cell.appendChild(document.createTextNode("36"));
			row.appendChild(cell);
			/* button */
			var btn = document.createElement("button");
			btn.type = "button";
			btn.onclick = (function() {
				var currentI = i;
    		return function() {
          showFloor(name, currentI.toString());
    		}
   		}) ();

			btn.appendChild(document.createTextNode("Select"));
			row.appendChild(btn);
			tbo.appendChild(row);
		}
		tbl.appendChild(tbo);
		root.appendChild(tbl);

	}

	/* show floorplan */
	function showFloor(name, floor) {
		document.getElementById("instbox2").style.display = 'block';
    var img = document.getElementById("floorplan");
		img.src = 'pics/' + name + floor + '.png';
		img.alt = name;
		img.onclick = function() {
			popitup(img.src);
		};
		document.getElementById("bp_header").innerHTML = 'Blueprint';
    showRoom();
	}

	function clearFloor() {
		var img = document.getElementById("floorplan");
		img.src = 'pics/campus.jpg';
		img.alt = 'River Campus @ University of Rochester';
		document.getElementById("bp_header").innerHTML= 'River Campus @ U of R!';
		clearRoom();
	}

	/* show room options */
	function showRoom() {
		clearRoommates();
		var root = document.getElementById("bottom_left");
		root.innerHTML="";
		var inputRadio = "<h3>Room options</h3>";
		inputRadio += "<div class='instbox'><p>Select the room you want from below</p></div>";
		/* radio
			inputRadio += "<div id='left'><label><input name='rad' type='radio'>510</label><label><input name='rad' type='radio'>520</label>";
			inputRadio += "<label><input name='rad' type='radio'>530</label><label><input name='rad' type='radio'>540</label></div>";
			inputRadio += "<div id='right'><label><input name='rad' type='radio'>550</label><label><input name='rad' type='radio'>560</label>";
			inputRadio += "<label><input name='rad' type='radio'>570</label><label><input name='rad' type='radio'>580</label></div>";
		*/
		inputRadio += "<select id='students' name='students' style='width:60px;height:100px' size=5>";
		inputRadio += "<option name='rad' value='510'>510</option>";
		inputRadio += "<option name='rad' value='520'>520</option>";
		inputRadio += "<option name='rad' value='540'>540</option>";
		inputRadio += "<option name='rad' value='550'>550</option>";
		inputRadio += "<option name='rad' value='560'>560</option>";
		inputRadio += "<option name='rad' value='570'>570</option>";
		inputRadio += "<option name='rad' value='580'>580</option>";
		inputRadio += "</select>";
		root.innerHTML=inputRadio;
		var element = document.getElementsByName('rad');
		for (var i=element.length-1; i>=0; i--) {
			element[i].setAttribute('onclick',"showForm()");
		}
		document.getElementById("confirm").setAttribute('onclick',"confirmation()");
	}

	function clearRoom() {
		var loc = document.getElementById("bottom_left");
		loc.innerHTML = "";
		clearRoommates();
	}

	/* show roommates */
	function showForm() {
		document.getElementById("bottom_right").style.display = 'block';
	}

	function clearRoommates() {
		document.getElementById("bottom_right").style.display = 'none';
	}

	function popitup(url) {
		newwindow=window.open(url, 'Larger view', 'height=600, width=800');
		if (window.focus) {
			newwindow.focus();
		}
		return false;
	}


	function confirmation()	{
		alert("Your submission was successful!");
	}
