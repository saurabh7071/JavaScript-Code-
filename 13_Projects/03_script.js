

const input = document.getElementById("date");
const btn = document.querySelector("#btn");

input.max = new Date().toISOString().split("T")[0];

btn.addEventListener("click", function(){
    let birthDate = new Date(input.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    console.log(d1, m1, y1);
    let today = new Date();
    
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();
    console.log(d2, m2, y2);

    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 > m1){
        m3 = m2 - m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }

    if(d2 > d1){
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDayInMonth(y1, m1) + d2 - d1;  
    }

    if(m3 < 0){
        m3 = 11;
        y3--;
    }

    const output = document.querySelector(".output");

    output.innerHTML = `<p>Year : ${y3}</p>
                        <p>Month : ${m3} </p>
                        <p>Day : ${d3} </p>`

    function getDayInMonth(year, month){
        return new Date(year, month, 0).getDate();   
    }

})