import { Mensagens } from "./mensagem";

export class MensagemIsntantanea extends Mensagens {
  enviar() {
    super.enviar();
    console.log("Mensagem Instanea Enviada");
  }
}
