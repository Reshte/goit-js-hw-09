!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=l);var r=l("iU1Pc"),u=document.querySelector(".form"),i=document.querySelector("button"),a={firstDelay:"",delayStep:"",amount:""};function s(t,n){var o=Math.random()>.3;return new Promise((function(l,u){setTimeout((function(){o?e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms")):e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}),n)}))}u.addEventListener("input",(function(){return a.firstDelay=u.elements.delay.value,a.delayStep=u.elements.step.value,a.amount=u.elements.amount.value,a})),i.addEventListener("click",(function(t){if(t.preventDefault(),""===u.elements.delay.value||""===u.elements.step.value||""===u.elements.amount.value)e(r).Notify.info("Заполните все поля");else for(var n=1,o=Number(a.firstDelay);a.amount>0;)s(n,o),n+=1,console.log(n),o+=Number(a.delayStep),console.log(o),a.amount-=1;u.reset()}))}();
//# sourceMappingURL=03-promises.2f543b0e.js.map