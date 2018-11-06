import {Usuario} from "./Usuario";
import {Grupo} from "./Grupo";

export class Menssagem{
  private texto: string;
  private dono: Usuario;
  private viu: Array<Usuario>;
  
  public constructor(texto: string, dono: Usuario, viu: Usuario[]){
    this.texto = texto;
    this.dono = dono;
    this.viu = viu;
  }
  
  public getTexto():string{
      return this.texto;
  }public setTexto(texto:string): void{
      this.texto = texto;
  }public getDono():Usuario{
      return this.dono;
  }public setDono(dono:Usuario):void{
      this.dono= dono;
  }
}
