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
							elemento_A_Animar[i].addEventListener('animationend',function(){

							for (var i=0; i < elemento_A_Animar.length;i++){console.log("howdie")}

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
	animateJson.selector=[".animated-object",".animated-object2",".animated-object3"];
	animateJson.nombre=["fadein","fadeout","fadeout"];
	asignarAnimacion(animateJson.selector, animateJson.nombre, 1000);
});



