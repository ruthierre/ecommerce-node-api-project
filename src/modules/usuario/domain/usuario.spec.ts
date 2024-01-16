import { faker } from '@faker-js/faker';
import { beforeAll, describe, expect, test } from "vitest";
import { CriarUsuarioProps, TipoUsuario } from './usuario.types';
import { Usuario } from './usuario.entity';
import { UsuarioExceptions } from './usuario.exception';

let nomeUsuarioValido : string;
let nomeUsuarioTamanhoMinimoInvalido: string;
let nomeUsuarioTamanhoMaximoInvalido:string;
let emailValido: string;
let emailInvalido:string;
let senhaValida: string;
let tipoValido: TipoUsuario;

beforeAll(async ()=> {
    nomeUsuarioValido = faker.string.alpha({length:{min:3, max:50} });
    nomeUsuarioTamanhoMinimoInvalido = faker.string.alpha({length:{min:0,max:2}});
    nomeUsuarioTamanhoMaximoInvalido = faker.string.alpha({length:{min:51,max:51}});

    emailValido = faker.internet.exampleEmail();
    emailInvalido = faker.string.alpha();
    
    senhaValida = faker.internet.password();
    tipoValido = faker.helpers.enumValue(TipoUsuario)
    
})

describe('Entidade de Domínio: Usuário', ()=> {
    describe('Criar Usuário', ()=> {
        test('deve criar um usuário válido', async () => {
            const usuarioValido: CriarUsuarioProps = {
                nome: nomeUsuarioValido,
                email: emailValido,
                senha: senhaValida,
                tipo: tipoValido,
            }

            expect(Usuario.criar(usuarioValido))
                .to.be.instanceOf(Usuario);
        });

        test('Não deve criar um usuário com nome minimo inválido',async () => {
            const usuarioNomeMinimoInvalido: CriarUsuarioProps = {
                nome: nomeUsuarioTamanhoMinimoInvalido,
                email: emailValido,
                senha: senhaValida,
                tipo: tipoValido
            }

            expect(() => Usuario.criar(usuarioNomeMinimoInvalido))
                .toThrowError(UsuarioExceptions.NomeUsuarioTamanhoMinimoInvalido);
        });

        test('Não deve criar um usuario com nome máximo Inválido',async () => {
            const usuarioNomeMaximoInvalido: CriarUsuarioProps = {
                nome: nomeUsuarioTamanhoMaximoInvalido,
                email: emailValido,
                senha: senhaValida,
                tipo: tipoValido
            }

            expect(()=> Usuario.criar(usuarioNomeMaximoInvalido))
                .toThrowError(UsuarioExceptions.NomeUsuarioTamanhoMaximoInvalido);
        });

        test('Não deve criar um usuário com email inválido',async () => {
            const usuarioEmailInvalido: CriarUsuarioProps = {
                nome:nomeUsuarioValido,
                email: emailInvalido,
                senha: senhaValida,
                tipo: tipoValido
            }

            expect(()=> Usuario.criar(usuarioEmailInvalido))
                .toThrowError(UsuarioExceptions.EmailInvalido);
        });
    });
})