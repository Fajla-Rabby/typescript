{
    //function with generics
    const createArray = (param: string): string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const result1 = createArray('Bangladesh')
    const resGeneric = createArrayWithGeneric<string>('true')

    type User = { id: number; name: string }

    const resGenericObj = createArrayWithGeneric<User>({ id: 222, name: 'Bipu' })


    const createArrayWithTuple = <T, Q>(param1: T, param2: Q) :[T, Q] => {
        return [param1, param2]
    }

    const res10 = createArrayWithTuple<string, number>('Bangladesh', 222)
    const res11 = createArrayWithTuple<string, {name:string}>('true', {name: 'Asia'});

    const addCourseToStudent = <T>(student: T) =>
    {
        const course = 'Next Level';
        return  {
            ...student,
            course
        }
    }
    const student1 = addCourseToStudent({name: 'mr x', email: 'x@gmail.com', devType: 'next'})
    const student2 = addCourseToStudent({name: 'mr y', email: 'y@gmail.com', hasWatch:'Apple Watch'})
}