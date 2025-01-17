import { CategoriaApplicationExceptions } from "@modules/catalogo/application/exception/categoria.application.exception"; 
import { RecuperarCategoriaPorIdUseCase } from "@modules/catalogo/application/use-case/recuperar-categoria-por-id/recuperar-categoria-por-id.use-case"; 
import { ICategoria } from "@modules/catalogo/domain/categoria/categoria.types";
import { ExpressController } from "@shared/presentation/http/express.controller";
import {  HttpErrors } from "@shared/presentation/http/http.error";
import { NextFunction, Request, Response } from "express";

class RecuperarCategoriaPorIdExpressController extends ExpressController {

    private _recuperarCategoriaPorIdUseCase: RecuperarCategoriaPorIdUseCase;

    constructor(recuperarCategoriaPorIdUseCase: RecuperarCategoriaPorIdUseCase) {
        super();
        this._recuperarCategoriaPorIdUseCase = recuperarCategoriaPorIdUseCase;
    }

    async recuperar(request: Request, response: Response, next: NextFunction) {
        try {
            const uuid:string = request.params.id;
            const categoriaOutputDTO: ICategoria = await this._recuperarCategoriaPorIdUseCase.execute(uuid);
            this.sendSuccessResponse(response,categoriaOutputDTO);
        }
        catch (error:any) {
            console.log(typeof error);
            
            if (error instanceof CategoriaApplicationExceptions.CategoriaNaoEncontrada){
                error = new HttpErrors.NotFoundError({ message: error.message });
                console.log("")
                console.log(error.statusCode)
            }
            next(error);
        }
    }

}

export { RecuperarCategoriaPorIdExpressController }