{
    //constraints
    const addCourseToStudent = <T extends{
        name:string;
        email:string}>(student: T) => {
        const course = 'Next Level';
        return {
            ...student,
            course
        }
    }
    const student3 = addCourseToStudent({id: 444, name: 'mr z', email : 'z@gmail.com', emni: "akjdjkda" });
    const student1 = addCourseToStudent({ name: 'mr x', email: 'x@gmail.com', devType: 'next' })
    const student2 = addCourseToStudent({ name: 'mr y', email: 'y@gmail.com', hasWatch: 'Apple Watch' })


    //
}