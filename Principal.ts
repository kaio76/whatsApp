import {Usuario} from "./Usuario";
import {Grupo} from "./Grupo";
import {Menssagem} from "./Menssagem";
import {Controlador} from "./Controlador";

let usuarios : Arraylist<Usuario>=[];
let grupos : Arraylist<Grupo>=[];
let msg : Arraylist<Menssagem>=[];

let opcao: string = readline.question("Escolha uma opção\n"+
"addUser - Adicionar um Usuario\n"+
"allUser - Mostar todos os Usuarios\n"+
"newChat - Adicionar um Grupo\n"+
"chats - Mostrar Grupo que um usuario pertence"+
"allChat" - "Mostrar todos os grupos\n"+                        
"invite - Convidar pessoas para o Grupo\n"+
"leave - Deletar um usuario de um Grupo\n"+
"zap - Mandar menssagem\n"+
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
   let nom : string = readline.question("Digite o nome");
   let grupo : string = readline.question(" Digite o nome do Grupo");
   if(this.testarUsuarios(usuarios:Usuario[])!= undefined){
      console.log("Usuario invalido");
   }else if(this.testarGrupos(grupos:Grupo[])!= undefined){
      console.log("Grupo invalido");
      {
   }else{
    let grup : Grupo = new Grupo(nom,grupo);
    grupos.push(grup);
    console.log("Grupo criado com sucesso")}
  break;
  case "allChat":
    for(let c of grupos){
       console.log(c.toString, " ");
    }
    break;

  case "chats":
 
  break;

  case "invite":
     addUserGrupo(res);
     if(res == 0){
       console.log("Inserido com sucesso");
     }else if(res == 1){
       console.log("Pessoa não existe");
     }else if(res == 2){
       console.log("grupo não existe");
     }else if(res == 3){
       console.log("Pessoa não existe no grupo");
     }
  break;

  case "leave":
 
  break;

  case "zap":
    enviarMenssagem(res);
     if(res == 0){
       console.log("Menssaem com sucesso");
     }else if(res == 1){
       console.log("Pessoa não existe");
     }else if(res == 2){
       console.log("grupo não existe");
     }else if(res == 3){
       console.log("Pessoa não existe no grupo");
     }

  break;
  {

