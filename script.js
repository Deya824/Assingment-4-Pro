let total=document.getElementById("total");
let interviewCount=document.getElementById("interview");
let rejectedCount=document.getElementById("rejected");
let interviewList=[``];
let rejectedList=[];
const allCards=document.getElementById("card");
let allFilter=document.getElementById("all-filter");
let interviewFilter=document.getElementById("interview-filter");
let rejectedFilter=document.getElementById("rejected-filter");
console.log(allFilter,interviewFilter,rejectedFilter);
let currentStatus="all";
 const mainContainer=document.querySelector("main");

 const filtered=document.getElementById("filterd");



function count(){
    total.innerText=allCards.children.length;
    interviewCount.innerText=interviewList.length;
    rejectedCount.innerText=rejectedList.length;
}
count();
function toggle(id){
    allFilter.classList.remove("bg-blue-400", "text-[13px]", "text-white");
    interviewFilter.classList.remove("bg-blue-400", "text-[13px]", "text-white");
    rejectedFilter.classList.remove("bg-blue-400", "text-[13px]", "text-white");
    allFilter.classList.add("bg-white", "text-[12px]", "text-gray-500");
    interviewFilter.classList.add("bg-white", "text-[12px]", "text-gray-500");
    rejectedFilter.classList.add("bg-white", "text-[12px]", "text-gray-500");
    const selected=document.getElementById(id);
    selected.classList.remove("bg-white", "text-[12px]", "text-gray-500");
    selected.classList.add("bg-blue-400", "text-[13px]", "text-white");
 currentStatus=id;
 

}