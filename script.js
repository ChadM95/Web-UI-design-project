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
    $('#hide').click(function(){
        $('#about').hide();
    })

    $('#panel').hide();
    $("#click1").click(function(){
        $("#panel").slideDown();
    })
})
}) 