//script

//texte clignotant
var signe = -1; 
var clignotementFading = function(){ 
   var obj = document.getElementById('LblClignotant'); 
   if (obj.style.opacity >= 0.96){ 
      signe = -1; 
   } 
   if (obj.style.opacity <= 0.04){ 
      signe = 1; 
   } 
   obj.style.opacity = (obj.style.opacity * 1) + (signe * 0.04); 
}; 
// mise en place de l appel de la fonction toutes les 0.030 secondes 
// Pour arrêter le clignotement : clearInterval(periode); 
periode = setInterval(clignotementFading, 30 ); 
// texte clignotant

// compteur
const counter = document.getElementById("counter");
const updateCounter = async () => {
	const data = await fetch('https://api.countapi.xyz/hit/compteur_ecole_pignans/visits')
	const count = await data.json()
	counter.innerHTML = count.value
};
updateCounter();
// compteur



