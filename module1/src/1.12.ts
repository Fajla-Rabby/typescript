{
    //nullable types
    const searchTypes = (value: string | null) => {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("there is nothing to search");
        }
    }
    searchTypes(null);

    //unknown types
    const getSpeedMeterPerSecond = (value: unknown) => {
        if (typeof value === "number") {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`speed is ${convertedSpeed} m^-1`);
        }
        else if (typeof value === "string") {
            const [result, unit] = value.split(" ");
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`speed is ${convertedSpeed} m^-1`);

        }
        else {
            console.log("wrong input");

        }
    }
    getSpeedMeterPerSecond(null)

    //never

    const neverr = (msg: string) : never =>
    {
        throw new Error(msg);
    }
    neverr("error hoye geche");
}