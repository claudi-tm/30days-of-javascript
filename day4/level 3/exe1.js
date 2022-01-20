let isleap = false;
let month = "february".toLowerCase();
let year = 2016;
if (year % 4 == 0 && year % 100 != 0) {
    isleap = true;
} else if (year % 100 == 0 && year % 400 == 0) {
    isleap = true;
}

switch (month) {
    case "january":
        console.log(month, " has 31 days");
        break;
    case "february":
        isleap
            ? console.log(month, " has 29 days")
            : console.log(month, " has 28 days");
        break;
    case "march":
        console.log(month, " has 31 days");
        break;
    case "april":
        console.log(month, " has 30 days");
        break;
    case "may":
        console.log(month, " has 31 days");
        break;
    case "june":
        console.log(month, " has 30 days");
        break;
    case "july":
        console.log(month, " has 31 days");
        break;
    case "august":
        console.log(month, " has 31 days");
        break;
    case "september":
        console.log(month, " has 30 days");
        break;
    case "october":
        console.log(month, " has 31 days");
        break;
    case "november":
        console.log(month, " has 30 days");
        break;
    case "december":
        console.log(month, " has 31 days");
        break;

    default:
        break;
}
