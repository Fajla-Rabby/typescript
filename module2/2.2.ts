{
    //interface
    type User1 ={
        name: string;
        age: number
    }

    interface User2 {
        name: string;
        age: number
    }

    type UserWithhRole1 = User1 & {role: string}

    interface UserWithhRole2 extends User1 {
        role: string
    }

    const user1: UserWithhRole2 = {
        name: "Bipu",
        age: 100,
        role: "maneger"
    };

    //js ---> object , array ---> object, function ---> object

    type Roll1 = number [];

    interface Roll2{
        [index : number] : number
    }

    const rollnumber1: Roll1 = [1,2,3]    

    type AddType = (num1:number, num2:number)=> number
    interface AddInterface {
        (num1: number, num2: number) : number
    }

    const add: AddInterface = (num1, num2) => num1 + num2;
}