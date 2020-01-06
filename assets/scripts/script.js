var $send = document.getElementById("send");
var $name = document.getElementById("name");
var $email = document.getElementById("email");

$send.addEventListener("click", function(event)
{
    event.preventDefault();

    var response = "Thank you, " + $name.nodeValue;
})