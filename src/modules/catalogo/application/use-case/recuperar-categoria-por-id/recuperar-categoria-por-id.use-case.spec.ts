import { Categoria } from "@modules/catalogo/domain/categoria/categoria.entity";
import { ICategoriaRepository } from "@modules/catalogo/domain/categoria/categoria.repository.interface";
import { afterEach, beforeAll, describe, expect, test, vi } from "vitest";
import { MockProxy, mock, mockReset } from "vitest-mock-extended";
import { RecuperarCategoriaPorIdUseCase } from "./recuperar-categoria-por-id.use-case";
import { ICategoria } from "@modules/catalogo/domain/categoria/categoria.types";
import { CategoriaApplicationExceptions } from "../../exception/categoria.application.exception";

let categoriaRepositorioMock: MockProxy<ICategoriaRepository<Categoria>>;;
let recuperarCategoriaPorIdUseCase: RecuperarCategoriaPorIdUseCase;

describe('Caso de Uso: Recuperar Categoria por ID', () => {

    beforeAll(async () => {
        categoriaRepositorioMock = mock<ICategoriaRepository<Categoria>>();
        recuperarCategoriaPorIdUseCase = new RecuperarCategoriaPorIdUseCase(categoriaRepositorioMock);
    });

    afterEach(() => {
        vi.restoreAllMocks();
        mockReset(categoriaRepositorioMock);
    });

    test('Deve Recuperar Uma Categoria por UUID', async () => {

        //Dado (Given)
        const categoriaInputDTO = {
            id: "26569beb-ddf9-4100-b40b-933f0a255fef",
            nome: "Sala"
        };

        categoriaRepositorioMock.existe.mockResolvedValue(true);

        categoriaRepositorioMock.recuperarPorUuid.mockResolvedValue(Categoria.recuperar(categoriaInputDTO));

        //Quando (When)
        const categoriaOutputDTO: ICategoria = await recuperarCategoriaPorIdUseCase.execute(categoriaInputDTO.id);

        //Então (Then)
        expect(categoriaOutputDTO).toEqual(categoriaInputDTO);
        expect(categoriaRepositorioMock.existe).toHaveBeenCalledTimes(1);
        expect(categoriaRepositorioMock.recuperarPorUuid).toHaveBeenCalledTimes(1);

    });

    test('Deve Lançar uma Exceção ao Tentar Recuperar uma Categoria que Não Existe', async () => {

        //Dado (Given)
        const categoriaInputDTO = {
            id: "26569beb-ddf9-4100-b40b-933f0a255fff",
            nome: "cama"
        };
	
        categoriaRepositorioMock.existe.mockResolvedValue(false);

        //Quando (When) e Então (Then)
        await expect(() => recuperarCategoriaPorIdUseCase.execute(categoriaInputDTO.id))
            .rejects
            .toThrowError(CategoriaApplicationExceptions.CategoriaNaoEncontrada);

    });

});