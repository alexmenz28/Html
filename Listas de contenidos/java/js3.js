const styles = `
  background:linear-gradient(#099e16,#fff, 
  #099e16);
  color:#000;
  padding: 5px 10px;
`;
console.log("%cViva Santa Cruz", styles);


const mensaje = (name = 'Adhemar') => {
  let message = name + ', Hola bienvenido'
  return message
}

console.log(mensaje())
console.log(mensaje('Pedro'))


const nombreCompleto = (firtName, lastName ) => {
  return `${firtName} ${lastName}`
} 
console.log(nombreCompleto('adhemar', 'romero'))

const persona = {
  nombre:'adhemar',
  apellido:'romero',
  edad:'40',
  habilidad:[
    'HTML',
    'CSS',
    'JS'
  ],

  getFullName: function() {
    return `${this.nombre}${this.apellido}`
    },
    'phone number': '76586036'
}



console.log(persona['nombre'])

console.log(persona.apellido)
console.log(persona.getFullName())
persona.habilidad.push('ASTRO')
console.log(persona.habilidad)


const perro={ };

perro.nombre = 'firulais';
perro.patas = '4';
perro.color = 'negro';
perro.edad = '3';

perro.haccerSonido = function(tipoSonido){
  if (tipoSonido === 'ladra'){
    console.log('wau wau');

  }else if ( tipoSonido=== 'alla'){
    console.log('wauuuuuu')
  } else{
    console.log('no es perro')
  }
}

console.log(perro.nombre);
perro.haccerSonido('ladra')


const users = [
  {
    _id: 'ab12ex',
    username: 'Alex',
    email: 'alex@alex.com',
    password: '123123',
    createdAt: '08/01/2020 9:00 AM',
    isLoggedIn: false
  },
  {
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt: '08/01/2020 9:30 AM',
    isLoggedIn: true
  },
]
const singUp = (id, username, email, password) =>{
  const userExiste = users.some(user => user.email===email);


if  (userExiste){
  console.log('Usuario Existe')
} 

};
singUp('fg12cy', 'Asab', 'asasb@asab.com', '123456');