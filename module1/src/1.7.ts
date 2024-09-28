{
    const bros1 : string[] = ["sdjkhdsjh", 'sdjkhd' ,'dsjh'];
    const bros2 : string[] = ["skjd", 'eriuewoi' ,'alsk'];  
    bros1.push(...bros2);

    const mentor1 = {
        prisma: 'sdjhsdjh',
        redux: 'poouy'
    }
    const mentor2 = {
        cloude: 'slsl',
        typescript: 'pfdfuy'
    }

    const mentorList ={
        ...mentor1,
        ...mentor2
    }

    // learn rest operator
    const greetFriends = (...friends : string[]) =>
    {
        friends.forEach((friend : string) => console.log(`Hi ${friend}`))
    };

    greetFriends('abul', 'jodu', 'modhu', 'kodu');

}