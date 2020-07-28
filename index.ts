interface dA{
	selector:any;
	animacion:string;
}

interface keyFrames{
	propUno:{};
	propDos:{};

}
class controladorAnimationPlural{

	public selector:string;
	public keyframeUno:keyFrames;
	public keyframeDos:keyFrames;
	public interpolacion:string;
	public duracion:number;
	public config:string;
	public diferentAnimation:dA;
	constructor(selector:any,duracion:number,config:string,dA:dA,interpolacion?:string,keyFrameUno?:keyFrames,keyFrameDos?:keyFrames)
		{
		this.keyframeUno= keyFrameUno;
		this.keyframeDos= keyFrameDos;
		this.selector= selector;
		this.interpolacion = interpolacion;
		this.duracion=duracion;
		this.config= config;
		this.diferentAnimation=dA;
		}

		startAnimation(){
			if(this.config=='individual'){
				const selector = document.querySelector(this.selector);

				selector.animate([this.keyframeUno.propUno,this.keyframeDos.propDos],this.duracion);

			}else if(this.config=='plural'){
				if(this.diferentAnimation !== null){
					if(this.diferentAnimation.animacion == 'fadeout'){
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
		var selectedAn:dA = {
			selector:e.srcElement.parentNode.parentNode,
			animacion:'fadeout'
		}
	var animation= new controladorAnimationPlural(['.row-c'],1000,'plural',selectedAn,'fadein');
	animation.startAnimation();
})
}

//selector:any,duracion:number,config:string,dA:dA,keyFrameUno?:keyFrames,keyFrameDos?:keyFrames,interpolacion?:string,