////////////////////////////////////////////////
//Append start screen and require name input///
///////////////////////////////////////////////
$('body').append(
	"<div class='screen screen-start' id='start'>\
	<header>\
		<h1>Tic Tac Toe</h1>\
		<p class='error'></p>\
		<input type='text' class='playerName errorMessage' placeholder='Enter your name'>\
		<h5 class='chooseOpponent'>Choose your opponent</h5>\
		<div class='checkboxDiv'>\
			<label for='computer'>Friend</label>\
			<input type='checkbox' class='opponent' id='friend' name='friend'>\
			<label for='computer'>Computer</label>\
			<input type='checkbox' class='opponent' id='computer' name='computer'>\
		</div>\
		<a href='#'' class='button'>Start game</a>\
	</header></div>'");

///////////////////////////////////////////////////////
// **CSS**        Style checkbox div	 **CSS** //////
//////////////////////////////////////////////////////
$('.chooseOpponent').css({'margin': '3px auto'});
$('.checkboxDiv').css('margin-bottom','7px');

//////////////////////////////////////////////////////////
///Append player 2 name input if friend checkbox checked//
/////////////////////////////////////////////////////////
$('#friend').change(function (){
	
	if(document.getElementById('friend').checked) {
		$('.checkboxDiv').append("<p class='error'></p><input type='text' class='player2name errorMessage' placeholder='Enter player2 name'>");
		$('.player2name').css({'display': 'block','margin': '25px auto 15px auto', 'padding': '5px', 'border': 'none', 'border-radius': '5px'});
		$('#computer').attr('disabled', true);
	} else {
		$('.player2name').remove();
		$('#computer').attr('disabled', false);
	
	}
});
/////////////////////////////////////////////////////////
///Require player 1 name and player 2 if checked////////
/////////////////////////////////////////////////////////
$('.playerName').css({'display': 'block','margin': '25px auto 15px auto', 'padding': '5px', 'border': 'none', 'border-radius': '5px'});
$('.button').on('click', () => {
		if($('.playerName').val() === "" || $('.player2name').val() === ""){
			$('.error').html('Your name is required');
			$('.errorMessage').css({'margin-top':'2px', 'border':'solid 3px red'});
			$('.error').css({'font-weight': 'bold', 'color':'red', 'margin-bottom': '0px', 'font-size': '9px'});
		} else {
		$('.screen-start').hide();
		}
	/////////////////////////////////
	/////append player names to game/
	/////////////////////////////////
	$('#player1').append("<p id='player1Name'></p>");
	$('#player1Name').html($('.playerName').val().toUpperCase());
	$('#player2').append("<p id='player2Name'>Megabot</p>");
	
	if($('.player2name').length) {
	$('#player2Name').html($('.player2name').val().toUpperCase());
	}
	
	$('#player1Name, #player2Name').css('margin', '4px 0 0 0');
});






