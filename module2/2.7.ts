{
    //generic constant with keyof operator
    type Vehicle ={
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "bike" | "car" | "ship"; // manually

    const getPropertyValue =<X, Y extends keyof X> (obj : X, key: Y) =>
    {
        return obj[key];
    }

    const user = {
        name: "Bipu",
        age: 26,
        address: "Gulshan"
    }

    const car = {
        Model: "Toyota 100",
        Year: 2006,
    };

    const result = getPropertyValue(car, "Model");


    //
}