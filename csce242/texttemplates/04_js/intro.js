/* const sayHello = () => {
    console.log("Hello World");
}

const btnClickMe = document.getElementById("btn-click-me");
btnClickMe.onclick =sayHello().onclick = sayHello;
*/

document.getElementById("btn-click-me").onclick = () => {
    console.log("Hello World");
};