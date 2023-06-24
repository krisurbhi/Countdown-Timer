const endDate = "18 october 2023 12:00 AM"
document.getElementById("end-date").innerText = endDate;
const inputs= document.getElementsByTagName("input")
//const inputs= document.querySelectorAll("input")
// const clock =() =>{

//}
function clock(){
    const end= new Date(endDate)
    const now= new Date()
    //console.log(end);
    //console.log(now);
    const diff=(end-now)/1000;;
    if(diff<0)
     return;
    else{
    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff / 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
    }
}
/*setInterval(function (){
   clock()
   },1000)*/
setInterval(
    ()=>{
        clock()
    },1000)
/*.setTimeout() //executes the code after x seconds.
.setInterval() //executes the code **every** x seconds. */