const inputBox = document.getElementById("input-Box");
const listContainer = document.getElementById("listContainer");
const currentDatetime = new Date().toLocaleString();
function addTask(){
    if(inputBox.value == '')
    {
        alert("YOU MUST WRITE  SOMETHING")
    }
    else
    {
        const checkBox = document.createElement("input");
        const deleteButton =  document.createElement("button")
        deleteButton.innerText = "DELETE";
        deleteButton.onclick = function(){
                listContainer.removeChild(li)
        }
        checkBox.type = "checkbox";
        let li = document.createElement("li");
        const text = document.createTextNode (` ${inputBox.value} - ${currentDatetime} `);
        li.appendChild(checkBox);
        li.appendChild(text);
        li.appendChild(deleteButton);
        listContainer.appendChild(li);

    }
    inputBox.value = ''
}