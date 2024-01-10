import express from 'express';
import { inserirProdutoController, recuperarTodosProdutosController } from './controllers';
import { authUsuario } from '@main/presentation/http/middlewares/auth-usuario.middleware';



const produtoRouter = express.Router();

produtoRouter.get(
    '/',
    (request, response, next) =>  recuperarTodosProdutosController.recuperar(request, response, next)
);

produtoRouter.post(
    '/',
    authUsuario(['ADMINISTRADOR']),
    (request, response, next) =>  inserirProdutoController.inserir(request, response, next)
);

export{ produtoRouter };