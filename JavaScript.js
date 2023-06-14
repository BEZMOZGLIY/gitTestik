(function(){
    "use strict";
    class Games {
        constructor(name, hours) {
            this.name = name;
            this.hours = hours;
        }    
    }
let MHW = new Games('MHW',7);
console.log(MHW);
let DarkSouls2 = new Games("Dark Souls II",891)
console.log(DarkSouls2);
let DarkSouls3 = new Games("Dark Souls III",1000);
console.log(DarkSouls3);
})();
let DarkSoulsRemastered = new Games("Dark Souls Remastered",1000);
console.log(DarkSouls3);