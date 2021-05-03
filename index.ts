import { Mensagens } from "./mensagem";
import { MensagemEmail } from "./mensagem.email";
import { MensagemIsntantanea } from "./mensagem.instantanea";

const mensagem: Mensagens = new Mensagens();
mensagem.enviar();

let mensagem1 = new MensagemIsntantanea();
mensagem1.enviar();

let mensagem2 = new MensagemEmail();
mensagem2.enviar();
