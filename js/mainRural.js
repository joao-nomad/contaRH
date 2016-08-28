//Destaques Btn
$("#itrImg").click(function() {
    $("#destaqueTitulo, #destaqueTexto").css("display", "block");
    $("#destaqueTitulo").text("ITR");
    $("#destaqueTexto").text("O Imposto sobre a Propriedade Rural (ITR) é um tributo federal que se cobra anualmente das propriedades rurais. Precisa ser pago pelo proprietário da terra, pelo titular do domínio útil ou pelo possuidor a qualquer título.");
});

$("#preImg").click(function() {
    $("#destaqueTitulo, #destaqueTexto").css("display", "block");
    $("#destaqueTitulo").text("Previdência Social");
    $("#destaqueTexto").text("Produtor que tiver sua inscrição no INSS passa a ter direito aos benefícios como Auxílio-Doença, Auxílio-Reclusão, Aposentadoria por Idade, Aposentadoria por Invalidez, Pensão por Morte, Salário-Família, Salário-Maternidade e Auxílio-Acidente de Trabalho.");
});

$("#controleImg").click(function() {
    $("#destaqueTitulo, #destaqueTexto").css("display", "block");
    $("#destaqueTitulo").text("Controle de Funcionários");
    $("#destaqueTexto").text("Realizamos o registro dos funcionários rurais, tais como seu controle de horas, benefícios, contribuição INSS, entre outros. O trabalhador rural empregado deve ter a carteira assinada. A inscrição ocorre a partir da assinatura e do registro no PIS/Pasep, providências a cargo do empregador.");
});

$("#notaImg").click(function() {
    $("#destaqueTitulo, #destaqueTexto").css("display", "block");
    $("#destaqueTitulo").text("Nota Fiscal");
    $("#destaqueTexto").text("Realizamos o pedido de Nota Fiscal e regularização do produtor Rural Pessoa Física e Jurídica. Nota Fiscal é o documento que registra, para fins fiscais, as operações de circulação de mercadorias e de prestações de serviços, ocorrida entre as partes. A Nota Fiscal do Produtor atesta a responsibilidade do produtor pela segurança, qualidade e descrição do produto na nota: quantidade, preço, variedade, classificação e embalagem.");
});

$("#sustentImg").click(function() {
    $("#destaqueTitulo, #destaqueTexto").css("display", "block");
    $("#destaqueTitulo").text("Sustentação do Investimento Rural");
    $("#destaqueTexto").text("Com o Programa de Sustentação do Investimento Rural, você pode adquirir máquinas, equipamentos agrícolas e caminhões de fabricação nacional. Crédito destinado para insumos agropecuários de pequenos e médios produtores.");
});

// Closes the sidebar menu
$("#menu-close").click(function(e) {
    //e.preventDefault();
    //$("#sidebar-wrapper").toggleClass("active");
});


// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});


$("#theMenu").click(function() {
    $("#sideBar, #theClose").animate({width:'toggle'}, -350);
    $("#theMenu").animate({width:'toggle'}, 350);
});


$("#theClose, #homeLink, #aboutLink, #serviceLink, #galleryLink, #contactLink").click(function() {
    $("#theMenu").animate({width:'toggle'}, -350);
    $("#sideBar, #theClose").animate({width:'toggle'}, 350);
});


$("#facebook").click(function() {
    window.open(
        "https://www.facebook.com/Contarh-146942322374267/?fref=ts",
        '_blank'
    );
});  


//Classes para transição das imagens
setInterval(function(){
    var $header = $("#top");

    if ($header.hasClass("bg1") == true)
    {
        $header.removeClass("bg1");
        $header.fadeOut("fast");
        $header.fadeIn("fast");
       $header.addClass("bg2");
    }
    else if ($header.hasClass("bg2") == true)
    {
        $header.removeClass("bg2");
        $header.fadeOut("fast");
        $header.fadeIn("fast");
        $header.addClass("bg1");
    }
}, 4000);


$('#telefone').mask("(99) 9999-9999");

$('#celular').focusout(function(){
    var phone, element;
    element = $(this);
    element.unmask();
    phone = element.val().replace(/\D/g, '');
    if(phone.length > 10) {
        element.mask("(99) 99999-999?9");
    } else {
        element.mask("(99) 9999-9999?9");
    }
}).trigger('focusout');


$("#inBtn, #sbBtn, #scBtn, #cgBtn, #prBtn, #orBtn, #glBtn, #pfBtn, #ctBtn").click(function() {
    //alert('vai');
}); 



// Scrolls to the selected menu item on the page
$(function() {
    /*$('a[href*=#]:not([href=#])').click(function() {*/
        //linkis
    $(".linkis a").click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


