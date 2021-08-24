document.addEventListener("DOMContentLoaded", () => {
    App();
});

const App = () => {
    tip();
};

const tip = () => {
   const btns = document.querySelectorAll(".btn__tip");
   btns.forEach(btn => {
       btn.addEventListener('click', e =>{
           e.preventDefault();
           console.log("Click");
       })
   })
}
