function emi_calc() {

    var P = parseInt(document.getElementById("P").value)
    var N //no of months 
    var R //rate of interest per month 
    var Y = parseInt(document.getElementById("T").value) //no of years
    var I = parseFloat(document.getElementById("R").value)//interest per year

    I = I/100
    N = 12*Y
    R = I/12

    var emi = (P*R*((1+R)**N))/(((1+R)**N)-1)

    emi = emi.toFixed(2)

    document.getElementById("emi").innerHTML = emi

    console.log("Extra amount we pay = "+((emi*N)-P))
}

