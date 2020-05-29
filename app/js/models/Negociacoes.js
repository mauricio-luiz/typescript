System.register(["./imprimivel"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var imprimivel_1, Negociacoes;
    return {
        setters: [
            function (imprimivel_1_1) {
                imprimivel_1 = imprimivel_1_1;
            }
        ],
        execute: function () {
            Negociacoes = class Negociacoes extends imprimivel_1.Imprimivel {
                constructor() {
                    super(...arguments);
                    this._negociacoes = [];
                }
                adiciona(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                paraArray() {
                    return [].concat(this._negociacoes);
                }
                paraTexto() {
                    console.log("Impressão");
                    console.log(JSON.stringify(this._negociacoes));
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
