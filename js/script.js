const newTodo = document.getElementsByClassName(".form-control");
const addTo = document.getElementById("addButton");
const clearBtn = document.getElementById("clearButton");
const todoList = document.getElementsByClassName("todoList");

// creatElement new element yaratish
// console.log(document.querySelector(".form-control").textContent);

clearBtn.addEventListener("click", () => {
  document.getElementById("todoList").textContent = "";
});

addTo.addEventListener("click", () => {
  const li = document.createElement("li");
  const p = document.querySelector(".form-control").textContent;
  li.style.background = "rgb(236, 236, 236)";
  li.style.display = "flex";
  li.style.justifyContent = "center";
  li.style.alignItems = "center";
  li.style.padding = "20px";
  li.style.marginTop = "10px";
  li.style.opacity = 1;

  const user = document.querySelector(".form-control").value;
  if (user == "") return;
  else {
    const html = `
    <p style="font-weight: 600;margin: 0; class="paragrf";>${user}</p>
    <div style="display:flex;gap:15px">
        <button class="btn btn-primary edit">Edit</button>
        <button class="btn btn-success">Complete</button>
        <button class="btn btn-danger funkdale">Delete</button>
    </div>
    `;

    li.insertAdjacentHTML("afterbegin", html);
    document.getElementById("todoList").prepend(li);

    const daleac = document.querySelector(".funkdale");
    const edit = document.querySelector(".edit");
    const complit = document.querySelector(".btn-success");
    const paragrf = document.querySelector(".paragrf");
    document.querySelector(".form-control").value = "";

    daleac.addEventListener("click", () => {
      if (li.style.opacity == 1) {
        li.remove(this);
      }
    });

    document.getElementById("todoList").querySelector("p").style.opacity=1;
    complit.addEventListener("click", () => {
      if (document.getElementById("todoList").querySelector("p").style.opacity ==1) {
        document.getElementById("todoList").querySelector("p").style.opacity =0.5;
      } else if (document.getElementById("todoList").querySelector("p").style.opacity ==0.5) {
        document.getElementById("todoList").querySelector("p").style.opacity =1;
      }
    });

    let edittext = false;
    edit.addEventListener("click", () => {
      edittext = !edittext;
      if (!edittext) {
        const input = document.createElement("input");
        input.style.width = "50%";
        input.value = document
          .getElementById("todoList")
          .querySelector("p").textContent;

        document.getElementById("todoList").querySelector("p").style.display = "none";
        complit.style.display = "none";

        edit.textContent = "OK";
        daleac.textContent = "Cencel";
        li.prepend(input);
      } else {
        const input = li.querySelector("input");
        document.getElementById("todoList").querySelector("p").textContent =
          input.value;

        input.style.display = "none";
        document.getElementById("todoList").querySelector("p").style.display =
          "block";
        complit.style.display = "inline-block";

        edit.textContent = "Edit";
        daleac.textContent = "Delete";
      }
    });
  }
});
