function kstgOP(){
$(".kuso_tg").fadeIn("slow")
}
function SKOP(){
$(".SK_tg").fadeIn("slow")
}

function tec(){
alert("Hello World!")
}




jQuery(document).ready(setReady);
function setReady() {
jQuery('.kuso').click(se);
jQuery('.SK').click(sko);
}
	
function se(){

$(".kuso_tg").slideToggle();

}

function sko(){
$(".SK_tg").slideToggle();
}	