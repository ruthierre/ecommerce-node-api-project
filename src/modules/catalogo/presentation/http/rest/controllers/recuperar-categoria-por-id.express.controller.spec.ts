import { RecuperarCategoriaPorIdUseCase } from "@modules/catalogo/application/use-case/recuperar-categoria-por-id/recuperar-categoria-por-id.use-case";
import { ICategoria } from "@modules/catalogo/domain/categoria/categoria.types";
import { afterEach, vitest, describe, beforeAll, Mock, expect, vi, test } from "vitest";
import { MockProxy, mock, mockReset } from "vitest-mock-extended";
import { RecuperarCategoriaPorIdExpressController } from "./recuperar-categoria-por-id.express.controller";
import { Request, Response } from "express";


let requestMock: MockProxy<Request>;
let responseMock: MockProxy<Response>
let nextMock: Mock;
let recuperarCategoriaPorIdUseCaseMock: MockProxy<RecuperarCategoriaPorIdUseCase>;
let recuperarCategoriaPorIdController: RecuperarCategoriaPorIdExpressController;

describe('Controller Express: recuperar a categoria por ID',() => {
    beforeAll(async () => {
        requestMock = mock<Request>();
        responseMock = mock<Response>();
        nextMock = vitest.fn();

        recuperarCategoriaPorIdUseCaseMock = mock<RecuperarCategoriaPorIdUseCase>();
        recuperarCategoriaPorIdController = new RecuperarCategoriaPorIdExpressController(recuperarCategoriaPorIdUseCaseMock)
    });

    afterEach( ()=> {
        vi.restoreAllMocks();
        mockReset(requestMock);
        mockReset(responseMock);
        mockReset(recuperarCategoriaPorIdUseCaseMock);
    });

    test('Deve Recuperar uma categoria por UUID',async () => {
        
        // Dado (Given)
        const categoriaInpuntDTO: ICategoria = {
            id: "26569beb-ddf9-4100-b40b-933f0a255fef",
            nome: "Sala"
        }

        requestMock.params.id = categoriaInpuntDTO.id as string;
        recuperarCategoriaPorIdUseCaseMock.execute.mockResolvedValue(categoriaInpuntDTO);
        responseMock.status.mockReturnThis();

        // Quando (When)
        await recuperarCategoriaPorIdController.recuperar(requestMock, responseMock, nextMock);

        //Então
        expect(recuperarCategoriaPorIdUseCaseMock.execute).toHaveBeenCalledWith(categoriaInpuntDTO.id);
    })
});