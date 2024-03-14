function isLeapYear(year) {
    // Leap years are divisible by 4
    // However, years divisible by 100 are not leap years, unless they are also divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; // It's a leap year
    } else {
        return false; // It's not a leap year
    }
}

function checkLeapYear() {
    var year = document.getElementById("yearInput").value;
    if (!year || isNaN(year)) {
        document.getElementById("result").innerHTML = "Please enter a valid year.";
    } else {
        if (isLeapYear(parseInt(year))) {
            document.getElementById("result").innerHTML = year + " is a Leap Year.";
        } else {
            document.getElementById("result").innerHTML = year + " is not a Leap Year.";
        }
    }
}
