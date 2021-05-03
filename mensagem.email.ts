import { Mensagens } from "./mensagem";

export class MensagemEmail extends Mensagens {
  enviar() {
    super.enviar();
    console.log("Mensagem E-mail enviada");
  }
}
