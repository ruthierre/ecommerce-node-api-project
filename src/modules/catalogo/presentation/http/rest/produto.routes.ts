import express from 'express';
import { inserirProdutoController, recuperarTodosProdutosController } from './controllers';



const produtoRouter = express.Router();

produtoRouter.get(
    '/',
    (request, response, next) =>  recuperarTodosProdutosController.recuperar(request, response, next)
);

produtoRouter.post(
    '/',
    (request, response, next) =>  inserirProdutoController.inserir(request, response, next)
);

export{ produtoRouter };