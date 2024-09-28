{
    //generic type

    type GenericArray<T> = Array<T>
    // const rollNumbers : number[] = [1,2,3];
    const rollNumbers : GenericArray<number> = [1,2,3];

    const mentors : GenericArray<string> = ['1jh1','sdjd', 'sfkjhsf'];

    const boolarray: GenericArray<boolean> = [true, false, true];

    const user: GenericArray<{name: string, age: number}> = [
        {
            name: "Bipu",
            age : 13
        },
        {
            name: "Bipu",
            age : 13
        }
    ]

    const add =(x:number, y:number) => x+y

    add(30, 20);

    //generic tupple

    type GenericTupple<x,y> = [x, y]
    const Manus : GenericTupple<string, string> = ['mr x', 'mr t']

    const UserWithID: GenericTupple<number, {name:string, email:string}> = [1, {name: 'na', email: '@gmail.com'}]
}