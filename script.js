
const colorbutton=document.getElementById("btn");
colorbutton.addEventListener("click",()=>{
    const randomcolor=getRandomColor();
    document.body.style.backgroundColor=randomcolor;
})
const heading_color=document.getElementById("heading");
colorbutton.addEventListener("click",()=>{
    const randomcolor=getRandomColor();
    document.body.style.color=randomcolor;
})

function getRandomColor(){
    const letters="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];
    }
    return color;
}

