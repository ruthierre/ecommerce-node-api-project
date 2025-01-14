import { categoriaRepositorio, produtoRepositorio } from "@modules/catalogo/infra/database";
import { RecuperarCategoriaPorIdUseCase } from "./recuperar-categoria-por-id/recuperar-categoria-por-id.use-case";
import { RecuperarTodasCategoriasUseCase } from "./recuperar-todas-categorias/recuperar-todas-categorias.use-case";
import { InserirCategoriaUseCase } from "./inserir-categoria/inserir-categoria.use-case";
import { AtualizarCategoriaUseCase } from "./atualizar-categoria/atualizar-categoria.use-case";
import { DeletarCategoriaUseCase } from "./deletar-categoria/deletar-categoria.use-case";
import { RecuperarProdutoPorIdUseCase } from "./recuperar-produto-por-id/recuperar-produto-por-id.use-case";
import { RecuperarTodosProdutosUseCase } from "./recuperar-todos-produtos/recuperar-todos-produtos.use-case";
import { InserirProdutoUseCase } from "./inserir-produto/inserir-produto.use-case";

const recuperarCategoriaPorIdUseCase = new RecuperarCategoriaPorIdUseCase(categoriaRepositorio);
const recuperarTodasCategoriasUseCase = new RecuperarTodasCategoriasUseCase(categoriaRepositorio);
const inserirCategoriaUseCase = new InserirCategoriaUseCase(categoriaRepositorio);
const atualizarCategoriaUseCase = new AtualizarCategoriaUseCase(categoriaRepositorio);
const deletarCategoriaUseCase = new DeletarCategoriaUseCase(categoriaRepositorio);

const recuperarTodosProdutosUseCase = new RecuperarTodosProdutosUseCase(produtoRepositorio);

const recuperarProdutoPorIdUseCase = new RecuperarProdutoPorIdUseCase(produtoRepositorio);
const inserirProdutoUseCase = new InserirProdutoUseCase(produtoRepositorio);

export { 
     recuperarCategoriaPorIdUseCase,
     recuperarTodasCategoriasUseCase,
     inserirCategoriaUseCase,
     atualizarCategoriaUseCase,
     deletarCategoriaUseCase,
     recuperarProdutoPorIdUseCase,
     recuperarTodosProdutosUseCase,
     inserirProdutoUseCase
    }