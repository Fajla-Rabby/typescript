{
    function add(num1 : number, num2: number = 10): number
{
    return num1 + num2;
}

add(2, 2);

const addArrow = (num1: number, num2: number): number => num1 + num2;

//object er moddhe kono akta function thake setake amra boli method
const poorUser = {
    name: 'Bipu',
    balance: 0,
    addBalance (balance : number): string
    {
        return `my balance is ${this.balance + balance}`;
    }
}

const arr: number[] = [1,2,4];
const newArray: number[] = arr.map((ele : number) : number => ele*ele);
}