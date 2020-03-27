var name = "Ibitoye Olatunde ";

var courses =  [" javascript", "python", "c#","php","html", "NodeJS", "GO", "Flutter", "Kotlin"];

// console.log("My name is: " + name + "and the courses i offer are" +courses);
function getEvenNumbers() {
    var courses =  [" javascript", "python", "c#","php","html", "NodeJS", "GO", "Flutter", "Kotlin"];

    for (var i = 0; i <=8; i++) {
        if (i % 2 !==0) {
            console.log(courses[i]);
        }
    }
}

getEvenNumbers();


function getOddNumbers(){
    var courses =  [" javascript", "python", "c#","php","html", "NodeJS", "GO", "Flutter", "Kotlin"];

    for (var i = 0; i <=8; i++) {
        if (i % 2 ==0) {
            console.log(courses[i]);
        }
    }
}

getOddNumbers();