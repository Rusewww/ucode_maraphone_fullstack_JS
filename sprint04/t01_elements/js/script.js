let characters = document.getElementById("characters").children;
for (let i = 0; i < characters.length; i++) {let characterClass = characters[i].getAttribute('class');
    if (characterClass !== "good" && characterClass !== "evil" || !characterClass)
        characters[i].className = "unknown"
    let brorde = document.createElement('br')
    characters[i].appendChild(brorde)
    if (characters[i].getAttribute("data-element")) {let characterElement = characters[i].getAttribute("data-element").split(' ')
        for (let j = 0; j < characterElement.length; j++) {let node = document.createElement('div')
            node.setAttribute("class", `elem ${characterElement[j]}`);
            characters[i].appendChild(node)
        }
    } else {let node = document.createElement('div')
        let line = document.createElement('div')
        line.setAttribute("class", `line`);
        node.setAttribute("class", `elem none`);
        node.appendChild(line);
        characters[i].appendChild(node);
    }
}