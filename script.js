const  elList = document.querySelector(".list");
const elForm = document.querySelector("form");
const elMessage = document.querySelector(".message");

let todos = [];


elForm.addEventListener("submit", (e)=> {
    e.preventDefault();

    const inputValue = elForm["todo"].value.trim();

if(!inputValue) return (elMessage.textContent = "maydonni toldiring");


elMessage.textContent = "";

 const item = {
        inputValue : inputValue,
        date:"12.12.2012",
        complated : false,
    };


    todos.push(item);
    showData(todos);
    elForm.reset();
});


function showData(todos){
    elList.innerHTML = "";
    todos.forEach((item, index)  => {
        elList.innerHTML +=`
         <li>
                    <p class="todo-text">${item.inputValue}</p>
                    <div>
                        <div>
                        <i class="ri-calendar-todo-line"></i>
                        ${item.date}
                       
                        </div>
                        <i class="ri-pencil-line"></i>
                        <i class="ri-delete-bin-line" onclick="deleteItem(${index})" ></i>
                    </div>
                </li>
        `;
    });
}


function deleteItem(index) {
    todos = todos.filter((item, i) => {
        return i !== index;
});

showData(todos);
}




