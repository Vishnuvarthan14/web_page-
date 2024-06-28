let select=document.querySelectorAll(".currency")
fetch('https://api.frankfurter.app/currencies')
.then(res=>res.json())
.then(res=> displayoptions(res))
function displayoptions(res)
{
       let curr= Object.entries(res)
       for(let i=0;i<curr.length;i++)
        {
            opt=` <option value="${curr[i][0]}">${curr[i][0]}</option>`
            select[0].innerHTML +=opt
            select[1].innerHTML +=opt
        }
 }
 let button=document.getElementById("button")
 let input = document.getElementById("get")
 let err=document.getElementById("err")
button.addEventListener("click",convert)
function convert()
{
    let curr1=select[0].value
    let curr2=select[1].value
    let inputvalue=input.value
    if(curr1===curr2)
        {
            err.innerHTML="please change the currency"
        }
        else{
    conversion(curr1,curr2,inputvalue)
        }
}
function conversion(curr1,curr2,inputvalue)
{
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputvalue}&from=${curr1}&to=${curr2}`)
     .then(resp => resp.json())
     .then((data) => {
        document.getElementById("output").value=Object.values(data.rates)[0]
  });
}