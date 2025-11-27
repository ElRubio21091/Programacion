"use strict"

/*    TELEFONS AMB PREFIX ======= let pattern = /^((00|\+)\d{1,3}\s*-?\s*)?(\d{3}\s*\.?\s*){1,3}\d{3}$/;  */
/* let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; */
let pattern2= /@\w+/g;
let s = prompt("Introdueix un text");
while (s && s.toUpperCase() !== "FI") {
    if (pattern2.test(s)) alert(s + " COINCIDEIX amb " + pattern2);
    else alert(s + " NO coincideix amb " + pattern2);
    s = prompt("Introdueix un text");
}

