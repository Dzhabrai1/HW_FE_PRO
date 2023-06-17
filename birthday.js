function getBirthday() {
    let today = new Date();
    let userDate = new Date(prompt("Введи дату рождения дд.мм.гг"));
    
    today.setHours(0, 0, 0, 0);
    userDate.setHours(0, 0, 0, 0);

    if (today.getTime() === userDate.getTime()) {
        console.log("С днем рождения! Мои сердечные поздравления");
    } else {
        console.log("К сожадению, не сегодня");
    }
}

getBirthday();
