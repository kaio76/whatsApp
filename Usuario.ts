import './style.css';
import{Grupo} from "./Grupo";
export class Usuario{
  private nome : string;
  private grupos : Array<Grupo>;
  constructor(nome:string, grupos :Array<Grupo>){
    this.nome = nome;
    this.grupos = grupos;
  }
  public getNome(): string{
    return this.nome;
}public setNome(nome:string):void{
    this.nome = nome;
} public getGrupos(): Array<Grupo>{
    return this.grupos;
}public setGrupos(grupos: Array<Grupo>):void{
    this.grupos = grupos;
  }
  public toString():string{
    return this.nome;
  }


}
