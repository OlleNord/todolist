function add_task() {
    let tasks = document.getElementById("tasks");

    let what = document.getElementById("input").value;

    if (!what) {return;}
    console.log(what);


    let task = document.createElement("div");

    tasks.appendChild(task);
    task.id = "task";
    task.innerHTML = what;

    let removeBtn = document.createElement("button");

    task.appendChild(removeBtn);
    removeBtn.innerHTML = "X";
    removeBtn.id = "removeBtn";

    removeBtn.addEventListener("click", function() {
        task.remove();
    });

    document.getElementById("input").value = "";
}