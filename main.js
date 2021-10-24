function add_task() {
    let done = false;

    let tasks = document.getElementById("tasks");

    let what = document.getElementById("input").value;

    if (!what) {return;}
    console.log(what);


    let task = document.createElement("div");

    tasks.appendChild(task);
    task.id = "task";
    task.innerHTML = what;

    let removeBtn = document.createElement("button");
    let doneBtn = document.createElement("button");

    task.appendChild(removeBtn);
    task.appendChild(doneBtn);
    removeBtn.innerHTML = "X";
    doneBtn.innerHTML = "✓";
    doneBtn.id = "doneBtn";
    removeBtn.id = "removeBtn";

    removeBtn.addEventListener("click", function() {
        task.remove();
    });

    doneBtn.addEventListener("click", function() {
        if (!done) {
            task.style.backgroundColor = "rgb(38, 235, 0)";
            done = true;
        } else {
            task.style.backgroundColor = "rgb(245, 245, 245)";
        }
        
    });

    document.getElementById("input").value = "";
}
