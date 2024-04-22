//your JS code here. If required.
const inps = document.querySelectorAll('.code');
inps[0].focus();

inps.forEach((inp , index) => {
    inp.addEventListener("input",() => {
        if(inp.value.length === 1 && index < inps.length -1){
            inps[index+1].focus();
        }

    })


    inp.addEventListener("keydown", (event) =>{
        if(event.key === "Backspace" && index > 0) {
            inps[index].value = '';
            inps[index-1].focus();
        }
    })
});
