
const userName =document.getElementById("name");
const country=document.getElementById("country");
const yearOfBrith=document.getElementById("year");
const form=document.getElementById("user-form");
const messegeContent=document.getElementById("message-content");
const currentYear = new Date().getFullYear();
console.Logs(`Das Jahr ist `);

// const consoleLogs= () => {console.log("hallo java");

//     console.log(`Das Jahr ist ${currentYear}.Hurraaa!`);
//     consoleLogs();

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(`Name: ${userName.value}`);
    console.log(`country: ${country.value}`);
    console.log(`country: ${country.value}`);
});