
let btn = document.getElementsByClassName("btn");
let banner = document.getElementById("banner");

btn[0].onclick = () =>{
    banner.src = "/images/pic1.png";
    banner.classList.add("zoom");
    animation();
    btn[0].classList.add("active");
}

btn[1].onclick = () =>{
    banner.src = "/images/pic2.png";
    banner.classList.add("zoom");
    animation();
    btn[1].classList.add("active");
    console.log(btn + "is aded");
}

btn[2].onclick = () =>{
    banner.src = "/images/pic3.png";
    banner.classList.add("zoom");
    animation();
    btn[2].classList.add("active");
    
}

function animation(){
    for(bt of btn){
        bt.classList.remove("active");
        console.log(bt + "is removed");
    }
    setTimeout( ()=>{
        banner.classList.remove("zoom");
    },500)
    
}