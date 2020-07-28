class controladorAnimation{
	constructor(selector,keyFrameUno,keyframeDos,duration,config,){
		this.selector=selector;
		this.keyframeUno= keyFrameUno;
		this.keyframeDos= keyFrameUno;
		this.duration=duration;
		this.config= config;
		this.diferentAnimation=dA;

	}

}
class controladorAnimationPlural{
	constructor(selector,tipo,interpolacion,duracion,config,dA)
		{
		this.selector= selector;
		this.tipo= tipo;
		this.interpolacion = interpolacion;
		this.duracion=duracion;
		this.config= config;
		this.diferentAnimation=dA;
		}

		startAnimation(){
			if(this.config=='individual'){
				const selector = document.querySelector(this.selector);

				selector.animate([this.keyFrameUno,this.keyframeDos],this.duration);

			}else if(this.config=='plural'){
				if(this.diferentAnimation !== null){
					if(this.diferentAnimation.animation == 'fadeout'){
						this.diferentAnimation.selector.animate([
 								{  opacity: 1 ,transform: 'translateY(0px)'}, 
								  { opacity: 0,transform: 'translateY(-10px)'  }]
								
							,this.duracion);
					}
				}
				var selectors= [];
				for (var i=0; i < this.selector.length;i++)
				{
					selectors[i] = document.querySelectorAll(this.selector[i]);
					var subSelector= [];

					for( var e= 0; e < selectors[i].length ; e++){

						subSelector[e]= selectors[i][e];

						if(subSelector[e] !== this.diferentAnimation.selector){
							subSelector[e].animate([
						  // keyframes
								  {  opacity: 1 ,transform: 'translateY(0px)'}, 
								  { opacity: 0,transform: 'translateY(10px)'  }
								], { 
								  // timing options
								  duration: this.duracion
							
								});
					
						
					}
						
						}
						
				}
				setTimeout(function(){for(var h=0; h < subSelector.length;h++){var elChild=subSelector[h];var parent= elChild.parentNode; parent.removeChild(elChild)} console.log(elChild)}
						,this.duracion);
			}
		}
}

var dA={
	selector:'',
	animation:''
}

var interactible=document.querySelectorAll('.dripple')
for (var d= 0; d<interactible.length;d++){
	interactible[d].addEventListener('click',function(e){
		console.log(e.srcElement);
		dA.selector=e.srcElement.parentNode.parentNode;
		dA.animation="fadeout";

	var animation= new controladorAnimationPlural(['.row-c'],'fadein','linear',1000,'plural',dA);
	animation.startAnimation();
})
}
