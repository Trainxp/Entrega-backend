 
 
class Usuario {
  	
   constructor (nombre,apellido,libros =[],mascotas=[]) {
     this.nombre = nombre;
     this.apellido = apellido;
      this.libros = libros;
      this.mascotas= mascotas;
     
     
     
   }
  getFullName(){
    return `${this.nombre}  ${this.apellido}` ;
  }
  
  
  addMascotas(mascota) {
    this.mascotas.push(mascota);
  }
  countMascotas(){
    return this.mascotas.length;
  }
  
  addBook(libro, autor){
    	this.libros.push({libro,autor});
    
  }
  
  getBookNames(){
    return this.libros.map((autor)=>autor=autor.autor)
  }
  
  
  
}


const usuario1 = new Usuario ( "Luis", "Morales", [{libro:"Berserk",autor :"Kentaro Miura"}] , ["gato"]  )

usuario1.addMascotas("perro")

console.log(usuario1.getFullName())
console.log(usuario1.countMascotas())
usuario1.addBook( "Monster" , "Naoki Urasawa")
console.log(usuario1.getBookNames())



console.log(usuario1)