const popupBtn = document.querySelector(".popup-modal"),
container = document.querySelector(".container"),
closePopup = document.querySelector(".close"),
field = document.querySelector(".field"),
input = document.querySelector("input"),
copyBtn = document.querySelector(".field button");

popupBtn.addEventListener("click",()=>{
    container.classList.add("show");
})

closePopup.addEventListener("click",()=>{
    if(container.classList.contains("show")){
        container.classList.remove("show");
    };
})
copyBtn.addEventListener("click",()=>{  
    field.classList.add("active");
    input.select();
    if(document.execCommand("copy")){
        copyBtn.innerText = "Copied";
        setTimeout(() => {
            field.classList.remove("active");
            copyBtn.innerText = "Copy";
            window.getSelection().removeAllRanges();
        }, 2000);
    }
})