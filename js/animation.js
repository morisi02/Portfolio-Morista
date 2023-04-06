
const observer= new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
           entry.target.classList.add('show');
        }
    });
});

const hiddenElement= document.querySelectorAll('.hidden');

hiddenElement.forEach((el) => observer.observe(el));


/***********WORKS FOTO */
const observerFoto= new IntersectionObserver((entries) =>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
           entry.target.classList.add('showFoto');
        }
    });
});

const hiddenElementFoto= document.querySelectorAll('.showed');

hiddenElementFoto.forEach((el) => observerFoto.observe(el));


/***** CLOUDINARY CDN */

// Or use require() in node

// Or use type===module in package.json

import {Cloudinary} from '@cloudinary/url-gen'
import {Resize} from '@cloudinary/url-gen/actions'



const cldInstance = new Cloudinary({cloud: {cloudName: 'dqoseu6gj'}});



// Fetch images from the web without uploading them

const fetchedImage = cldInstance
  .image('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg')
  .setDeliveryType('fetch');

console.log(fetchedImage.toURL());
// https://res.cloudinary.com/<cloud_name>/image/fetch/https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg




// Transform

const myImage = cldInstance
  .image('https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg')
  .setDeliveryType('fetch')
  .resize(Resize.fill().width(100).height(150))



console.log(myImage.toURL());
// https://res.cloudinary.com/<cloud_name>/image/fetch/c_fill,h_150,w_100/https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg


