////////////////////////////////////////////////
//Append start screen and name input////////////
////////////////////////////////////////////////
$('body').append(
	"<div class='screen screen-start' id='start'>\
	<header> <h1>Tic Tac Toe</h1><p class='error'></p><input type='text' class='playerName' placeholder='Enter your name'>\
	<a href='#'' class='button'>Start game</a></header></div>'");
$('.playerName').css({'display': 'block','margin': '25px auto 15px auto', 'padding': '5px', 'border': 'none', 'border-radius': '5px'});
$('.error').css({'font-weight': 'bold', 'color':'red', 'margin-bottom': '0px', 'font-size': '9px'});
$('.button').on('click', () => {
		if($('.playerName').val() === ""){
			$('.error').html('Your name is required');
			$('.playerName').css({'margin-top':'2px', 'border':'solid 3px red'});
		} else {
		$('.screen-start').hide();
		}
});