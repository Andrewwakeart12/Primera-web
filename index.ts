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
	public prefab:string;
	constructor(selector:any,duracion:number,config:string,prefab:string,dA?:dA,interpolacion?:string,keyFrameUno?:keyFrames,keyFrameDos?:keyFrames)
		{
		this.keyframeUno= keyFrameUno;
		this.keyframeDos= keyFrameDos;
		this.selector= selector;
		this.interpolacion = interpolacion;
		this.duracion=duracion;
		this.config= config;
		this.prefab=prefab;
		this.diferentAnimation=dA;
		}

		startAnimation(){
			if(this.config=='individual'){

				if(this.prefab == null){
					const selector = document.querySelector(this.selector);
					selector.animate([this.keyframeUno.propUno,this.keyframeDos.propDos],this.duracion);
				}

				else{
					var elemento_A_Animar = [];

					for(var i=0; i < this.selector.length; i++)
					{
					elemento_A_Animar[i] = document.querySelector(this.selector[i]);
					if(this.prefab=='fadeout'){

						elemento_A_Animar[i].animate([
						  // keyframes
								  {  opacity: 1 ,transform: 'translateY(0px)',}, 
								  { opacity: 0,transform: 'translateY(10px)',  }
								], { 
								  // timing options
								  duration: this.duracion
							
								});
					}if(this.prefab=='fadein'){
							elemento_A_Animar[i].animate([
							  // keyframes
								  {  opacity: 1 ,transform: 'translateY(0px)',}, 
								  { opacity: 0,transform: 'translateY(-10px)',  }
								], { 
								  // timing options
								  duration: this.duracion
								});
							setTimeout(function(){for(var i=0; i < elemento_A_Animar.length;i++){var elChild=elemento_A_Animar[i];var parent= elChild.parentNode; parent.removeChild(elChild)}}
				,this.duracion);
					}
					if(this.prefab=='fadeinIn')
						{
						elemento_A_Animar[i].animate([
						  // keyframes
								  {  opacity: 0 ,transform: 'translateY(10px)',}, 
								  { opacity: 1,transform: 'translateY(0px)',  }
								], { 
								  // timing options
								  duration: this.duracion
								});
						}
					}
				}
				

			}




			else if(this.config=='plural'){
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


class creacionDeElemento{
	public elemento:any;
	public src:any;
	public selector:any;
	constructor(elemento,src,selector){
		this.elemento = elemento;
		this.src= src;
		this.selector= selector;
	}

	crearModal(){
		var div= document.createElement("div");
		if(this.elemento == "modal"){
			var content=document.querySelector(this.selector[0]);
			div.classList.add('modal');
			div.innerHTML=`
				<div class="modal-content">
			<div class="modal-head">
				<div class="closeBtn" onclick="dissmiaseModal()">&times;</div>
				
			</div>
			<img src="${this.src[0]}" class="imgBan" alt="">
			<div class="modal-head">
			<h1>hola soy un modal</h1>
			</div>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas amet labore ad, sunt asperiores corporis ipsa, a alias ea et.</p>
			</div>
			`;
			div.style.display="initial";
			document.querySelector('.container').appendChild(div);
			
			console.log('se crea');
	}
			asignarAnimacion(['.modal-content'],1000,'individual','fadeinIn');
		}
	}


var dm:dA={selector:'',animacion:''};

var interactible=document.querySelectorAll('.dripple')
for (var d= 0; d<interactible.length;d++){
	interactible[d].addEventListener('click',function(e){
		var dm:dA = {
			selector:e.srcElement.parentNode.parentNode,
			animacion:'fadeout'
		}
	var animation= new controladorAnimationPlural(['.row-c'],1000,'plural',null,dm);
	animation.startAnimation();
})
}

//selector:any,duracion:number,config:string,dA?:dA,keyFrameUno?:keyFrames,keyFrameDos?:keyFrames,interpolacion?:string,
//img,tiempo,individual,null,,linear,{},{}




var img=document.querySelectorAll('.contenedor');

for(var v =0; v< img.length; v++)
{
	img[v].addEventListener('mouseenter',function()
	{
			var img=document.querySelectorAll('.img');

		for(var i=0; i< img.length ; i++){

			var imgWidth= img[i].width;
			var imgHeight= img[i].height;
			var imgfv=imgHeight/2 - 20;
			var imgfvf=imgHeight/2;
			var button=document.querySelectorAll(".banB");
			button[i].animate([{  opacity: 0,transform: 'translateY('+ imgfv +'px)'}, 
				{ opacity:1, transform:'translateY(' + imgfvf+ 'px)'}], { 
											  duration:1000
										});
		button[i].style.transform="translateY("+imgHeight/2 +"px)";
		}
	}
	
						);
}


window.addEventListener('load', function(){
	configurarBan();
	document.querySelector('iframe').width="100%";
		document.querySelector('iframe').height="500px";
})
window.addEventListener('resize', function(){
	configurarBan();
})

window.addEventListener('scroll', function(){
	var valorScroll= window.scrollY;

	var navbar=document.querySelector('.navbar');

	if (valorScroll >= 92)
	{
		navbar.classList.add("damn")
	}
	if (valorScroll <= 92)
	{
		navbar.classList.toggle('damn');
	}
})




//selector:any,duracion:number,config:string,dA:dA,interpolacion?:string,keyFrameUno?:keyFrames,keyFrameDos?:keyFrames


//creacion de modal, seleccion y eliminacion
function asignarAnimacion(selector:any,duracion:number,config:string,prefab:string,dA?:dA,interpolacion?:string,keyFrameUno?:keyFrames,keyFrameDos?:keyFrames){
	var animacion= new   controladorAnimationPlural(selector,duracion,config,prefab,dA,interpolacion);
	animacion.startAnimation();
}


function dissmiaseModal(){
	asignarAnimacion([".modal-content"],1000,'individual','fadeout');
	setTimeout(function(){
		var modal=document.querySelector('.modal');
		var parent= modal.parentNode;

		parent.removeChild(modal);
	},1000)
}

function crearModal(elemento,src,selector){
	var CE= new creacionDeElemento(elemento,src,selector);
	CE.crearModal();
}
var animateJson={
		selector:[],
		nombre:[]
	}
function asignarModal(e){
	var img= document.querySelector('#img1');

	elementoModal.elemento=['modal'];
	var srcElement= e.srcElement.parentNode.parentNode.children[1];
	elementoModal.src=[srcElement.src];
	elementoModal.selector=['#img1'];
console.log(srcElement);
	crearModal(elementoModal.elemento,elementoModal.src,elementoModal.selector);
}

var btnBg= document.querySelectorAll('.banB');

		for(var i = 0; i < btnBg.length; i++){
			btnBg[i].addEventListener('click', asignarModal);
		}

			var elementoModal={
				elemento:[],
				src:[],
				selector:[]
			};


//ban
	function configurarBan()
	{

	var ban=document.querySelectorAll('.ban');
	var img=document.querySelectorAll('.img');

	for(var i=0; i < img.length;i++)
		{
		var imgWidth= img[i].width;
		var imgHeight= img[i].height;

		ban[i].style.height=imgHeight +"px";
		ban[i].style.width=imgWidth +"px";
		}
	}

var img=document.querySelectorAll('.contenedor');

for(var v =0; v< img.length; v++)
{
		img[v].addEventListener('mouseenter',function()
	{
		var img=document.querySelectorAll('.img');

	for(var i=0; i< img.length ; i++)
		{

		var imgWidth= img[i].width;
		var imgHeight= img[i].height;
		var imgfv=imgHeight/2 - 20;
		var imgfvf=imgHeight/2;
		var button=document.querySelectorAll(".banB");
		button[i].animate(
				[	{  opacity: 0,transform: 'translateY('+ imgfv +'px)'}, 
					{ opacity:1, transform:'translateY(' + imgfvf+ 'px)'}
				], 
				{ 
					duration:1000
				}
			);
		button[i].style.transform = "translateY("+imgHeight/2 +"px)";
		}
	}
		
	);
}