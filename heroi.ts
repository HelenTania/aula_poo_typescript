class Heroi{
    public nome: string = ''
    forca: number = 100
    nivel: number = 1
     constructor(nome:string, forca: number){

        this.nome = nome
        this.forca = forca
        this.nivel = 1
     }




    olharDestemido(){
        console.log("Olhar Destemido!!!")



    }
}
  let heroi1 = new Heroi("Perseu", 300)
  console.log(heroi1)
  
  let heroi2 = new Heroi("Seiya",1000)
   console.log(heroi2)