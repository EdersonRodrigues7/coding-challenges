const prompt = require('prompt-sync')();

const contacts = new Map();
contacts.set('Dedé', 92837465);
contacts.set('Ederson', 7354625);
contacts.set('Chassi', 56352465);
const res = contacts.get('Chassi') ? 'Existe' : 'Não existe';
console.log(res);

// console.log('Welcome to your contacts list! \n 1 - View your contacts \n 2 - add a new contact \n 3 - Exit \n');
// const action = prompt('Please choose an action to proceed:');

// switch (action) {
//   case '1':
//     console.log('Here are your contacts:');
//     console.table(contacts);
//     break;
//   case '2':
//     const newContactName = prompt('Enter the name of the contact:');
//     const newContactNumber = prompt('Enter the number of the contact:');
//     contacts.set(newContactName, Number(newContactNumber));
//     console.log("New contact added successfully!");
//     console.table(contacts);
//     break;
//   default:
//     console.log("Thank you!");
//     break;
// }