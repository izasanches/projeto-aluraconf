function ativaScrollSuave(selector) {

    $(selector).click(function(event){
        event.preventDefault(); //cancela evento padrão

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);  
    });
}

ativaScrollSuave('a[href*=painel-sobre]');
ativaScrollSuave('a[href*=painel-palestrante]');
ativaScrollSuave('a[href*=painel-form]');