{
    //object destructuring 
    const user = {
        id: 138723,
        name: {
            first_name: 'Fajla',
            middleName: 'nai',
            lastname: 'Rabby'
        },
        contact: '01987232368',
        addres: 'kalachandpur'
    }

    const { contact, name: { middleName: midname } } = user;

    //array destructuring
    const array = ['shs', 'kljasfhif', 'sfkjhsd', 'sjhff', 'sdihsd'];
    const [,,bestfriend, ...rest ] = array;
}