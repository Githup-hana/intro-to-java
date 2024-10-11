
const userName =document.getElementById("name").value;
const country=document.getElementById("country").value;
const yearOfBrith=document.getElementById("year").value;
const form=document.getElementById("user-form");
const messegeContent=document.getElementById("message-content").textContent;

const consoleLogs= () => {console.log("hallo java")
    console.log(messegeContent);};
    consoleLogs();
form.addEventListener("submit", (event) => {
    event.preventDefault();
    consoleLogs();
});