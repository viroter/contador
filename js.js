
	 
function calculalaRGB(){
	var colorRGB=0;
	var color=calc(colorRGB );
	var color1=calc(color);
	var color2=calc(color1);
	var color3=calc(color3);
	document.body.style.backgroundColor=rgb(color,color1,color2 , 0.8);
	
}
function rgb(a,b,c , alpha){
	if(typeof alpha == "undefined") alpha = 1;
	return 'rgba(' + a + ',' + b + ',' + c + ',' + alpha + ')';
}

function calc(rgb , max){
	if( typeof max == "undefined") max = 250;
	return  Math.round(Math.random()*(max-rgb)+ rgb);
}

function interval(datefin, lugar){
     var fecha_final = new Date(datefin);
	setInterval(function(){
        var fecha = new Date();
        var resultado = fecha_final - fecha;
        var resultado_seg = Math.floor(resultado / 1000);
				var dias = Math.floor(resultado_seg/86400);
				var seg = resultado_seg % 60;
		    var min = Math.floor(resultado_seg / 60)%60;
        var hr = Math.floor(resultado_seg / 3600)%24;
        debugger;
        if(lugar.startsWith(".")) lugar = document.getElementsByClassName(lugar.substr(1,lugar.length));
        else if ((lugar.startsWith("#")) ) lugar = document.getElementById(lugar.substr(1,lugar.length))
        lugar.innerHTML = dias + ' dias ' + ':' + hr +  ' horas ' + ':' + min +' minutos ' + ':' + seg + ' segundos ' + ' Faltan para el dia 31 del 12 de 2017 '
		calculalaRGB() }, 1000);
}


function init(datefin, lugar){
	interval(datefin,lugar)
}