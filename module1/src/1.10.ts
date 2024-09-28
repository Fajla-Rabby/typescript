{
    //union types
    // type Frontendeveloper = 'fakibazdeveloper' | 'juniordeveloper';
    // type FullStackDeveloper = 'frontendeveloper' | 'expertdeveloper';

    // type Developer = Frontendeveloper | FullStackDeveloper


    // const developer : Frontendeveloper = 'fakibazdeveloper'

    type User = {
        name?: string,
        age?: number,
        gender: 'male' | 'female',
        bloodGroup: 'A+' | 'B+'
    }

    const user1: User ={
        gender: 'male',
        bloodGroup: 'A+'
    }

    //intersection type

    type Frontendeveloper ={
        skill: string[],
        designation: 'FrontEndDeveloper'
    }

    type BackendDeveloper = {
        skill: string[],
        designation2: 'backendeveloper'
    }

    type FullStackDeveloper = Frontendeveloper & BackendDeveloper;

    const fullstackdeveloper: FullStackDeveloper = {
        skill: ['htme', 'express'],
        designation: 'FrontEndDeveloper',
        designation2: 'backendeveloper'
    }
}