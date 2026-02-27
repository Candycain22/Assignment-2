// select image element
const img = document.getElementById('images');
// listen for the click event
// toggle variable
let toggle = true;
img.addEventListener ('click', function(){
    //  toggle
    toggle = !toggle;
    if(toggle){
        img.src = 'HTML/images/punkplanetzine.jpg';
    }else{
         img.src = 'HTML/images/punkplanetgreen.jpg';
    }
    })




 