export class Recipes{
  public rname:string;
  public description:string;
  public imgPath:string;

  constructor(nm:string,desc:string,path:string){
    this.rname=nm;
    this.description=desc;
    this.imgPath=path;
  }
}
