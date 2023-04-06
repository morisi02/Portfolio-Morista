
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

