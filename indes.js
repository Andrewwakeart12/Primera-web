class animationJS{
	
	constructor(selector,nombre,duracion, tipoDeAnimacion)
		{
		this.selector= selector;
		this.nombre= nombre;
		this.duracion = duracion;
		this.tipoDeAnimacion= tipoDeAnimacion;
		}

		startAnimation()
		{
				var elemento_A_Animar = [];

				for(var i=0; i < this.selector.length; i++)
				{

					elemento_A_Animar[i] = document.querySelector(this.selector[i]);
				
					if(this.nombre[i]== 'fadein')
							{

							elemento_A_Animar[i].animate([
							  // keyframes
								  {  opacity: 1 ,transform: 'translateY(0px)',}, 
								  { opacity: 0,transform: 'translateY(-10px)',  }
								], { 
								  // timing options
								  duration: this.duracion
								});
							setTimeout(function(){for(var i=0; i < elemento_A_Animar.length;i++){elemento_A_Animar[i].style.display="none";}}
				,this.duracion);
							}

				if(this.nombre[i]== 'fadeout')
						{

						elemento_A_Animar[i].animate([
						  // keyframes
								  {  opacity: 1 ,transform: 'translateY(0px)',}, 
								  { opacity: 0,transform: 'translateY(10px)',  }
								], { 
								  // timing options
								  duration: this.duracion
								});
						}

			}
		}
}
		

function asignarAnimacion(selector,nombre,duracion, tipoDeAnimacion){
	var animacion= new animationJS(selector,nombre,duracion, tipoDeAnimacion);
	animacion.startAnimation();
}

var objetoAnimado= document.querySelector('.animated-object');
var animateJson={
		selector:[],
		nombre:[]
	}

objetoAnimado.addEventListener('click', function(){
	animateJson.selector=[".animated-object",".animated-object2",".animated-object3",".contenedor"];
	animateJson.nombre=["fadein","fadeout","fadeout","fadeout"];

	asignarAnimacion(animateJson.selector, animateJson.nombre, 1000);
});

document.querySelector('.animated-object2').addEventListener('click', function(){
	animateJson.selector=[".animated-object",".animated-object2",".animated-object3",".contenedor"];
	animateJson.nombre=["fadeout","fadein","fadeout","fadeout"];

	asignarAnimacion(animateJson.selector, animateJson.nombre, 1000);
});

document.querySelector('.animated-object3').addEventListener('click', function(){
	animateJson.selector=[".animated-object",".animated-object2",".animated-object3",".contenedor"];
	animateJson.nombre=["fadeout","fadeout","fadein","fadeout"];

	asignarAnimacion(animateJson.selector, animateJson.nombre, 1000);
});

document.querySelector('.dripple').addEventListener('click', function(){
	animateJson.selector=[".animated-object",".animated-object2",".animated-object3",".contenedor"];
	animateJson.nombre=["fadeout","fadeout","fadeout","fadein"];

	asignarAnimacion(animateJson.selector, animateJson.nombre, 1000);
});
