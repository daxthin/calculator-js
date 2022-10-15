let displayText = document.getElementById("displayText");
let keys = document.querySelectorAll(".key");


let entry = "10";
let awnsered = 0;

// const operators = /[$&+,:;=?@#|'<>.^*()%!-]/;
// && keys[i].getAttribute("data-key") != operators

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", () => {

        if (keys[i].getAttribute("data-key") === "ce") {
            entry = "";
            displayText.textContent = "";
            awnsered = 0;
        }
        else {

            if (awnsered === 1 && keys[i].getAttribute("data-key") != "=") {
                entry = "";
                displayText.textContent = "";
                awnsered = 0;
                console.log("sasss");
            }
    
    
            entry += keys[i].getAttribute("data-key");
            displayText.textContent += keys[i].getAttribute("data-key");
    
    
            if (keys[i].getAttribute("data-key") === '=') {
                displayText.textContent = eval(entry.replace("=", ""));
    
                console.log(eval(entry.replace("=", "")));
    
            }
        }





    })
}


