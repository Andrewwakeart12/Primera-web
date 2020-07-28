//clase que integra animaciones
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
							setTimeout(function(){for(var i=0; i < elemento_A_Animar.length;i++){var elChild=elemento_A_Animar[i];var parent= elChild.parentNode; parent.removeChild(elChild)}}
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
						if(this.nombre[i]== 'fadeinIn')
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

//clase para elementos estandarizados que deben mostrarse en respuesta a una accion
class creacionDeElemento{
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
				<h1>hola soy un modal</h1>
			</div>
			<img src="${this.src[0]}" alt="">
		
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas amet labore ad, sunt asperiores corporis ipsa, a alias ea et.</p>
			</div>
			`;
			div.style.display="initial";
			document.querySelector('.container').appendChild(div);
			
			console.log('se crea');
			var animateJson={
			selector:[],
			nombre:[]
	}
			animateJson.selector=[".modal-content"];
			animateJson.nombre=["fadeinIn"];
			asignarAnimacion(animateJson.selector, animateJson.nombre, 1000);
		}
	}
}








		

function asignarAnimacion(selector,nombre,duracion, tipoDeAnimacion){
	var animacion= new animationJS(selector,nombre,duracion, tipoDeAnimacion);
	animacion.startAnimation();
}

var animateJson={
		selector:[],
		nombre:[]
	}



function configurarBan(){

var ban=document.querySelectorAll('.ban');
var img=document.querySelectorAll('.img');
for(var i=0; i < img.length;i++){
	var imgWidth= img[i].width;
	var imgHeight= img[i].height;

	ban[i].style.height=imgHeight +"px";
	ban[i].style.width=imgWidth +"px";
}


}
var img=document.querySelectorAll('.contenedor');
for(var v =0; v< img.length; v++){
	img[v].addEventListener('mouseenter',function(){
	var img=document.querySelectorAll('.img');

for(var i=0; i< img.length ; i++){

	var imgWidth= img[i].width;
	var imgHeight= img[i].height;
	imgfv=imgHeight/2 - 20;
	imgfvf=imgHeight/2;
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

//modal, configuracion del boton, animaciones y desactivacion
function dissmiaseModal(){

	animateJson.selector=[".modal-content"];
	animateJson.nombre=["fadeout"];
	asignarAnimacion(animateJson.selector, animateJson.nombre, 1000);
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