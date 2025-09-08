/*
  <ul id = "todoList">
        <!-- 자. 근데 데이터가 로컬 스토리지에 없다. -->
         <li>주병현 교강사</li>
         <li>오늘 Git 협업 방식</li>
         <li>내용입니다.</li>
    </ul>
*/

const todoList = document.querySelector("#todoList")
// 화살표 함수 대체 => 함수 표현식
const getTodos = function() {
    const todos = JSON.parse(localStorage.getItem("todos")) || false;
    if(!todos) return todoList.innerHTML = "<p>유저 정보가 없다.</p>"

    todos.map((value) => {
        const authorEl = document.createElement("li")
        const titleEl = document.createElement("li")
        const contentEl = document.createElement("li")

        authorEl.textContent = value.author;
        titleEl.textContent = value.title;
        contentEl.textContent = value.content;

        todoList.append(authorEl, titleEl, contentEl);
    })
}

getTodos();