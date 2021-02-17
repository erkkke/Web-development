const addButton = document.querySelector('.addButton');
const input = document.getElementById("input");
const list = document.getElementById("list");
const date = document.getElementById("date");
let inputtedItems = [], id = 0;

const options = {weekday: "long", month: "short", day: "numeric"};
const today = new Date();

date.innerHTML = today.toLocaleDateString("en-US", options);

function addToDo(text, id, isDone, trash) {
    if (trash)
        return;

    let checked, line;
    if (isDone) {
        checked = "checked";
        line = "lineThrough";
    }
    else {
        checked = "";
        line = "";
    }

    let item = `<li class="item" id="${id}">
                    <div>
                        <input type="checkbox" class="checkbox" ${checked}>
                        <p class="text ${line}">${text}</p>
                    </div>
                    <button class="removeButton">Remove</button>
                </li>`;
    const position = "beforeend";
    list.insertAdjacentHTML(position, item)
}

// addToDo("hello")

addButton.addEventListener("click", function (){
    let inputValue = input.value;

    if (inputValue)
        addToDo(inputValue, id, false, false);
        inputtedItems.push({
            text: inputValue,
            id: id,
            isDone: false,
            trash: false
        });
    id++;
    input.value = "";
});

list.addEventListener("click", function (event) {
    let element = event.target;

    if (element.classList == "removeButton") {
        removeContent(element);
    }
    else if (element.classList == "checkbox") {
        isCompleted(element);
    }

});

function removeContent(element) {
    element.parentNode.remove();
    inputtedItems[element.id].trash = true;
}

function isCompleted (element) {
    element.parentNode.querySelector(".text").classList.toggle("lineThrough");
}