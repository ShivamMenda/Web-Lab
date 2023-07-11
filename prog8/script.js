function validateFormAndCalc() {
    var usn=document.getElementById("regno").value;
    var code=document.getElementById("subcode").value;
    var m1=parseInt(document.getElementById("marks-1").value);
    var m2=parseInt(document.getElementById("marks-2").value);
    var m3=parseInt(document.getElementById("marks-3").value);

    if(m1 >20|| m2>20 || m3 >20){
        alert("Enter valid marks");
        return;
    }


    var information =
      "USN: " + usn + "\n" +
      "Subject Code: " + code + "\n" +
      "Marks 1: " + m1 + "\n" +
      "Marks 2: " + m2 + "\n" +
      "Marks 3: " + m3 +"\n" ;
    console.log(information);
    marks=[m1,m2,m3]
    marks.sort();
    var avg=(marks[1]+marks[2])/2;
    alert(`The average is ${avg}`);
    alert(`${information}`)
}