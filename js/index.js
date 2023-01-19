//let var const
//const genera una constante
//var let generan una variable
//$sccope= fragmento de codigo
//$scope esto es uno
function suma(){
    const numero = 2;
    let numero2=4;
//var no es de tipo scope, por lo que s la declaras en un $scope no se puede volver a declarar en otro $scope
    var numero3=4;
    //$scope primero
    function sumaSegunda(){
        const nuumero =3;
        let numero2=4;
        //error en el codigo, variable ya declarada
        var numero3=4;
        //$scope segundo
    }
}
//let y const son variable de tipo $scope constantes
//si en otro .js vuelves a utilizar una variable var, dara error, porque junta todo en un solo archivo para el navegador

//arrow function



//manera cotidiana de siempre
function suma(numero1,numero2){
    return numero1+numero2
}

//otro paso
const suma = function(numero1,numero2){
    return numero1+numero2
}

//mas moderno
const suma = (numero1,numero2)=>numero1+numero2
    //un arrow function tiene un return implicito

//template string
const name= "kevin"
const surname= "guzman"
const lastname= "diaz"
const fullname = name + '' + surname + '' + lastname
const fullname2= `${name} ${surname} ${lastname}`// utilizando template string

const person = {
    name:'',
    surnname:'',
    lastname:null
}

(()=>{//arrow function autoejecutable// funcion anonima autoejecutable
    const name=person.name.toString();//es muy obvio para la logica, pero no para el IDE
    const name2=`${person.name} ${person.lastname ? person.lastname:''}`//hace lo mismo que arriba convirtiendo a string
    // ? indica el true y los dos puntos indica el false en la linea de arriba

})()
//array//no es necesario indicar cuantas posiciones debe tener mi array
const roles = [1,2,3,{name:'',surname:''}]//esto es incorrecto a nivel limpieza en el codigo
//undifined es un objeto existente pero no definido
//null es un objeto definido pero con valor nulo

//arrayList
const roles2 = [
    {
        key:'ADMIN',
        name:'Super Administrador'
    },
    {
        key:'USER',
        name:'usuario'
    }
]
//list
const roles3 = {}

//consumo de dom con javascript

//prototype
//psuh, splice, indexOf, find, filter, map, foreach, lenght,etc

//manera mas limpia de hacerlo
roles.forEach((element,index) =>{
    console.log(element.name);
})
//es lo mesmo
//Como siempre se hace
for(let i=0;i<roles.length;i++){

}

do{

}while()

//desestructuracion de objetos
const person2= {
    name:'kevin',
    age:20,
    address:{
        street:'Jardines de jiutepec',
        number: 141
    }
}

//manera tipica de acceder a un objeto
console.log(person2.name);
console.log(person2.address.street);

(()=>{//SOLOPARA QUE NO ESTE JODIENDO EL SCOPE
    const {name,address:{street}}= person2
    console.log(street);
})
