const total=document.getElementById("total")
const calculateBtn=document.getElementById("calculateBtn")
const againBtn=document.getElementById("enterAgainBtn")
let bill=document.getElementById("bill")
const percentage=document.getElementById("percentage")


calculateBtn.addEventListener("click",function(){
const billInput=bill.value
const percentageInput=percentage.value
if(billInput||percentage<=0){
    document.querySelector(".error").style.display = "block"
   againBtn.style.display="block"


   againBtn.addEventListener("click", function(){
    againBtn.style.display="none"
    document.querySelector(".error").style.display = "none"
    bill.value=""
   })
}
total.innerText='$ '+billInput*percentageInput/100
   
})
