const arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" 
    },
];

const emailRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(?:gmail\.com|yahoo\.com)$/i;
const validEmails = arr.filter(item => emailRegex.test(item.email));

validEmails.forEach(obj => {
    console.log(`UserName: ${obj.userName}, Email: ${obj.email}`);
});
