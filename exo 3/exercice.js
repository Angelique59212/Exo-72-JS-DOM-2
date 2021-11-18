let name = document.getElementsByClassName("name-tag");

for (let i = 0; i < name.length ; i++) {
    let element = document.createElement("p");
    element.innerHTML = "HELLO WORLD!";
    name[i].append(element);
}









