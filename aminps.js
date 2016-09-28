function tec(){
alert("Hello World!")
}




jQuery(document).ready(setReady);
function setReady() {
jQuery('.kuso').click(plf);
jQuery('.SK').click(sko);
}
	
function plf(){
$(".kuso_tg").slideToggle()
$(".nk").not(".kuso_tg").hide("slow");


}

function sko(){
$(".SK_tg").slideToggle();
$(".nk").not(".SK_tg").hide("slow");
}	