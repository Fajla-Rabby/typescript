{
    //interface generic

    interface Developer<T, X = null>{
        name: string,
        computer:
        {
            brand: string,
            model: string,
            releaseYear : number
        }
        smartWatch: T;
        bike?: X
    }
    type EmilabWatch= {
        brand: string,
        model: string,
        display: string
    }

    const poorDeveloper: Developer<EmilabWatch> = {
        name: 'Bipu',
        computer:{
            brand: 'Asus',
            model: 'x255',
            releaseYear: 2013
        },
        smartWatch: {
            brand: 'Emilo',
            model: 'kw66',
            display: 'amolade'
        }
    }

    interface AppleWatch{
        brand: string,
        model: string,
        heartRate: boolean,
        sleeptrack: boolean
    }

    interface YamahaBike{
        model: string,
        engineCapacity: string
    }

    const richDeveloper: Developer<AppleWatch, YamahaBike> = {
        name: 'Rich Dev',
        computer:{
            brand: 'HP',
            model: 'sdkjn5',
            releaseYear: 2018
        },
        smartWatch: {
            brand: 'AppleWatch',
            model: '7',
            heartRate: true,
            sleeptrack: true
        },
        bike:{
            model: 'yamaha',
            engineCapacity: '100cc'
        }
    }
}