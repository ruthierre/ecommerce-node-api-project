import { recuperarCategoriaPorIdUseCase } from "@modules/catalogo/application/use-case";
import { RecuperarCategoriaPorIdExpressController } from "./recuperar-categoria-por-id.express.controller";

const recuperarCategoriaPorIdController = new RecuperarCategoriaPorIdExpressController(recuperarCategoriaPorIdUseCase);

export {
    recuperarCategoriaPorIdController
}