// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

path = window.location.pathname;
if (path === '/analise'){
    event_analysis_page();
} else if (path === '/sobre'){
    event_about_page();
}
event_default();

function event_default() {
    document.getElementsByClassName('menu-lista-contato')[0].addEventListener('click', function(){
        console.log('Contato event sent');
        ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
    });

    document.getElementsByClassName('menu-lista-download')[0].addEventListener('click', function () {
        console.log('Download event sent');
        ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
    });
};

function event_analysis_page(){
    card = document.getElementsByClassName('card-montadoras');
    card[0].addEventListener('click', analysis_field_click(card[0].dataset.name));
    card[1].addEventListener('click', analysis_field_click(card[1].dataset.name));
    card[2].addEventListener('click', analysis_field_click(card[2].dataset.name));
};

function analysis_page_click(event_label) {
    console.log('Analise event sent');
    ga('send', 'event', 'analise', 'ver_mais', event_label);
};

function event_about_page(){
    form_contact = document.getElementsByClassName('contato')[0]

    form_contact[0].addEventListener('blur', form_field_fill(form_contact.id));
    form_contact[1].addEventListener('blur', form_field_fill(form_contact.id));
    form_contact[2].addEventListener('blur', form_field_fill(form_contact.id));

    form_contact[4].addEventListener('submit', function () {
        console.log('Sobre event sent');
        ga('send', 'event', 'contato', 'enviado', 'enviado');
    });
};

function form_field_fill(event_action){
    console.log('Sobre event sent');
    ga('send', 'event', 'contato', event_action, 'preencheu');
};