var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
function SelectColor(color) {
    return "You selected ".concat(color);
}
console.log(SelectColor(Color.Green));
