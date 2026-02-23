// User interactiion

// handling elements
    // read Element
    let ele = document.querySelector('p');
    console.log(ele.textContent);
    //Add an event
    let button = document.querySelector('button');
    button.addEventListener("click", () => {
        ele.textContent = "Hi";
        ele.style.color = "red";
        ele.style.fontSize = "30px";
    });

    let form = document.querySelector('form');
    let uname = document.querySelector('#name');
    let password = document.querySelector('#password');
    let submit = document.querySelector('#submit');

    