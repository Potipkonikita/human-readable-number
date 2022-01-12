module.exports = function toReadable(number) {
    let res1 = "",
        res2 = "";
    const num1 = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const num2 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const num3 = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let sotni = Math.floor(number / 100);
    let dvuhzn = number % 100;
    let des = Math.floor(dvuhzn / 10);
    let ed = dvuhzn % 10;
    if (number === 0) {return "zero";}
    if (dvuhzn < 10) res2 = num1[ed];
    if (dvuhzn >= 10 && dvuhzn < 20) res2 = num2[ed];
    else if (dvuhzn >= 20 && ed != 0) res2 = num3[des] + " " + num1[ed];
    else if (dvuhzn >= 20 && ed === 0) res2 = num3[des];
    if (sotni > 0 && dvuhzn != 0) res1 = num1[sotni] + " hundred ";
    else if (sotni > 0 && dvuhzn === 0) res1 = num1[sotni] + " hundred";
    let result = res1 + res2;
    return result;
};
