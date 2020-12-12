function pass() {

    const rbs = document.querySelectorAll('input[name="yesno"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }


    let first_animal = document.getElementById("first_animal_name");
    let second_animal = document.getElementById("second_animal_name");
    let third_animal = document.getElementById("third_animal_name");
    let adjective = document.getElementById("adjective");
    let verb = document.getElementById("verb");
    let number = document.getElementById("num")
        //let yes_no = document.getElementById("decision");
    let speed = document.getElementById("spd");
    let quote = document.getElementById("quot");
    let message = document.getElementById("mess");

    localStorage.setItem("animal1", first_animal.value);
    localStorage.setItem("animal2", second_animal.value);
    localStorage.setItem("animal3", third_animal.value);
    localStorage.setItem("adjective", adjective.value);
    localStorage.setItem("verb", verb.value);
    localStorage.setItem("number", number.value);
    localStorage.setItem("yesno", selectedValue);
    localStorage.setItem("speed", speed.value);
    localStorage.setItem("quote", quote.value);
    localStorage.setItem("message", message.value);


}

document.getElementById("third").innerHTML = localStorage.getItem("animal3");
document.getElementById("yes").innerHTML = localStorage.getItem("yesno");
document.getElementById("adjective").innerHTML = localStorage.getItem("adjective");
document.getElementById("quote").innerHTML = localStorage.getItem("quote");
document.getElementById("number").innerHTML = localStorage.getItem("number");
document.getElementById("speed").innerHTML = localStorage.getItem("speed");
document.getElementById("message").innerHTML = localStorage.getItem("message");


var elements = document.querySelectorAll('[id="first"]');
console.log(elements);
for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = localStorage.getItem("animal1");
}

var elements = document.querySelectorAll('[id="second"]');
console.log(elements);
for (var i = 0; i < elements.length; i++) {
    elements[i].innerHTML = localStorage.getItem("animal2");
}

var elemen = document.querySelectorAll('[id="verb"]');
console.log(elements);
for (var i = 0; i < elemen.length; i++) {
    elemen[i].innerHTML = localStorage.getItem("verb");
}