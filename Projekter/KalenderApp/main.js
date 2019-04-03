window.onload = function () {
    
// Finder nuværende måned og år

    var month = ["Januar","Februar","Marts","April","Maj","Juni","Juli","August","September","Oktober","November","December"]
    var dateNow = new Date();
    var monthNum = dateNow.getMonth()
    var monthNow = month[monthNum];
    var yearNum = dateNow.getFullYear();
    var yearNow = yearNum;
    var MonthDays = new Date(yearNum, monthNum + 1, 0).getDate();
    document.getElementById("currentmonthandyear").innerHTML = monthNow + ' ' + yearNow; 
// -----
    console.log(month);
newMonthDays();
spacing();
// -----

// Onclick funktioner der ændrer måned og år i sammenhæng med klik på pilene
    document.getElementById("leftArrow").addEventListener("click", function(){ 
        if (monthNum == 0) {
            monthNum = 11;
            yearNow -= 1;
            monthNow = month[monthNum];
            document.getElementById("currentmonthandyear").innerHTML = monthNow + ' ' + yearNow;
            newMonthDays();
            spacing();
        } else {
            monthNum = monthNum - 1;
            monthNow = month[monthNum];
            document.getElementById("currentmonthandyear").innerHTML = monthNow + ' ' + yearNow;
            newMonthDays();
            spacing();
        }}); 

    document.getElementById("rightArrow").addEventListener("click", function(){ 
        if (monthNum == 11) {
            monthNum = 0;
            yearNow += 1;
            monthNow = month[monthNum];
            document.getElementById("currentmonthandyear").innerHTML = monthNow + ' ' + yearNow;
            newMonthDays();
            spacing();
        } else {
            monthNum = monthNum + 1;
            monthNow = month[monthNum];
            document.getElementById("currentmonthandyear").innerHTML = monthNow + ' ' + yearNow;
            newMonthDays();
            spacing();
        }}); 
// -----

function spacing() {    
    var dateTheFirst = new Date(yearNow, monthNum, 1);
    if (dateTheFirst.getDay() == 1) { document.getElementById("firstdaa").style.marginLeft = '0%'; }
    else if (dateTheFirst.getDay() == 2) { document.getElementById("firstdaa").style.marginLeft = '14.2%'; } 
    else if (dateTheFirst.getDay() == 3) { document.getElementById("firstdaa").style.marginLeft = '28.4%'; }
    else if (dateTheFirst.getDay() == 4) { document.getElementById("firstdaa").style.marginLeft = '42.6%'; }
    else if (dateTheFirst.getDay() == 5) { document.getElementById("firstdaa").style.marginLeft = '56.8%'; }
    else if (dateTheFirst.getDay() == 6) { document.getElementById("firstdaa").style.marginLeft = '71%'; }
    else if (dateTheFirst.getDay() == 0) { document.getElementById("firstdaa").style.marginLeft = '85.2%'; }
}

function newMonthDays() {
    MonthDays = new Date(yearNow, monthNum + 1, 0).getDate();
    console.log(MonthDays);
    
    var div29 = document.getElementById("if29");
    var div30 = document.getElementById("if30");
    var div31 = document.getElementById("if31");

    if (MonthDays === 28) {
        document.getElementById("if29").style.display = "none";
        document.getElementById("if30").style.display = "none";
        document.getElementById("if31").style.display = "none";
    } else if (MonthDays === 29) {
        document.getElementById("if29").style.display = "initial";
        document.getElementById("if30").style.display = "none";
        document.getElementById("if31").style.display = "none";
    } else if (MonthDays === 30) {
        document.getElementById("if29").style.display = "initial";
        document.getElementById("if30").style.display = "initial";
        document.getElementById("if31").style.display = "none";
    } else if (MonthDays === 31) {
        document.getElementById("if29").style.display = "initial";
        document.getElementById("if30").style.display = "initial";
        document.getElementById("if31").style.display = "initial";
    }
}

};