export class Mensagens {
  private _conteudo: string;

  public get conteudo(): string {
    return this._conteudo;
  }
  public set conteudo(_conteudo: string) {
    this._conteudo = _conteudo;
  }

  enviar() {
    console.log("mensagem Enviada");
  }
}
