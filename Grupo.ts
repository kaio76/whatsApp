import{Usuario} from "./Usuario";
import{Menssagem} from "./Menssagem";
export class Grupo{
  private nome : string;
  private usuarios : Array<Usuario>;
  private msg : Array<Menssagem>;

  constructor(nome:string, usuarios : Array<Usuario>,msg : Array<Menssagem>){
    this.nome = nome;
    this.usuarios = usuarios;
  }
  public getNome(): string{
    return this.nome;
}public setNome(nome:string):void{
    this.nome = nome;
} public getUsuarios(): Array<Usuario>{
    return this.usuarios;
}public setUsuarios(usuarios:Array<Usuario>):void{
    this.usuarios = usuarios;
  } public getMsg(): Array<Menssagem>{
    return this.msg;
}public setMsg(msg:Array<Menssagem>):void{
    this.msg =msg;
  }
  public toString():string{
    return this.nome;
  }
}
