var elements = document.getElementsByTagName('input');
for (var iCount = 0; iCount < elements.length; iCount++){
    try {
        if (elements[iCount].type.toLowerCase()==='hidden'){
            elements[iCount].type = 'text';
            elements[iCount].setAttribute('data-spy-type', 'hidden');
        } else if ((elements[iCount].type==='text') && (elements[iCount].getAttribute('data-spy-type')==='hidden')){
            elements[iCount].type = 'hidden';
        }
    } catch(err){
        console.log(err.message);
    }
}