import { Entity } from "@shared/domain/entity";
import { CriarUsuarioProps, IUsuario, RecuperarUsuarioProps, TipoUsuario } from "./usuario.types";
import { UsuarioExceptions } from "./usuario.exception";

class Usuario extends Entity<IUsuario> implements IUsuario {

    ///////////////////////
    //Atributos de Classe//
    ///////////////////////

    private _nome: string;
    private _email: string;
    private _senha: string;
    private _tipo: TipoUsuario;
    private _dataCriacao?: Date | undefined;
    private _dataAtualizacao?: Date | undefined;
    private _dataExclusao?: Date | null | undefined;

    ////// Constantes ////////
    public static readonly TAMANHO_MINIMO_NOME = 3;
    public static readonly TAMANHO_MAXIMO_NOME = 50;

    ///////////////
    //Gets e Sets//
    ///////////////

    public get nome(): string {
        return this._nome;
    }

    private set nome(nome: string) {

        const tamanhoNome = nome.trim().length;

        if (tamanhoNome < Usuario.TAMANHO_MINIMO_NOME) {
            throw new UsuarioExceptions.NomeUsuarioTamanhoMinimoInvalido;
        }
        if (tamanhoNome > Usuario.TAMANHO_MAXIMO_NOME) {
            throw new UsuarioExceptions.NomeUsuarioTamanhoMaximoInvalido;
        }

        this._nome = nome;
    }

    public get email(): string {
        return this._email;
    }

    private set email(email: string) {

        const regexp: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!regexp.test(email)) {
            throw new UsuarioExceptions.EmailInvalido;
        }

        this._email = email;
    }

    public get senha(): string {
        return this._senha;
    }

    public set senha(senha: string) {
        this._senha = senha;
    }

    public get tipo(): TipoUsuario {
        return this._tipo;
    }

    public set tipo(tipo: TipoUsuario) {
        this._tipo = tipo;
    }

    public get dataCriacao(): Date | undefined {
        return this._dataCriacao;
    }

    private set dataCriacao(value: Date | undefined) {
        this._dataCriacao = value;
    }

    public get dataAtualizacao(): Date | undefined {
        return this._dataAtualizacao;
    }

    private set dataAtualizacao(value: Date | undefined) {
        this._dataAtualizacao = value;
    }

    public get dataExclusao(): Date | null | undefined {
        return this._dataExclusao;
    }

    private set dataExclusao(value: Date | null | undefined) {
        this._dataExclusao = value;
    }

    //////////////
    //Construtor//
    //////////////

    private constructor(usuario: IUsuario) {
        super(usuario.id);
        this.nome = usuario.nome;
        this.email = usuario.email;
        this.senha = usuario.senha;
        this.tipo = usuario.tipo;
        this.dataCriacao = usuario.dataCriacao;
        this.dataAtualizacao = usuario.dataAtualizacao;
        this.dataExclusao = usuario.dataExclusao;
    }


    /////////////////////////
    //Static Factory Method//
    /////////////////////////

    public static criar(props: CriarUsuarioProps): Usuario {
        return new Usuario(props);
    }

    public static recuperar(props: RecuperarUsuarioProps): Usuario {
        return new Usuario(props);
    }

}

export { Usuario };