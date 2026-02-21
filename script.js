let total=document.getElementById("total");
let interviewCount=document.getElementById("interview");
let rejectedCount=document.getElementById("rejected");
let allNumber=document.getElementById("allNumber");
let filterNumber=document.getElementById("count");
let filterText=document.getElementById("filtertext");
const emptyStateHTML = `
<div class="bg-white p-10 rounded mt-4 py-30">
    <div class="flex justify-center">
        <img src="./jobs.png" alt="">   
    </div>
    <div class="flex justify-center mt-4"><h2 class="font-bold">No jobs available</h2></div>
    <div class="flex justify-center"><p class="text-gray-500">Check back soon for new job opportunities</p></div>
</div>`;
let interviewList=[];
let rejectedList=[];
const allCards=document.getElementById("card");
let allFilter=document.getElementById("all-filter");
let interviewFilter=document.getElementById("interview-filter");
let rejectedFilter=document.getElementById("rejected-filter");
console.log(allFilter,interviewFilter,rejectedFilter);
let currentStatus="all";
 const mainContainer=document.querySelector("main");

 const filtered=document.getElementById("filtered");



function count(){
    total.innerText=allCards.children.length;
    interviewCount.innerText=interviewList.length;
    rejectedCount.innerText=rejectedList.length;
    allNumber.innerText=allCards.children.length;
    if (currentStatus === "interview-filter") {
        filterNumber.innerText = interviewList.length;
    } else if (currentStatus === "rejected-filter") {
        filterNumber.innerText = rejectedList.length;
    } 


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
 if(id==="interview-filter"){
    filterText.classList.remove("hidden");
    filterNumber.classList.remove("hidden");
  
    filterNumber.innerText=interviewList.length;
   
    allCards.classList.add("hidden");
    filtered.classList.remove("hidden");
      count();
    renderInterview();
 }
 else if(id==="rejected-filter"){
        filterText.classList.remove("hidden");
    filterNumber.classList.remove("hidden");
  
     filterNumber.innerText=rejectedList.length;
      

    allCards.classList.add("hidden");
    filtered.classList.remove("hidden");
     count();
    renderRejected();
 }
 else if(id==="all-filter"){
     filterNumber.classList.add("hidden");
     filterText.classList.add("hidden");
     allCards.classList.remove("hidden");
    filtered.classList.add("hidden");

 }
 

}

mainContainer.addEventListener("click",(e)=>{
    if(e.target.classList.contains("btn-interview")){
    const parentNode=e.target.parentNode.parentNode;
    const Title=parentNode.querySelector(".name").innerText;
    const Role=parentNode.querySelector(".role").innerText;
    const Details=parentNode.querySelector(".details").innerText;
    const Status=parentNode.querySelector(".status");
    const Notes=parentNode.querySelector(".notes").innerText;
    parentNode.querySelector(".status").classList.remove("bg-blue-50","text-blue-900");
    parentNode.querySelector(".status").classList.add("bg-green-100","text-green-500","border","border-green-500");
    Status.innerText="INTERVIEW";
    const cardsInAll = allCards.getElementsByClassName("cards");
for (let card of cardsInAll) {
    if (card.querySelector(".name").innerText === Title) {
        const allStatus = card.querySelector(".status");
        allStatus.innerText = "INTERVIEW";
        allStatus.classList.remove("bg-blue-50", "text-blue-900", "bg-red-100", "text-red-500", "border-red-500");
        allStatus.classList.add("bg-green-100", "text-green-500", "border", "border-green-500");
    }
}
 const Card={
    Title,
    Role,
    Details,
    Status:"INTERVIEW",
    Notes
 }
 
 const existInterview=interviewList.find((item)=>
    item.Title===Card.Title
 )
 if(!existInterview){
    interviewList.push(Card);
 }
 rejectedList=rejectedList.filter(item=>item.Title!=Card.Title);
 count();
 if(currentStatus==="rejected-filter"){
    renderRejected();
 }

   



}
else if(e.target.classList.contains("btn-rejected")){
    const parentNode=e.target.parentNode.parentNode;
    const Title=parentNode.querySelector(".name").innerText;
    const Role=parentNode.querySelector(".role").innerText;
    const Details=parentNode.querySelector(".details").innerText;
    const Status=parentNode.querySelector(".status");
    const Notes=parentNode.querySelector(".notes").innerText;
    parentNode.querySelector(".status").classList.remove("bg-blue-50","text-blue-900");
    parentNode.querySelector(".status").classList.add("bg-red-100","text-red-500","border","border-red-500");
    Status.innerText="REJECTED";
    const cardsInAll = allCards.getElementsByClassName("cards");
for (let card of cardsInAll) {
    if (card.querySelector(".name").innerText === Title) {
        const allStatus = card.querySelector(".status");
        allStatus.innerText = "REJECTED";
        allStatus.classList.remove("bg-blue-50", "text-blue-900", "bg-green-100", "text-green-500", "border-green-500");
        allStatus.classList.add("bg-red-100", "text-red-500", "border", "border-red-500");
    }
}
    
 const Card={
    Title,
    Role,
    Details,
    Status:"REJECTED",
    Notes
 }
 
 const existRejected=rejectedList.find((item)=>
    item.Title===Card.Title
 )
 if(!existRejected){
   rejectedList.push(Card);
 }
 interviewList=interviewList.filter(item=>item.Title!=Card.Title);
 count();
 if(currentStatus==="interview-filter"){
    renderInterview();
 }

}
else if(e.target.closest(".delete-btn")){
   const cardElement = e.target.closest(".cards");

     const Title=cardElement.querySelector(".name").innerText;
     const cardsInAll = allCards.getElementsByClassName("cards");
    for (let card of cardsInAll) {
        if (card.querySelector(".name").innerText === Title) {
            const allStatus = card.querySelector(".status");
            allStatus.innerText = "NOT APPLIED";
            allStatus.classList.remove("bg-green-100", "text-green-500", "border-green-500", "bg-red-100", "text-red-500", "border-red-500", "border");
            allStatus.classList.add("bg-blue-50", "text-blue-900");
        }
    }
    cardElement.remove();
    interviewList=interviewList.filter(item=>item.Title!=Title);
     rejectedList=rejectedList.filter(item=>item.Title!=Title);
count();
 if(currentStatus==="interview-filter"){
    
    renderInterview();
 

}
else if(currentStatus==="rejected-filter"){
   
    renderRejected();
}
}
})


