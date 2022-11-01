"use strict";
// ENUM type
var WeekDays;
(function (WeekDays) {
    WeekDays["Monday"] = "Mon";
    WeekDays["Tuesday"] = "Tue";
    WeekDays["Wednesday"] = "Wed";
    WeekDays["Thursday"] = "Thurs";
    WeekDays["Friday"] = "Fri";
    WeekDays["Saturday"] = "Sat";
    WeekDays["Sunday"] = "Sun";
})(WeekDays || (WeekDays = {}));
console.log(WeekDays.Wednesday);
//-----------Numerical Enum
// enum Utensils {
//     Knives = 1,
//     Cooker,
//     Omorogun,
//     Catapult = Utensils.Knives - 1
// }
// console.log(Utensils);
