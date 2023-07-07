// FUNCTION
function randomRotateNow (element, selector){
    element.querySelectorAll(selector + ' *:not(.norotate)').forEach((e)=>{
        // e.style.transform='rotation('+*42+'deg);';
        const AMP = 2 // deg
        const PRECISION = 100
        let angle = Math.random() * AMP - AMP/2;
        angle = Math.round(angle*PRECISION)/PRECISION
        e.style.transform="rotate("+angle+"deg)";
        console.log(e)
      });      
}




// PAGED JS HANDLER
if(typeof Paged !== 'undefined'){

class randomRotate extends Paged.Handler {
// this let us call the methods from the the chunker, the polisher and the caller for the rest of the script
constructor(chunker, polisher, caller) {
super(chunker, polisher, caller);
}

afterParsed(content) {
//   Before the content is parsed by Paged.js, please do the follwing:
    randomRotateNow(content, '.feuille')
}
}

// and we don’t forget to register the handler like this

Paged.registerHandlers(randomRotate);


}
