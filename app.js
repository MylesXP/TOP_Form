let pass = document.getElementById('pass');
let confPass = document.getElementById('conf_pass');
let submit = document.getElementsByTagName('button')[0];

submit.addEventListener("click",() => {
    if (!pass.value) {
        pass.classList.add('error');
    } else if(pass.value === confPass.value){
        pass.classList.remove('error')
        console.log("hello");
        
    } else {
        pass.classList.add('error');
    }
})

