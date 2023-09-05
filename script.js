let work = document.querySelector("#work-item");
let addBtn = document.querySelector("#addBtn");
let alert = document.querySelector("#alert");
let todo = document.querySelector(".todo");

if (localStorage.getItem("itemNum") === null) {
    localStorage.setItem("itemNum", "0");
}

let userinput = "";

work.onkeyup = function (e) {
    userinput = e.target.value;
}

addBtn.onclick = function () {
    if (userinput.length == 0) {
        alert.innerHTML = `<p>Please enter your work to do.</p>`;
        alert.style.color = "red";
        alert.style.textAlign = "center";
    }
    else {

        alert.innerHTML = ``;


        const item = {
            do: userinput,
            state: '0',
        }

        console.log(item);


        const div = document.createElement("div");
        const p = document.createElement("p");
        let statBtn = document.createElement("button");
        let dltBtn = document.createElement("button");


        p.innerHTML = item.do;
        statBtn.innerHTML = "To-Do";
        statBtn.style.backgroundColor = "yellow";

        dltBtn.innerHTML = "Delete"
        dltBtn.style.backgroundColor = "red";

        div.appendChild(p);
        div.appendChild(statBtn);
        div.appendChild(dltBtn);

        div.style.textAlign = "center"

        todo.appendChild(div);

        let k = parseInt(JSON.parse(localStorage.getItem("itemNum")));

        const itemKey = "item" + `${k++}`;
        localStorage.setItem(itemKey, JSON.stringify(item));
        console.log(k);

        localStorage.setItem("itemNum", JSON.stringify(k));

    }
};


let k = parseInt(JSON.parse(localStorage.getItem("itemNum")));

for (let i = 0; i <= k; i++) {
    const itemKey = "item" + `${i}`;
    if (localStorage.getItem(itemKey) !== null) {

        const data = JSON.parse(localStorage.getItem(itemKey));

        const div = document.createElement("div");
        const p = document.createElement("p");
        let statBtn = document.createElement("button");
        let dltBtn = document.createElement("button");


        p.innerHTML = data.do;
        if (data.state === "0") {
            statBtn.innerHTML = "To-Do";
            statBtn.style.backgroundColor = "yellow";
        }
        else if (data.state === "1") {
            statBtn.innerHTML = "Doing";
            statBtn.style.backgroundColor = "orange";
        }
        else if (data.state === "0") {
            statBtn.innerHTML = "Done";
            statBtn.style.backgroundColor = "green";
        }

        dltBtn.innerHTML = "Delete"
        dltBtn.style.backgroundColor = "red";

        div.appendChild(p);
        div.appendChild(statBtn);
        div.appendChild(dltBtn);

        div.style.textAlign = "center"

        todo.appendChild(div);


        dltBtn.onclick = function () {
            div.innerHTML = "";
            localStorage.removeItem(itemKey)
        }

        statBtn.onclick = function () {

            const data = JSON.parse(localStorage.getItem(itemKey));

            if (data.state === "0") {
                statBtn.innerHTML = "Doing";
                statBtn.style.backgroundColor = "orange";
                data.state = "1";
                localStorage.setItem(itemKey, JSON.stringify(data));
            }
            else if (data.state === "1") {
                statBtn.innerHTML = "Done";
                statBtn.style.backgroundColor = "green";
                data.state = "2";
                localStorage.setItem(itemKey, JSON.stringify(data));
            }
        }
    }
}



