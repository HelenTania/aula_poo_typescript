abstract class Personagem{

public nome: string
public nivel: number
public forca: number
public vida: number

constructor(nome: string, forca: number, vida: number){

    this.nome = nome
    this.forca = forca
    this.nivel = 1
    this.vida = vida 
}


 abstract olhar(): void

public ataque(): void{
    console.log("atacando")     
}
public exalar(): void{
    console.log("exlando")

}

}