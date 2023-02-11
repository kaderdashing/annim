const subtitle = document.querySelector('.subtitle');
setTimeout(() => {
    subtitle.classList.add('show');
}, 2000);

const title = document.querySelector('h1');
const txt = "PORSCHE, SET FREE.";

function typeWriter(word,index){
if (index < word.length) {
setTimeout(() => {
title.innerHTML += `<span>${word[index]}</span>`;
typeWriter(txt, index+1);
}, 300);
}


}
setTimeout(() => {
   typeWriter(txt,0) ;
}, 500);


const downArrow = document.querySelector('.down-arrow');
const target= document.querySelector('.main-container');

setTimeout(() => {
    downArrow.classList.add('showDownArrow');
},1000 );

downArrow.addEventListener("click",scrollInto);
 function scrollInto () {
target.scrollIntoView({ behavior:"smooth"});
 }
 
 
 const observer= new IntersectionObserver((entrie)=>{
    entrie.forEach(entry=>{
    
    if (entry.isIntersecting) {
    
      entry.target.animate([
         {transform:'translateY(-3px)', opacity:0},
         {transform:'translateY(0px)', opacity:1}
    
      ],{
        duration:1000
  
      });
      observer.unobserve(entry.target);
    }
    })
    })
    
const mainContainer = document.querySelector('.first');
const discoverChild = mainContainer.querySelectorAll('*');

discoverChild.forEach(element=>{observer.observe(element);})

const apparitionObserver = new IntersectionObserver((entrie)=>{
entrie.forEach((entry)=>{
if (entry.isIntersecting) {
  if (entry.target.classList.contains('panamera')) {
    entry.target.animate([
      {transform:"translateX(200px)", opacity:0},
      {transform:"translateX(0px)", opacity:1}
  
    ],{
      duration:1000
    })
  } 
  else{
  entry.target.animate([
    {transform:"translateX(-50px)", opacity:0},
    {transform:"translateX(0px)", opacity:1}

  ],{
    duration:1000
  })

}
apparitionObserver.unobserve(entry.target);
}
})

}) 
const sectionApparition = document.querySelector('.section-apparition');
const appartionchildes = sectionApparition.querySelectorAll('*');
appartionchildes.forEach(element=>apparitionObserver.observe(element) );