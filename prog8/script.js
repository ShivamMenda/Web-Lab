function validateFormAndCalc() {
    var usn=document.getElementById("regno").value;
    var code=document.getElementById("subcode").value;
    let m1=parseInt(document.getElementById("marks-1").value);
    let m2=parseInt(document.getElementById("marks-2").value);
    let m3=parseInt(document.getElementById("marks-3").value);

    if(m1 || m2 || m3 >20){
        alert("Enter valid marks");
    }

    marks=[m1,m2,m3]
    marks.sort();
    console.log(marks);
    let avg=(marks[1]+marks[2])/2;

    var information =
      "USN: " + usn + "\n" +
      "Subject Code: " + code + "\n" +
      "Marks 1: " + m1 + "\n" +
      "Marks 2: " + m2 + "\n" +
      "Marks 3: " + m3;
    document.getElementById("res").innerHTML=information;
    console.log(information);
    console.log(avg);
    alert(`The average is ${avg}`);
}