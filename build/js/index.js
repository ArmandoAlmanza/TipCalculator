let porcetange=0,dollars=0,number_people=0;document.addEventListener("DOMContentLoaded",()=>{App()});const App=()=>{tip(),bill(),people()},tip=()=>{document.querySelectorAll(".btn__tip").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault(),porcetange=Number(e.target.value)})}),document.getElementById("custom__tip").addEventListener("input",e=>{porcetange=Number(e.target.value)})},bill=()=>{document.getElementById("bill").addEventListener("input",e=>{dollars=Number(e.target.value.trim())})},people=()=>{document.getElementById("people").addEventListener("input",e=>{number_people=Number(e.target.value.trim())}),document.getElementById("people").addEventListener("blur",e=>{result()})},result=()=>{if(0===number_people)console.log("tas mal pa");else if(0===porcetange)console.log("Tas mal pa");else if(0===dollars)console.log("Tas mal pa");else{const e=document.getElementById("amount"),t=document.getElementById("total");let l=dollars/porcetange*100,n=l.toFixed(2)/number_people;e.innerText=l.toFixed(2),t.innerText=n.toFixed(2)}};
//# sourceMappingURL=index.js.map
