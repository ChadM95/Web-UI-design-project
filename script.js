//JavaScript

function func1() {
    let name = prompt("What is your name?");
    alert("Hello, " + name);

}

function funcShow() {
    document.getElementById('lightBulb').style.visibility='visible';
}

function funcHide() {
    document.getElementById('lightBulb').style.visibility='hidden';
}

//Jquery

$(document).ready(function() {

    $('#about').hide();

    $('#show').click(function(){
        $('#about').show();
    })

    $('#hide').click(function(){
        $('#about').hide();
    })

    $('#panel1').hide();

    $("#click1").click(function(){
        $("#panel1").slideToggle();
    })

    $('#panel2').hide();

    $('#click2').click(function() {
        $('#panel2').fadeToggle();
    })

    $('#panel3').hide();

    $('#click3').click(function() {
        $('#panel3').fadeToggle();
    })

})

