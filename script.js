//Model
let app = document.getElementById('App')
let listOfRandomCrap = ['Brexit', 'Cheddar Cheese', 'Locomotive','Bird In Motion','Uganda']
let crapGoesHere = ''





//View
updateView();
function updateView(){
    app.innerHTML= /*HTML*/`<div>${crapGoesHere}</div> <button onclick="printList()">Print Random Crap</button>`
}









//Controller
function printList(){
    for (let i = 0; i < listOfRandomCrap.length; i++){
        crapGoesHere += listOfRandomCrap[i];
        console.log(crapGoesHere) 
    }
    updateView();  
   
}







