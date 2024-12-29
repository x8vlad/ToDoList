let result = document.getElementById('result');
let task = document.getElementById('task');
let SelectedList = null;

function Apply() {
    const select = document.getElementById('select');
    let option = select.value;


    result.innerHTML = "";

    if (option == "order") {
        SelectedList = document.createElement("ol"); 
    } else {
        SelectedList = document.createElement("ul"); 
    }

    result.appendChild(SelectedList);
}

function Add() {
    if (SelectedList) {
        const taskText = task.value;

        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        listItem.ondblclick = function(){
            this.remove()
        }

        SelectedList.appendChild(listItem);

        task.value = "";
    }
}

function deletes() {
    if (SelectedList) {
        SelectedList.innerHTML = "";
    }
}
