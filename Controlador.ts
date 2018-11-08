import {Usuario} from "./Usuario";
import {Grupo} from "./Grupo";
import {Menssagem} from "./Menssagem";

export class Controlador{

public testarGrupos(grupos:Grupo[]):bolean{
  for(let g of this.gurpos){
    if(let g.getGrupos() == grupos){
        return g;
    }
    return false;
  }
  }
public testarUsuarios(usuarios:Usuario[]):bolean{
for(let n of this.usuarios){
    if(let n.getUsuarios() == usuarios){
        return n;
    }
      return false;
}
}
public addUserGrupo(pessoa: string, grupo:string):number{

  let b: Usuario = this.testarUsuarios(pessoa);
  let c: Grupo = this.testarGrupos(grupo);

if(b == undefined){
    return 1;
}else if(g == undefined){
    return 2;
}else if(g.testarUsuarios(pessoa)!= undefined){
    return 3;
}else{
  p.setGrupos().push(g);
  g.getUsuarios().push(p);
  return 0;
}
}
public enviarMensagem( texto: string,dono: Usuario,viu: Array<Usuario>){
  let p:Usuario = this.testarUsuarios(pessoa);
  let g : Grupo = this.testarGrupos(grupo);

  if(p == undefined){
    return 1;
 } else if(g == undefined){
    return 2;
  }else if(g.testarUsuarios(pessoa)== undefined){
    return 3;
  }else{
    g.getMsg().push(new Menssagem(p,texto));
    return 0;
  }
  
  
}
}
