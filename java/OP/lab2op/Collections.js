const phonebook = [
  { name: 'Maria', phone: '+380501234567' },
  { name: 'Gans', phone: '+380507654321' },
];

function findPhoneByName(name) {
  for (const entry of phonebook) {
    if (entry.name === name) {
      return entry.phone;
    }
  }
    return null;
}



const phoneHash = {
  'Maria': '+380501234567',
  'Gans': '+380507654321',
};

function findPhoneByNameHash(name) {
  return phoneHash[name] || null;
}


console.log(findPhoneByName('Maria'));
console.log(findPhoneByName('Gans')); 
console.log(findPhoneByNameHash('Maria'));
console.log(findPhoneByNameHash('Gans')); 