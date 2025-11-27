"use strict"
let maxP
let tipusP
do {
    let norepitas=0
    let comptador = 0
    let sayonaraBaby = 0
    let info = (prompt("")).split(" ");
    maxP = parseInt(info[0]);
    tipusP = parseInt(info[1]);
    if (tipusP != 0 && maxP != 0) {
        let info2 = (prompt("")).split(" ");
        let info3 = (prompt("")).split(" ");

        for (let i = 0; i < info3.length; i++) {
            let n = parseInt(info3[i]);
            let p = parseInt(info2[i]);
            if (n > p && norepitas==0) {
                sayonaraBaby = 1
                console.log("NO")
                norepitas=1
            }
        }
        if (sayonaraBaby != 1) {
            for (let i = 0; i < info3.length; i++) {
                let n = parseInt(info3[i]);
                comptador = comptador + n
            }

            if (comptador > maxP) {
                console.log("NO")
            }
            else if (comptador <= maxP) {
                console.log("SI")
            }
        }
    }


} while (maxP != 0 && tipusP != 0)
