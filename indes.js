class animationJS{
	
	constructor(selector,nombre,duracion, tipoDeAnimacion){
		this.selector= selector;
		this.nombre= nombre;
		this.duracion = duracion;
		this.tipoDeAnimacion= tipoDeAnimacion;
	}

	startAnimation(){
		var elemento_A_Animar= document.querySelector(this.selector);

		if(this.nombre== 'fadein'){

		elemento_A_Animar.animate([
		  // keyframes
		  {  opacity: 1 ,transform: 'translateY(0px)',}, 
		  { opacity: 0,transform: 'translateY(-10px)',  }
		], { 
		  // timing options
		  duration: this.duracion
		});
		setTimeout(function(){elemento_A_Animar.style.display="none";}
				,this.duracion);
		}
		if(this.nombre== 'fadeout'){

		elemento_A_Animar.animate([
		  // keyframes
		  {  opacity: 1 ,transform: 'translateY(0px)',}, 
		  { opacity: 0,transform: 'translateY(10px)',  }
		], { 
		  // timing options
		  duration: this.duracion
		});
		setTimeout(function(){elemento_A_Animar.style.display="none";}
				,this.duracion);
		}
	}
}

function asignarAnimacion(selector,nombre,duracion, tipoDeAnimacion){
	var animacion= new animationJS(selector,nombre,duracion, tipoDeAnimacion);
	animacion.startAnimation();
}

var objetoAnimado= document.querySelector('.animated-object');
objetoAnimado.addEventListener('click', function(){
	asignarAnimacion(".animated-object", "fadein", 1000);
	asignarAnimacion(".animated-object2", "fadeout", 1000);
	asignarAnimacion(".animated-object3", "fadeout", 1000);
})

var animatesd= {
	nombre:[document.querySelector('.animated-object')]
}

console.log(animatesd.nombre.length);