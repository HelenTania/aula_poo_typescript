
   class Monstro extends Personagem{
    
           raca: string = ''
       constructor(nome: string, forca: number, vida: number, raca: string){
        super(nome,forca,vida)
       
         this.raca = raca


       }    
          expelirMiasma(){
        console.log('Expelindo Miasma')
      }  
          olhar(){
        console.log('Olhar Assustador')    
          }
   }
      let monstro1 = new Monstro("Infamm",150,250,'Metamorfo')
      monstro1.expelirMiasma()
      console.log(monstro1)

      let monstro2 = new Monstro("Mitgard",300,100,'Godzilla')
      monstro2.exalar()
      console.log(monstro2)

      let monstro3 = new Monstro("Darkwall",100,150,"Vampiro")
      monstro3.ataque()
      console.log(monstro3)