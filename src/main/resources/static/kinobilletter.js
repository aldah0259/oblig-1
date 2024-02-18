let billetter=[];
let ut = "<table><tr>"
function kjøpbillett(){
    const billett={
        film : document.getElementById("filmer").value,
        antall : document.getElementById("Antall").value,
        fornavn : document.getElementById("Fornavn").value,
        etternavn : document.getElementById("Etternavn").value,
        telefonnr : document.getElementById("TelefonNr").value,
        epost : document.getElementById("Epost").value
    };
    if (!billett.antall || !billett.fornavn || !billett.etternavn || !billett.telefonnr || !billett.epost) {
        document.getElementById("AntallError").innerHTML="Vennligst oppgi antall billetter";
        document.getElementById("FornavnError").innerHTML="Vennligst oppgi fornavn";
        document.getElementById("EtternavnError").innerHTML="Vennligst oppgi etternavn";
        document.getElementById("TelefonNrError").innerHTML="Vennligst oppgi telefonnummer";
        document.getElementById("EpostError").innerHTML="Vennligst oppgi e-post";
    } else {
        billetter.push(billett);

        for (let liste of billetter){
            ut+="<tr>"
            ut+="<td>" + liste.film + "</td><td>" +liste.antall+ "</td><td>" +liste.fornavn+" </td>" +
                "<td>" + liste.etternavn+ "</td><td> "+liste.telefonnr+" </td><td>" +liste.epost+" </td>";
            ut+="</tr>"
        }
        document.getElementById("ut").innerHTML=ut;
        billetter=[];

        document.getElementById("AntallError").innerHTML="";
        document.getElementById("FornavnError").innerHTML="";
        document.getElementById("EtternavnError").innerHTML="";
        document.getElementById("TelefonNrError").innerHTML="";
        document.getElementById("EpostError").innerHTML="";
    }
    document.getElementById("Antall").value="";
    document.getElementById("Fornavn").value="";
    document.getElementById("Etternavn").value="";
    document.getElementById("TelefonNr").value="";
    document.getElementById("Epost").value="";
}

function AltDelete(){
    document.getElementById("ut").innerHTML="";
    billetter=[];
}