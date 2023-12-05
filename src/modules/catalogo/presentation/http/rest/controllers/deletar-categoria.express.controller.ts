import { DeletarCategoriaUseCase } from "@modules/catalogo/application/use-case/deletar-categoria/deletar-categoria.use-case";
import { ExpressController } from "@shared/presentation/http/express.controller";
import { Response, Request, NextFunction } from "express";

class deletarCategoriaExpressController extends ExpressController {
    _deletarCategoriaUseCase: DeletarCategoriaUseCase;

    constructor(deletarCategoriaUseCase: DeletarCategoriaUseCase) {
        super();
        this._deletarCategoriaUseCase = deletarCategoriaUseCase;
        
    }

    async deletar(request: Request, response: Response, next: NextFunction) {
        try {
           const uuid:string = request.params.id;
           const categoriaDeletada: Boolean = await this._deletarCategoriaUseCase.execute(uuid);
           this.sendSuccessResponse(response, categoriaDeletada); 

        } catch (error) {
            next(error);
        }
    }
}

export { deletarCategoriaExpressController};