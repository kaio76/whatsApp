import {Usuario} from "./Usuario";
import {Grupo} from "./Grupo";
import {Menssagem} from "./Menssagem";

let usuarios : Arraylist<Usuario>=[];
let grupos : Arraylist<Grupo>=[];

let opcao: string = readline.question("Escolha uma opção\n"+
"addUser - Adicionar um Usuario\n"+
"allUser - Mostar todos os Usuarios\n"+
"newChat - Adicionar um Grupo\n"+
"chats - Mostrar Grupo que um usuario pertence"+
"invite - Convidar pessoas para o Grupo\n"+
"leave - Deletar um usuario de um Grupo\n"+
"zap - Mandar menssagem\n"+
"notify - Mostar as notificações\n"+
"ler - Ler as menssagens\n"+
"users - Mostrar os usuarios de um Grupo");

switch(opcao){
  case "addUser":
  let nome : string = readline.question(" Digite o nome");

  let user : Usuario = new Usuario(nome);
    usuarios.push(user);
  break;

  case "allUser":
  for(let i of usuarios){
    console.log(i.toString, " ");
  }
  break;
  
  case "newChat":
   let nom : string = readline.question(" Digite o nome");
   let grupo : string = readline.question(" Digite o nome do Grupo");

  let grup : Grupo = new Grupo(nom,grupo);
    grupos.push(grupo);
  break;

  case "chats":
  for(let i of usuarios){
    console.log(i.toString, " ");
  }
  break;

  case "invite":
  for(let i of usuarios){
    console.log(i.toString, " ");
  }
  break;

  case "leave":
  for(let i of usuarios){
    console.log(i.toString, " ");
  }
  break;

  case "zap":
  for(let i of usuarios){
    console.log(i.toString, " ");
  }
  break;
  {
