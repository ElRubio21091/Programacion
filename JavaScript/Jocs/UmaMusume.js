"use strict"

//Characters---------------

//1*
let agnesTachyon=0;
let mejiroRyan=0;
let winningTiquet=0;
let sakuraBakushin=0;
let haruUrara=0;
let matikaneFukutitaru=0;
let niceNature=0;
let kingHalo=0;

//2*
let goldShip=0;
let superCrek=0;
let mayanoTopGun=0;
let airGroove=0;
let elCondorPasa=0;
let grassWonder=0;
let daiwaScarlett=0;
let vodka=0;

//3*
let meishoDoto=0;
let marusenky=0;
let specialWeek=0;
let goldCity=0;
let fujiKiseki=0;
let hishiAmazon=0;
let seiunSky=0;
let naritaBrian=0;
let smartFalcon=0;
let naritaTaishin=0;
let currenChan=0;
let tokaiTeio=0;
let mejiroMCQueen=0;
let biwaHayahide=0;
let mihonoBourbon=0;
let tmOperaO=0;
let riceShower=0;
let symboliRudolf=0;
let taikiShuttle=0;
let oguriCap=0;
let silenceSuzuka=0;

//------------------------


//Tracks
let dirtTrack=0;
let turfTrack=0;

//Distance
let sprint=0;
let medium=0;
let long=0;
let mile=0;

//Positions
let frontRunner=0;
let paceChaser=0;
let lateRunner=0;
let endCloser=0;

//Stats
let speed=0;
let stamina=0;
let power=0;
let guts=0;
let wit=0;

//StatGrowth
let speedGrowth=0;
let staminaGrowth=0;
let powerGrowth=0;
let gutsGrowth=0;
let witGrowth=0;

function CharacterSelector(){
    alert("Quin personatge vols jugar?")
    let personatge =prompt("Escriu el seu nom complet sense espais (ex: AgnesTachyon): ")
    switch(personatge){
        case "AgnesTachyon":
            agnesTachyon=1;
            return;
        case "MejiroRyan":
            mejiroRyan=1;
            return;
        case "WinningTiquet":
            winningTiquet=1;
            return;
        case "SakuraBakushin":
            sakuraBakushin=1;
            return;
        case "HaruUrara":
            haruUrara=1;
            return;
        case "MatikaneFukutitaru":
            matikaneFukutitaru=1;
            return;
        case "NiceNature":
            niceNature=1;
            return;
        case "KingHalo":
            kingHalo=1;
            return;
        case "GoldShip":
            goldShip=1;
            return;
        case "SuperCrek":
            superCrek=1;
            return;
        case "MayanoTopGun":
            mayanoTopGun=1;
            return;
        case "AirGroove":
            airGroove=1;
            return;
        case "ElCondorPasa":
            elCondorPasa=1;
            return;
        case "GrassWonder":
            grassWonder=1;
            return;
        case "DaiwaScarlett":
            daiwaScarlett=1;
            return;
        case "Vodka":
            vodka=1;                                
            return;
        case "MeishoDoto":
            meishoDoto=1;
            return;
        case "Marusenky":
            marusenky=1;
            return;
        case "SpecialWeek":
            specialWeek=1;
            return;
        case "GoldCity":
            goldCity=1;
            return;
        case "FujiKiseki":
            fujiKiseki=1;
            return;
        case "HishiAmazon":
            hishiAmazon=1;
            return;
        case "SeiunSky":
            seiunSky=1;
            return;
        case "NaritaBrian":
            naritaBrian=1;
            return;
        case "SmartFalcon":
            smartFalcon=1;
            return;
        case "NaritaTaishin":
            naritaTaishin=1;
            return;
        case "CurrenChan":
            currenChan=1;
            return;
        case "TokaiTeio":
            tokaiTeio=1;
            return;
        case "MejiroMCQueen":
            mejiroMCQueen=1;
            return;
        case "BiwaHayahide":
            biwaHayahide=1;
            return;
        case "MihonoBourbon":
            mihonoBourbon=1;
            return;
        case "TmOperaO":
            tmOperaO=1;
            return;
        case "RiceShower":
            riceShower=1;
            return;
        case "SymboliRudolf":
            symboliRudolf=1;
            return;
        case "TaikiShuttle":
            taikiShuttle=1;
            return;
        case "OguriCap":
            oguriCap=1;
            return;
        case "SilenceSuzuka":
            silenceSuzuka=1;
            return;
        default:
            alert("Error de sintaxis");
    }
}


