 class Monstro{
    public nome: string = ''
           forca: number = 70
           nivel: number = 1
           raca: string = ''
       constructor(nome: string, forca: number, raca: string){

        this.nome = nome
        this.forca = forca
        this.nivel = 1
        this.raca = raca


       }    
          expelirMiasma(){
        console.log('Expelindo Miasma')
      }  
   }
      let monstro1 = new Monstro("Infamm",150,'Metamorfo')
      console.log(monstro1)

      let monstro2 = new Monstro("Mitgard",300,'Godzilla')
      console.log(monstro2)

      let monstro3 = new Monstro("Darkwall",100,"Vampiro")
      console.log(monstro3)