const DOM = function () {
    return {
        searchInput: document.getElementById("searchInput"),
        suggest: document.getElementById("displaySuggestions")
    }
}();


let words = ["scream", "scream2", "men in black", "men in black2", "kill bill", "the exorcist"];

let newObj = {};

const clear = () => { DOM.suggest.innerHTML = ""; }

Array.prototype.toObj = function () {

    for (i = 0; i < this.length; i++) {

        let keysArr = Object.keys(newObj);
        if (keysArr.includes(this[i][0]) === false) {
            newObj[(this[i][0])] = new Array;
        }

        newObj[(this[i][0])].push(this[i]);
    }

    return newObj;
}

words.toObj();
console.log(newObj);


DOM.searchInput.addEventListener('input', () => {

    if (DOM.searchInput.value.length < 4) {
        clear();
        let a = DOM.searchInput.value[0];
        if (a in newObj) {
            newObj[a].forEach(ele => {
                let div = document.createElement("div");
                let sug = document.createElement("span");
                div.classList.add("suggestion");
                sug.innerHTML = ele;
                div.addEventListener('click',()=>{
                    DOM.searchInput.value = sug.innerText;
                })
                div.appendChild(sug);
                DOM.suggest.appendChild(div);
            });


        }

    }else{
        clear();
    }
   

})
