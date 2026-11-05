

function ages(persons) {
    const result = {};
  

    for (const person in persons) {
        const name = person.toLowerCase();
        const age = persons[person].died - persons[person].born;
        result[name] = age;
    }

    return result;
}   

console.log(ages({
    Lenin: {
        born: 1870, died: 1924
    },
    Mao: {
        born: 1893, died: 1976
    },
    Gandhi: {
        born: 1869, died: 1948
    },
    Hirohito: {
        born: 1901, died: 1989
    }
}));
// {
//   lenin: 54,
//   mao: 83,
//   gandhi: 79,
//   hirohito: 88,
// }