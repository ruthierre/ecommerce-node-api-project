import { atualizarCategoriaUseCase } from "@modules/catalogo/application/use-case";
import { AtualizarCategoriaUseCase } from "@modules/catalogo/application/use-case/atualizar-categoria/atualizar-categoria.use-case";
import { RecuperarCategoriaProps } from "@modules/catalogo/domain/categoria/categoria.types";
import { ExpressController } from "@shared/presentation/http/express.controller";
import { NextFunction , Request, Response} from "express";

class atualizarCategoriaExpressController extends ExpressController {
    private _atualizarCategoriaUseCase: AtualizarCategoriaUseCase;

    constructor(atualizarCategoria: AtualizarCategoriaUseCase) {
        super();
        this._atualizarCategoriaUseCase = atualizarCategoriaUseCase;
    }

    async atualizar(request: Request, response: Response, next: NextFunction) {
        try {
            const categoriaInputDTO: RecuperarCategoriaProps = request.body as RecuperarCategoriaProps;
            const categoriaAtualizada: Boolean = await this._atualizarCategoriaUseCase.execute(categoriaInputDTO);
            this.sendSuccessResponse(response, categoriaAtualizada);

        } catch (error) {
            next(error);
        }
    }
}

export { atualizarCategoriaExpressController}