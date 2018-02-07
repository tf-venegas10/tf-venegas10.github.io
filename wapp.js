
var outterField=$("html.js.adownload.cssanimations.csstransitions.no-webp.wf-opensans-n4-active.wf-opensans-n6-active.wf-roboto-n3-active.wf-roboto-n4-active.wf-roboto-n5-active.wf-active body.web div#app div.app-wrapper.app-wrapper-web.app-wrapper-main div.app._3dqpi.two div._3q4NP._1Iexl div#main._1GX8_ footer._3XpR2 div.block-compose div.input-container div.pluggable-input.pluggable-input-compose");
var writter=$("html.js.adownload.cssanimations.csstransitions.no-webp.wf-opensans-n4-active.wf-opensans-n6-active.wf-roboto-n3-active.wf-roboto-n4-active.wf-roboto-n5-active.wf-active body.web div#app div.app-wrapper.app-wrapper-web.app-wrapper-main div.app._3dqpi.two div._3q4NP._1Iexl div#main._1GX8_ footer._3XpR2 div.block-compose div.input-container div.pluggable-input.pluggable-input-compose div.pluggable-input-body.copyable-text.selectable-text");
var preExistingMsj=$("html.js.adownload.cssanimations.csstransitions.no-webp.wf-opensans-n4-active.wf-opensans-n6-active.wf-roboto-n3-active.wf-roboto-n4-active.wf-roboto-n5-active.wf-active body.web div#app div.app-wrapper.app-wrapper-web.app-wrapper-main div.app._3dqpi.two div._3q4NP._1Iexl div#main._1GX8_ footer._3XpR2 div.block-compose div.input-container div.pluggable-input.pluggable-input-compose div.pluggable-input-placeholder");
var buti=$("html.js.adownload.cssanimations.csstransitions.no-webp.wf-opensans-n4-active.wf-opensans-n6-active.wf-roboto-n3-active.wf-roboto-n4-active.wf-roboto-n5-active.wf-active body.web div#app div.app-wrapper.app-wrapper-web.app-wrapper-main div.app._3dqpi.two div._3q4NP._1Iexl div#main._1GX8_ footer._3XpR2 div.block-compose button.compose-btn-send");
/*
var buttonRaro=$("html.js.adownload.cssanimations.csstransitions.no-webp.wf-opensans-n4-active.wf-opensans-n6-active.wf-roboto-n3-active.wf-roboto-n4-active.wf-roboto-n5-active.wf-active body.web div#app div.app-wrapper.app-wrapper-web.app-wrapper-main div.app._3dqpi.two div._3q4NP._1Iexl div#main._1GX8_ footer._3XpR2 div.block-compose div span button._2SbJ1");
var divRaro=$("html.js.adownload.cssanimations.csstransitions.no-webp.wf-opensans-n4-active.wf-opensans-n6-active.wf-roboto-n3-active.wf-roboto-n4-active.wf-roboto-n5-active.wf-active body.web div#app div.app-wrapper.app-wrapper-web.app-wrapper-main div.app._3dqpi.two div._3q4NP._1Iexl div#main._1GX8_ footer._3XpR2 div.block-compose div");
var seSuponeQueSeaElPutoBoton=$("html.js.adownload.cssanimations.csstransitions.no-webp.wf-opensans-n4-active.wf-opensans-n6-active.wf-roboto-n3-active.wf-roboto-n4-active.wf-roboto-n5-active.wf-active body.web div#app div.app-wrapper.app-wrapper-web.app-wrapper-main div.app._3dqpi.two div._3q4NP._1Iexl div#main._1GX8_ footer._3XpR2 div.block-compose div._1UWg0");
var seSupone2=$("html.js.adownload.cssanimations.csstransitions.no-webp.wf-opensans-n4-active.wf-opensans-n6-active.wf-roboto-n3-active.wf-roboto-n4-active.wf-roboto-n5-active.wf-active body.web div#app div.app-wrapper.app-wrapper-web.app-wrapper-main div.app._3dqpi.two div._3q4NP._1Iexl div#main._1GX8_ footer._3XpR2 div.block-compose div._1UWg0 span button._2SbJ1");

outterField.className+=" focused";
writter.innerText="Hola";
preExistingMsj.style="visibility: hidden";
seSuponeQueSeaElPutoBoton.replaceWith('<button class=\"compose-btn-send\"><span data-icon=\"send\" class=\"\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"#263238\" fill-opacity=\".45\" d=\"M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z\"></path></svg></span></button>');
buti.click();
*/
var i;
i = 0;
function sendMi() {
    var ready;
    "use strict";
    if (i === 500) {
        return;
    }
    outterField.className += " focused";
    writter.innerText = "Gay" ;
    preExistingMsj.style = "visibility: hidden";
    console.log("waiting...")
    setTimeout(function() {
        console.log("..Starting")
        ready = buti = $("html.js.adownload.cssanimations.csstransitions.no-webp.wf-opensans-n4-active.wf-opensans-n6-active.wf-roboto-n3-active.wf-roboto-n4-active.wf-roboto-n5-active.wf-active body.web div#app div.app-wrapper.app-wrapper-web.app-wrapper-main div.app._3dqpi.two div._3q4NP._1Iexl div#main._1GX8_ footer._3XpR2 div.block-compose button.compose-btn-send");
        buti.click();
        i += 1;
        sendMi();
    }, Math.max(10,2000-i*1000) );
}
i = 0;
sendMi();

/*
new MutationObserver(callback)
    .observe(elem, {attributes: true, attributeOldValue: true});

function callback(mutations, observer) {
    var target = mutations[0].target;
    observer.disconnect();
    mutations.forEach(function(mutation) {
        target.setAttribute(mutation.attributeName, mutation.oldValue);
    });
    observer.observe(target, {attributes: true, attributeOldValue: true});
}
 */