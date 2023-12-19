import { atualizarCategoriaUseCase, deletarCategoriaUseCase, inserirCategoriaUseCase, inserirProdutoUseCase, recuperarCategoriaPorIdUseCase,  recuperarTodasCategoriasUseCase, recuperarTodosProdutosUseCase } from "@modules/catalogo/application/use-case";
import { RecuperarCategoriaPorIdExpressController } from "./recuperar-categoria-por-id.express.controller";
import { RecuperarTodasCategoriaExpressController } from "./recuperar-todas-categorias.express.controller";
import { InserirCategoriaExpressController } from "./inserir-categoria.express.controller"; 
import { atualizarCategoriaExpressController } from "./atualizar-categoria.express.controller";
import { deletarCategoriaExpressController } from "./deletar-categoria.express.controller";
import { RecuperarTodosProdutosExpressController } from "./recuperar-todos-produtos.express.controller";
import { InserirProdutoUseCase } from "@modules/catalogo/application/use-case/inserir-produto/inserir-produto.use-case";
import { InserirProdutoExpressController } from "./inserir-produto.express.controller";

const recuperarCategoriaPorIdController = new RecuperarCategoriaPorIdExpressController(recuperarCategoriaPorIdUseCase);
const recuperarTodasCategoriasController = new RecuperarTodasCategoriaExpressController(recuperarTodasCategoriasUseCase);
const inserirCategoriaController = new InserirCategoriaExpressController(inserirCategoriaUseCase);
const atualizarCategoriaController = new atualizarCategoriaExpressController(atualizarCategoriaUseCase);
const deletarCategoriaController = new deletarCategoriaExpressController(deletarCategoriaUseCase);

const recuperarTodosProdutosController = new RecuperarTodosProdutosExpressController(recuperarTodosProdutosUseCase);
const inserirProdutoController = new InserirProdutoExpressController(inserirProdutoUseCase);

export {
    recuperarCategoriaPorIdController,
    recuperarTodasCategoriasController,
    inserirCategoriaController,
    atualizarCategoriaController,
    deletarCategoriaController,
    recuperarTodosProdutosController,
    inserirProdutoController
}