import { Categoria } from '@modules/catalogo/domain/categoria/categoria.entity';
import { Produto } from '@modules/catalogo/domain/produto/produto.entity';
import { StatusProduto } from '@modules/catalogo/domain/produto/produto.types';
import { CategoriaPrismaRepository } from '@modules/catalogo/infra/database/categoria.prisma.repository';
import { ProdutoPrismaRepository } from '@modules/catalogo/infra/database/produto.prisma.repository';
import { DomainException } from '@shared/domain/domain.exception';
import { prisma } from '@main/infra/database/orm/prisma/client';
import { categoriaRepositorio as categoriaRepo } from '@modules/catalogo/infra/database';
import { produtoRepositorio as produtoRepo } from '@modules/catalogo/infra/database';
import { atualizarCategoriaUseCase, deletarCategoriaUseCase, inserirCategoriaUseCase, recuperarCategoriaPorIdUseCase, recuperarProdutoPorIdUseCase, recuperarTodasCategorias } from '@modules/catalogo/application/use-case';


async function main() {
    
    prisma.$connect().then(
        async () => {
            console.log('Postgres Conectado');
        }
    );

    ////////////////////////////////
    //Recuperar Categoria por UUID//
    ////////////////////////////////
   
     //console.log(await recuperarCategoriaPorIdUseCase.execute("26569beb-ddf9-4100-b40b-933f0a255fef"));

    
    //console.log(categoriaRecuperada);

    /////////////////////////////////
    //Recuperar Todas as Categorias//
    /////////////////////////////////
    
    //console.log(await recuperarTodasCategorias.execute());
    //const todasCategorias: Array<Categoria> = await categoriaRepo.recuperarTodos();

    //console.log(todasCategorias);

    ////////////////////////////////
    //Verifica se Existe Categoria//
    ////////////////////////////////
    
    //const existeCategoria: boolean = await categoriaRepo.existe("7061d559-ab25-4182-98ce-170afdf2acd2");

    //console.log(existeCategoria);

    /////////////////////
    //Inserir Categoria//
    /////////////////////

    // console.log(await inserirCategoriaUseCase.execute({
    //     nome: "Banho"
    // }));
    
    // const categoria: Categoria = Categoria.criar({
    //     nome:'Cozinha'
    // });     

    // const categoriaInserida = await categoriaRepo.inserir(categoria);

    // console.log(categoriaInserida);

    ///////////////////////
    //Atualizar Categoria//
    ///////////////////////
    
    // console.log(await atualizarCategoriaUseCase.execute({
    //     id:"bd62a95c0-6bb6-485a-8555-4f392bdcf4e8",
    //     nome: "Banho"
    // }));
    //const categoria: Categoria = Categoria.recuperar({
    //    id: "5ccdd6ab-d043-42f0-937b-1260fe47886a",
    //    nome: "Cozinha Americana"
    //});     

   //const atualizouCategoria: boolean = await categoriaRepo.atualizar(categoria.id,categoria);

    //console.log(atualizouCategoria)

    /////////////////////
    //Deletar Categoria//
    /////////////////////
    
    //const categoriaDeletada: boolean = await categoriaRepo.deletar('5ccdd6ab-d043-42f0-937b-1260fe47886a');
    
    //console.log(categoriaDeletada);

    ////////////////////////////////
	//Recuperar Produto por UUID//
	////////////////////////////////

    //  console.log( await recuperarProdutoPorIdUseCase.execute("9a26729c-581d-4369-9fbe-3e312e8a75e9"));
		
	//const produtoRecuperado: Produto | null = await produtoRepo.recuperarPorUuid("7f35c7f4-ce26-4503-bfce-0afd937adfb8");

	//console.log(produtoRecuperado);

    //console.log(produtoRecuperado?.estaDeletado());

    ///////////////////
	//Inserir Produto//
	///////////////////
	
    
    // const categoria01: Categoria = Categoria.recuperar({
    //     id: "26569beb-ddf9-4100-b40b-933f0a255fef",
    //     nome: 'Cozinha'
    // });     

    // const categoria02: Categoria = Categoria.recuperar({
    //     id: "d5093d61-e5a0-4a69-b56f-b29e11c17615",
    //     nome: 'Banho'
    // })

    // const produto: Produto = Produto.criar({
    //     nome:'Pano de Pratro',
    //     descricao:'Algodão fio 60',
    //     valor:30,
    //     categorias:[categoria01, categoria02]
    // });

	// const produtoInserido = await produtoRepo.inserir(produto);

	// console.log(produtoInserido);
    
 
    

    /////////////////////////////////////////////////
	//Recuperar Todos os Produtos e Suas Categorias//
	/////////////////////////////////////////////////
		
	// const todosProdutos: Array<Produto> = await produtoRepo.recuperarTodos();

	// console.log(todosProdutos);

    ///////////////////////////////////////////////
	//Atualizar Produto - Sem Atulizar Categorias//
	///////////////////////////////////////////////

    /*
    const produto = {
        id: "7d6a14d5-02f3-4b6d-8cb8-8601ff151f10",
        nome: "Toalha de Cozinha",
        descricao: "toalha de algodão",
        valor: 200
    }; 

    const atualizouProduto: boolean = await produtoRepo.atualizar(produto.id,produto);
    
    */
    ///////////////////
	//Deletar Produto//
	///////////////////

	// console.log( await deletarCategoriaUseCase.execute("b5b8d72c-aa7c-4d13-a44f-4b3d8964c086"));	
	//const produtoDeletado: boolean = await produtoRepo.deletar("7d6a14d5-02f3-4b6d-8cb8-8601ff151f10");

	//console.log(produtoDeletado);

    ////////////////////////////////////////////
	//Adicionar e Remover Categoria ao Produto//
	////////////////////////////////////////////
    
    //const produtoRecuperado: Produto | null = await produtoRepo.recuperarPorUuid("737f111b-eba1-457f-9552-5b5f28511d5d");

    //const categoriaRecuperada: Categoria | null = await categoriaRepo.recuperarPorUuid("03f890b0-684a-44ba-a887-170e26bb2cd2");

    //if (produtoRecuperado && categoriaRecuperada){

        //if (produtoRecuperado.adicionarCategoria(categoriaRecuperada)) {
        //    await produtoRepo.adicionarCategoria(produtoRecuperado,categoriaRecuperada);
        //}

       //if (produtoRecuperado.removerCategoria(categoriaRecuperada)) {
        //    await produtoRepo.removerCategoria(produtoRecuperado,categoriaRecuperada);
        //}

    //}

    //////////////////////////
    //Alterar Status Produto//
    //////////////////////////

    //const produtoRecuperado: Produto | null = await produtoRepo.recuperarPorUuid("ace8780f-1aac-4219-9b36-e13b60159e4b");

    //if (produtoRecuperado) {
    //    const alterouStatusProduto: boolean = await produtoRepo.alterarStatus(produtoRecuperado,StatusProduto.ATIVO)
    //    console.log(alterouStatusProduto);
    //}

    ////////////////////////////////////
	//Recuperar Produtos por Categoria//
	////////////////////////////////////
			
	//const todosProdutosPorCategoria: Array<Produto> = await produtoRepo.recuperarPorCategoria("03f890b0-684a-44ba-a887-170e26bb2cd2");

	//console.log(todosProdutosPorCategoria);
    

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (error) => {
       if (error instanceof DomainException) {
           console.log('Execeção de Dóminio');
           console.log(error.message);
       }
       else {
           console.log('Outras Exceções');
           console.log(error.message);
       }
       await prisma.$disconnect()
       process.exit(1)
   })