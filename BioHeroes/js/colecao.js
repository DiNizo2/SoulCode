// $("#metais").click(function(){
//     document.querySelector('.activeMetais').classList.toggle('hideCards');
//     document.querySelector('.activePapeis').classList.toggle('hideCards');
// })

// $("#papeis").click(function(){
//     document.querySelector('.activePapeis').classList.toggle('hideCards');
// })

$(document).ready(function(){
    $("#papeis_section").hide()
    $("#metais_section").hide()
    $("#vidro_section").hide()
})

$("#metais").click(function(){
    $("#metais_section").slideDown()
    $("#papeis_section").slideUp()
    $("#plastico_section").slideUp()
    $("#vidro_section").slideUp()
})

$("#papeis").click(function(){
    $("#papeis_section").slideDown()
    $("#metais_section").slideUp()
    $("#plastico_section").slideUp()
    $("#vidro_section").slideUp()
    
})

$("#plastico").click(function(){
    $("#plastico_section").slideDown()
    $("#metais_section").slideUp()
    $("#papeis_section").slideUp()
    $("#vidro_section").slideUp()
})

$("#vidro").click(function(){
    $("#vidro_section").slideDown()
    $("#metais_section").slideUp()
    $("#papeis_section").slideUp()
    $("#plastico_section").slideUp()
})




