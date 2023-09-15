const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "17 oct 2023"

function countdown(){
   const datalanc = new Date(lancamento)
   const hoje = new Date()

   const segtotal = (datalanc - hoje)/1000;

   const finaldias = Math.floor(segtotal / 60 / 60 / 24); 
   const finalhr = Math.floor(segtotal / 60 / 60)%24;
   const finalmin = Math.floor(segtotal / 60)%60;
   const finalseg = Math.floor(segtotal)%60;

   dia.innerHTML = finaldias
   hora.innerHTML = formatotempo(finalhr)
   minuto.innerHTML = formatotempo(finalmin)
   segundo.innerHTML = formatotempo(finalseg)

}
function formatotempo(tempo){
  return tempo <10?`0${tempo}`:tempo;

}
countdown();
setInterval(countdown, 1000)