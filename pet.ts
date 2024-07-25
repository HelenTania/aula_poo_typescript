class Pet extends Personagem{

        raca: string
        comportamento: string
        
      constructor(nome:string, forca:number, vida:number, raca:string,comportamento:string){
        super(nome,forca,vida)
        this.raca = raca
        this.comportamento = comportamento

      } 
      olhar(){
        console.log("Olhar quero um agrado!!!")

      }

    }
      

      let pet1 = new Pet("tikinho vida mansa",100,100,"preguiça","dormindo")
      pet1.olhar()
      console.log(pet1)
