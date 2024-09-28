{
    type Student =
        {
            name: string,
            age: number,
            gender: string,
            contactNo?: string,
            address: string
        }
    const student: Student = {
        name: 'Bipu',
        age: 26,
        gender: 'Male',
        contactNo: 'kalachandpur',
        address: 'gulshan'
    }

    const student2: Student= {
        name: 'mir',
        age: 40,
        gender: 'mane',
        address: 'dhaka',
    }
    const student3: Student = {
        name: 'mir',
        age: 40,
        gender: 'mane',
        address: 'dhaka',
    }

    type user = string
    type age = number
    const username : user = 'Bipu'
    const age : age = 12;

    type Add = (nunm1: number, num2: number ) => number;

    const add: Add = (number1, number2) => number1 + number2;
}