import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();
//Comentario
$('.form').submit(controller.adiciona.bind(controller));