function renderInterview(){
    filtered.innerHTML="";
    if(interviewList.length===0){
        filtered.innerHTML=emptyStateHTML;
        return;
    }
    for( let interview of interviewList){
        let div=document.createElement("div");
        div.className="cards flex justify-between  border-b-gray-200 p-6 my-5  rounded-xl bg-white";
        div.innerHTML=`
          <div class="left space-y-5">
<div >
    <h1 class="text-[18px]  font-bold name text-blue-950">${interview.Title}</h1>
    <p class="role text-gray-500 text-[16px] "  >${interview.Role}</p>
    
    <p class="details text-gray-500 mt-3 text-[16px] ">${interview.Details}</p>

</div>

<div >
    <p class="status text-[14px]   text-green-500 font-semibold py-2 px-3 w-fit rounded bg-green-100 border border-green-500">Interview</p>

<p class="notes mt-2 text-gray-500">${interview.Notes}</p>
</div>
<div class="flex gap-2">
    <button class="btn-interview bg-white text-green-500 border border-b-green-500  p-2 rounded font-semibold text-[13px]">INTERVIEW</button>
    <button class="btn-rejected bg-white text-red-500 border border-b-red-500  p-2 rounded font-semibold text-[13px]">REJECTED</button>
</div>
                </div>
                <div class="right  ">
    <button class=" delete-btn flex items-center justify-center w-10 h-10 rounded-full border border-gray-100 bg-white text-slate-600 shadow-sm hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all duration-200">
        <i class="fa-regular fa-trash-can"></i>
    </button>
</div>
        
        
        `
filtered.appendChild(div);

    }
}
function renderRejected(){
    filtered.innerHTML="";
    if(rejectedList.length===0){
        filtered.innerHTML=emptyStateHTML;
        return;
    }
    for( let rejected of rejectedList){
        let div=document.createElement("div");
        div.className="cards flex justify-between  border-b-gray-200 p-6 my-5  rounded-xl bg-white";
        div.innerHTML=`
          <div class="left space-y-5">
<div >
    <h1 class="text-[18px]  font-bold name text-blue-950">${rejected.Title}</h1>
    <p class="role text-gray-500 text-[16px] "  >${rejected.Role}</p>
    
    <p class="details text-gray-500 mt-3 text-[16px] ">${rejected.Details}</p>

</div>

<div >
    <p class="status text-[14px]   text-red-500 font-semibold py-2 px-3 w-fit rounded bg-red-100 border border-red-500">Rejected</p>

<p class="notes mt-2 text-gray-500">${rejected.Notes}</p>
</div>
<div class="flex gap-2">
    <button class="btn-interview bg-white text-green-500 border border-b-green-500  p-2 rounded font-semibold text-[13px]">INTERVIEW</button>
    <button class="btn-rejected bg-white text-red-500 border border-b-red-500  p-2 rounded font-semibold text-[13px]">REJECTED</button>
</div>
                </div>
                <div class="right  ">
    <button class=" delete-btn flex items-center justify-center w-10 h-10 rounded-full border border-gray-100 bg-white text-slate-600 shadow-sm hover:bg-red-50 hover:text-red-500 hover:border-red-100 transition-all duration-200">
        <i class="fa-regular fa-trash-can"></i>
    </button>
</div>
        `
filtered.appendChild(div);

    }
}