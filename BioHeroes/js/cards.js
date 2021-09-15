$(".metal").click(function(){
    $("#exampleModalCenter").modal();
    document.getElementById("exampleModalLongTitle").innerHTML = "Aureum"
    document.getElementById("lore").innerHTML = `Um dos nossos Heros mais fortes e protetores, está sempre preparado para proteger
                                                seus amigos e ajudar sua comunidade das destruições que aparecem. Conduz eletricidade e calor. Com
                                                seu poder de magnetismo pode atrair outros metais, como alumínio, para devolvê-los ao Santuário das
                                                Latinhas. Nasce a partir de outras latinhas, porém para que isso aconteça é preciso reciclar latinhas
                                                costantemente`
});

$(".plastico").click(function(){
    $("#exampleModalCenter").modal();
    document.getElementById("exampleModalLongTitle").innerHTML = "Plástium"
    document.getElementById("lore").innerHTML = `Um Hero forte que nos ajuda muito no dia a dia, porém é muito bagunceiro.
                                                O problema é que essa bagunça faz mal para o meio ambiente por muito  tempo, e a mãe
                                                natureza demora muito pra arrumar.Ele tem que ficar separado dos outros Heros, para 
                                                não atrapalhar a reciclagem dos seus amigos. Sempre têm no seu proprio lugar. `
});

$(".papel").click(function(){
    $("#exampleModalCenter").modal();
    document.getElementById("exampleModalLongTitle").innerHTML = "Papirum"
    document.getElementById("lore").innerHTML = `É um  Hero mais frágil e mais distraído.  São os artistas da turma.
                                                Porém são muito numerosos e assim, podem fazer bagunça também. Mesmo parecendo fracos,
                                                têm boa resistência. Nascem a partir de árvores, e por isso temos que ajudar a reciclar.
                                                Quanto mais reciclamos, mais árvores nós salvamos. Vamos continuar salvando nossas florestas?`
});

$(".vidro").click(function(){
    $("#exampleModalCenter").modal();
    document.getElementById("exampleModalLongTitle").innerHTML = "Vitreo"
    document.getElementById("lore").innerHTML = `Um hero especial e difícil de cuidar. Costuma ser vaidoso, mas nunca deixa de ajudar
                                                o planeta e o meio ambiente. Nasce a partir do calor, gastando muita energia. Vamos diminuir o impacto
                                                no gasto de energia ajudando nosso hero a se juntar com garrafas e outros item de vidro, diminuindo o 
                                                gasto de calor e energia para produzir uma outra.`
});