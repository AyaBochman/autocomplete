const DOM = function () {
    return {
        searchInput: document.getElementById("searchInput"),
        suggest: document.getElementById("displaySuggestions")
    }
}();


let words = ["scream", "scream2", "men in black", "men in black2", "kill bill", "the exorcist"];

let newObj = {};

Array.prototype.toObj = function () {
   
    for (i = 0; i < this.length; i++) {
  
        let keysArr = Object.keys(newObj);
        if(keysArr.includes(this[i][0]) === false){
            newObj[(this[i][0])] = new Array;
        }
    
        newObj[(this[i][0])].push(this[i]);
    }

    return newObj;
}

words.toObj();
console.log(newObj);
const clear = ()=>{DOM.suggest.innerHTML = "";}

DOM.searchInput.addEventListener('input',()=>{
    if(DOM.searchInput.value.length < 5){
      for(key in newObj){
          if(key == DOM.searchInput.value[0]){
           
                  console.log(newObj[key]);
            
            // let sug = document.createElement("span");
            // sug.classList.add("suggestion");
            // sug.innerHTML = newObj[key] + "<br>";
            // DOM.suggest.appendChild(sug);
            //   console.log(newObj[key])
          }
         
      }
    }
    
})

// function search() {

//     clear();
//     if (DOM.searchInput.value.length < 6) {
//         for (key in letters) {
//             if (key.includes(DOM.searchInput.value[0])) {
//                 letters[key].forEach(function (element) {
//                     let sug = document.createElement("span");
//                     sug.classList.add("suggestion");
//                     sug.innerHTML = element + "<br>";
//                     sug.addEventListener('click', function () {
//                         DOM.searchInput.value = sug.innerText;
//                         clear();
//                     })
//                     DOM.suggest.appendChild(sug);
//                 })

//             }
//         }
//         // if(DOM.searchInput.value.length > 6){
//         //     DOM.suggest.innerHTML = "";
//         // }
//     }



// }

// $("#searchInput").on('input', search);

// clear();
// $("#searchInput").on('keydown', function(){
//     if(DOM.searchInput.value.length > 4){
//         search();
//     }


// })

//what key to define in the object

// function createObj(arr){
//     let Obj = {};

//     for(i=0;i<arr.length;i++){
//         Obj[arr[i][0]] = [arr[i]];
//         // if(arr[i].length > 1){

//         // }
//     }
//     console.log(Obj);
// }

// createObj(words);

// function search(arr) {

//     let obj = {};
//     for (i = 0; i < arr.length; i++) {
//         obj[arr[i]] = arr[i];
//     }

//     let names = Object.keys(obj);
//     $("#searchInput").on('keydown', function () {
//         if (DOM.searchInput.value.length > 4) {
//             if (names.includes(DOM.searchInput.value)) {
//                 console.log(names);
//             }

//         }

//     })

//     // console.log(Object.keys(obj));
//     // if()
// }

// search(words);


// Object.assign({},words);
// console.log(words);
// $("#searchInput").on("keydown", function () {
//     DOM.suggest.innerHTML = "";
//     if ($("#searchInput").val().length > 3) {

//         let start = 0;
//         let finish = words.length-1;
//         let i = start;
//         while (i < finish) {
//             if (words[i].includes($("#searchInput").val())) {
//                 let sug = document.createElement("span");
//                 sug.innerHTML = words[i] + "<br>";
//                 DOM.suggest.appendChild(sug);
//                 console.log(i);
//                 console.log(words[i]);
//                 sug.addEventListener("click", function(){
//                    DOM.searchInput.value = sug.innerText;
//                 })
//             }

//             i++;
//         }


//     }
// })

   // console.log(words);
        // for(i=0;i<words.length;i++){
        //     if(words[i].includes($("#searchInput").val())){
        //         let sug = document.createElement("span");
        //         sug.innerHTML = words[i] + "<br>";
        //         DOM.suggest.appendChild(sug);

        //         // console.log(words[i]);
        //     }
        // }