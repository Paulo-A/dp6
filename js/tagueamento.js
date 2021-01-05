// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

document.getElementsByClassName("menu-lista-contato")[0].addEventListener("click", function(){
    console.log("heyheyhey contact clicking");
    ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
});

document.getElementsByClassName("menu-lista-download")[0].addEventListener("click", function () {
    console.log("heyheyhey download_pdf clicking");
    ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
});

card_montadora = document.getElementsByClassName("card-montadoras")
card_montadora[0].addEventListener("click", function () {
    console.log("heyheyhey card_montadora[0]");
    console.log(card_montadora[0].dataset.name)
    ga('send', 'event', 'analise', 'ver_mais', card_montadora[0].dataset.name);
});
card_montadora[1].addEventListener("click", function () {
    console.log("heyheyhey card_montadora[1]");
    console.log(card_montadora[1].dataset.name)
    ga('send', 'event', 'analise', 'ver_mais', card_montadora[1].dataset.name);
});
card_montadora[2].addEventListener("click", function () {
    console.log("heyheyhey card_montadora[2]");
    console.log(card_montadora[2].dataset.name)
    ga('send', 'event', 'analise', 'ver_mais', card_montadora[2].dataset.name);
});

form_contato = document.getElementsByClassName("contato")[0]
form_contato[0].addEventListener("blur", function () {
    console.log("heyheyhey blur name");
    ga('send', 'event', 'contato', form_contato.id, 'preencheu');
});
form_contato[1].addEventListener("blur", function () {
    console.log("heyheyhey blur email");
    ga('send', 'event', 'contato', form_contato.id, 'preencheu');
});
form_contato[2].addEventListener("blur", function () {
    console.log("heyheyhey blur telefone");
    ga('send', 'event', 'contato', form_contato.id, 'preencheu');
});

form_contato[4].addEventListener("click", function () {
    console.log("heyheyhey click form");
    ga('send', 'event', 'contato', 'enviado', 'enviado');
});