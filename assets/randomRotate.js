// FUNCTION
function randomRotateNow (element, selector){
    element.querySelectorAll(selector + ' *:not(.norotate)').forEach((e)=>{
        // e.style.transform='rotation('+*42+'deg);';
        let amp = 2 // deg
        let angle = Math.random() * amp - amp/2;
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
