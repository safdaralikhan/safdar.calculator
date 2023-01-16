let string = ""
let buttons = document.querySelectorAll(".button")

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",(e)=>{

        if(e.target.innerHTML == "="){
            console.log(string)
            string=eval(string)
            document.querySelector("input").value = string

        }
       else if(e.target.innerHTML == "C"){
            console.log(string)
            document.querySelector("input").value = ""
        }
        else{
            console.log(e.target.innerHTML)
            string = string + e.target.innerHTML    
            document.querySelector("input").value=string

        }
    })

})