// import { faker } from '@faker-js/faker';
// import { beforeAll, describe, expect, test } from "vitest";
// import { CriarUsuarioProps } from './usuario.types';

// let nomeUsuarioValido : string;
// let nomeUsuarioTamanhoMinimoInvalido: string;
// let nomeUsuarioTamanhoMaximoInvalido:string;
// let emailValido: string;
// let emailInvalido:string;
// let senhaValida: string;
// let tipoValido: string;

// beforeAll(async ()=> {
//     nomeUsuarioValido = faker.string.alpha({length:{min:3, max:50} });
//     nomeUsuarioTamanhoMinimoInvalido = faker.string.alpha({length:{min:0,max:2}});
//     nomeUsuarioTamanhoMaximoInvalido = faker.string.alpha({length:{min:51,max:51}});

//     emailValido = faker.internet.email();
//     emailInvalido = faker.string.alpha();
    
//     senhaValida = faker.internet.password();
//     tipoValido = faker.string.alpha({casing:"upper", length:{min:7, max:13}});
// })

// describe('Entidade de Domínio: Usuário', ()=> {
//     describe('Criar Usuário', ()=> {
//         test('deve criar um usuário válido', async () => {
//             const usuarioValido: CriarUsuarioProps = {
//                 nome: nomeUsuarioValido,
//                 email: emailValido,
//                 senha: senhaValida,
//                 tipo: tipoValido
//             }
//         })
//     })
// })