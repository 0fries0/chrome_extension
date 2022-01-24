


let myLeads = [];


const inputButton = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const uLEl = document.querySelector("#ul-el");
const deleteButton = document.querySelector("#del-btn");
const tabButton = document.querySelector("#tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderLeads(myLeads);
}



tabButton.addEventListener("click", function(){
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // })
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })

    
})


deleteButton.addEventListener("dblclick", function(){
   localStorage.clear();
   myLeads = [];
   renderLeads(myLeads);
})


inputButton.addEventListener("click", function(){

    myLeads.push(inputEl.value);
    inputEl.value = "";  

    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    renderLeads(myLeads);
})


function renderLeads(leadsArray){
    let listItems = "";
    for(let i = 0; i < leadsArray.length; i++){
        listItems += `<li>
                        <a href = "${leadsArray[i]}" target = "_blank">${leadsArray[i]}</a>
                      </li>`;
    }

    uLEl.innerHTML = listItems;
}


