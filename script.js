let nMove= document.querySelectorAll(".next");
let step= document.querySelectorAll(".step");
let formStep= document.querySelectorAll(".form-step");
let pMove= document.querySelectorAll(".prev");
let inp= document.querySelectorAll("input");


// let index= 0;
// nMove.forEach(function(nbtn){
//     nbtn.addEventListener("click", function(){
//     index++;
//     function updateStep(index){
//         formStep.forEach(function(item){
//             item.classList.remove("active");
//             // item.inp.required= false;
//         })
//         step.forEach(function(item){
//             item.classList.remove("active");
//         })
//         inp.forEach(function(item){
//             item.required= false;
//         })
//     }
//     updateStep(index);
//     formStep[index].classList.add("active");
//     step[index].classList.add("active");
//     inp[index].required= true;
// })
// })

// pMove.forEach(function(pbtn){
//     pbtn.addEventListener("click", function(){
//     index--;
//     function updateStep(index){
//         formStep.forEach(function(item){
//             item.classList.remove("active");
//         })
//         step.forEach(function(item){
//             item.classList.remove("active");
//         })
//         inp.forEach(function(item){
//             item.required= false;
//         })
//     }
//     updateStep(index);
//     formStep[index].classList.add("active");
//     step[index].classList.add("active");
//     inp[index].required= true;

// })
// })

let index= 0;

nMove.forEach(function(nbtn){
    nbtn.addEventListener("click", function(){
        //selcting for that state jispe abhi index applied hai
        let inputs= formStep[index].querySelectorAll("input");

        let valid= true;
        inputs.forEach(function(inp){
            // checks whether filled or not
            if(inp.value=== ""){
                valid= false;
                inp.classList.add("error");
                
            }else{
                inp.classList.remove("error")
            }
        });
        //what to do if not filled
        if(valid=== false){
            return;
        }

        //increasing index
        if(index< formStep.length - 1){
            console.log(index);
            index++;
        }

        updateStep();
    })
})

pMove.forEach(function(pbtn){
    pbtn.addEventListener("click", function(){
        if(index> 0){
            index--;
        }
        updateStep();
    })
})

function updateStep(){
    formStep.forEach(function(item){
        item.classList.remove("active");
    })
    step.forEach(function(item){
        item.classList.remove("active");
    })
    formStep[index].classList.add("active");
    step[index].classList.add("active");
}

let form= document.querySelector("form");
form.addEventListener("submit", function(dets){
    dets.preventDefault();
})