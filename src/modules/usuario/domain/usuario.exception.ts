import { DomainException } from "@shared/domain/domain.exception";

class UsuarioException extends DomainException {
    constructor(message: string = "Erro de Usuário"){
        super(message);
        this.message = message;
        this.name = "UsuarioException";
    }
}

class NomeUsuarioTamanhoMinimoInvalido extends UsuarioException {
    constructor(message:string = "O Tamanho mínimo do nome é inválido."){
        super(message);
        this.message = message;
        this.name = "NomeUsuarioTamanhoMinimoInvalido";
    }
}

class NomeUsuarioTamanhoMaximoInvalido extends UsuarioException {
    constructor(message: string = "O Tamanho máximo do nome de usuário é inválido."){
        super(message);
        this.message = message;
        this.name = "NomeUsuarioTamanhoMaximoInvalido"
    }
}

class EmailInvalido extends UsuarioException {
    constructor(message: string = "O Tipo de email informado é inválido."){
        super(message);
        this.message = message;
        this.name = "EmailInvalido";
    }
}

export const UsuarioExceptions = {
    NomeUsuarioTamanhoMinimoInvalido,
    NomeUsuarioTamanhoMaximoInvalido,
    EmailInvalido
}