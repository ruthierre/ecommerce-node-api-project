import { InserirProdutoUseCase } from "@modules/catalogo/application/use-case/inserir-produto/inserir-produto.use-case";
import { CriarProdutoProps, IProduto } from "@modules/catalogo/domain/produto/produto.types";
import { ExpressController } from "@shared/presentation/http/express.controller";
import { NextFunction, Request, Response } from "express";

class InserirProdutoExpressController extends ExpressController {
    private _inserirProdutoUseCase: InserirProdutoUseCase;
    
    constructor(inserirProdutoUseCase: InserirProdutoUseCase) {
        super();
        this._inserirProdutoUseCase = inserirProdutoUseCase;
    }
 
    async inserir(request: Request, response: Response, next: NextFunction) {
      try {
        const produtoInputDTO: CriarProdutoProps = request.body;
        const produtoOutputDTO: IProduto = await this._inserirProdutoUseCase.execute(produtoInputDTO);
        this.sendSuccessResponse(response,produtoOutputDTO);
      } catch (error) {
        next(error);
      }
    }
 
  }

export { InserirProdutoExpressController }
