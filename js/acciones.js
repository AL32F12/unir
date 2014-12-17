function Buscargenero(gene)
{
	alert (gene);
	datos="Genero="+gene;
 $.ajax({
 type:"POST",
	 url:"http://192.168.1.192/DAMO/consultabuscar.php",
data: datos
 }).done (function(msg){
	 alert(msg)
var datosJSON = JSON.parse(msg);
if (datosJSON.datos ==1)
{
	$('#GEN').empty();
		for(var i = 0; i < datosJSON.peliculas.length; i++)
{
	$('#GEN').append('<h3 align="center">'+ datosJSON.peliculas[i].Nombre + '</h3>    <div style="width:50%; float:left">'+ datosJSON.peliculas[i].Sinopsis + '</div> <div align="center" style="width:50%; float:left">       <img src="http://192.168.1.192/DAMO/recursos/fotos1/'+ datosJSON.peliculas[i].IdPelicula +'.jpg" width="100%">    <hr>    Genero:  '+ datosJSON.peliculas[i].Genero + '    <hr>    Duracion:  '+ datosJSON.peliculas[i].Duracion + '    <hr>    Clasificacion:  '+ datosJSON.peliculas[i].clasificacion + '    <hr>    Precio: '+ datosJSON.peliculas[i].Precio + '    <hr>    Año:  '+ datosJSON.peliculas[i].AnioN + '    <hr>    Tiemp. Prestacion: '+ datosJSON.peliculas[i].TiemPresDias + '    <hr>        </div>   </div>        <div style="clear:both">    <hr>    <hr>    </div>    </div>    	<div data-role="footer" data-position="fixed">	</div>');
	
	
}
$('#page3').tigger('pagecreate');
}
if (datosJSON.datos ==0)
	{
		alert ("no hay peliculas que mostrar");
	}

 });
 }

function ListarGeneros()
{
 $.ajax({
	 type:"POST",
	 url:"http://192.168.1.192/DAMO/consultabuscar.php"
	 
 }).done (function(msg){
	 
	//se ejecuta cuando regresa la informacion del servidor 
	var datosJSON = JSON.parse(msg);
	if (datosJSON.datos ==1)
	{
		$('#GEN').empty();
		for(var i = 0; i < datosJSON.peliculas.length; i++)
		{
		$('#GEN').append('<h3 align="center">'+ datosJSON.peliculas[i].Nombre + '</h3>    <div style="width:50%; float:left">'+ datosJSON.peliculas[i].Sinopsis + '</div> <div align="center" style="width:50%; float:left">       <img src="http://192.168.1.192/DAMO/recursos/fotos1/'+ datosJSON.peliculas[i].IdPelicula +'.jpg" width="100%">    <hr>    Genero:  '+ datosJSON.peliculas[i].Genero + '    <hr>    Duracion:  '+ datosJSON.peliculas[i].Duracion + '    <hr>    Clasificacion:  '+ datosJSON.peliculas[i].clasificacion + '    <hr>    Precio: '+ datosJSON.peliculas[i].Precio + '    <hr>    Año:  '+ datosJSON.peliculas[i].AnioN + '    <hr>    Tiemp. Prestacion: '+ datosJSON.peliculas[i].TiemPresDias + '    <hr>        </div>   </div>        <div style="clear:both">    <hr>    <hr>    </div>    </div>    	<div data-role="footer" data-position="fixed">	</div>');
		
		}
		$('#page3').tigger('pagecreate');
	}
	if (datosJSON.datos ==1)
	{
		alert ("no hay peliculas que mostrar");
	}
 });
}


 $(document).ready(function(e){
	 document.addEventListener("deviceready",function(){
		 $("#Genero").tap (function () {
			
			 ListarGeneros();
		
		$.mobile.changePage("#page3");
		 });
		 
	 });
 });
 