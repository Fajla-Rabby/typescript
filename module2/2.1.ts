{
    //

    //type assertion
    const kgTpoGm = (value : string | number) : string | number | undefined =>
    {
        if(typeof value === 'string')
        {
            const result = parseFloat(value) * 1000;
            return `value is ${result}`;
        }
        if(typeof value === 'number')
        {
            return value * 1000;
        }
    }
     const result1 = kgTpoGm(1000) as number
     const result2 = kgTpoGm('1000') as string
     console.log(result1);
     console.log(result2);
     

     type CustomError = {
        message : string
     }

     try{
        
     }
     catch(error)
     {
        console.log((error as CustomError).message );
        
     }
    //
}