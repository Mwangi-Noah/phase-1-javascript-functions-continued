// code your solution here
function saturdayFun (fun = "roller-skate") {
    return(`This Saturday, I want to ${fun}!`)
}

function mondayWork (monday = "go to the office") {
    return (`This Monday, I will ${monday}.`)
}
function wrapAdjective(flair = "*"){
    return function (param = "Special"){
    return `You are ${flair}${param}${flair}!`
    }
}
wrapAdjective("%")("a dedicated programmer");
