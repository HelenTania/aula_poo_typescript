class Heroi extends Personagem{

    comportamento: string
     constructor(nome:string, forca: number, vida:number, comportamento: string){
      super(nome,forca,vida)
        this.comportamento = comportamento
     }




    olhar(){
        console.log("Olhar Destemido!!!")



    }
}
  let heroi1 = new Heroi("Perseu",100,300, "veloz")
  heroi1.ataque()
  console.log(heroi1)
  
  let heroi2 = new Heroi("Seiya",250,1000, " ferocidade")
  heroi2.exalar()
   console.log(heroi2)