function soma(a, b){
    return a+b;
}

console.log(soma(3,5));

function multiplicarTresNumeros(x, y, z){
    return x * y * z;
}

const mult = multiplicarTresNumeros(5,4,8);
console.log(multiplicarTresNumeros(2,3,4));
console.log("O valor da multiplicação é de: " +mult);

function podeDirigir(idade, cnh){
    if (idade >= 18 && cnh == true){
        console.log("Pode dirigir");
    }else{
        console.log("Não pode dirigir");
    }
}

console.log(podeDirigir(19, true));//testando a função de dirigir
console.log(podeDirigir(17,true));
console.log(podeDirigir(50,0));
console.log(podeDirigir(33,1));