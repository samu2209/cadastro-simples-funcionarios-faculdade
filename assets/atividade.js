class Funcionario{
    constructor(nome, idade , cargo , departamento ){
        this.nome = nome ; 
        this.idade = idade ; 
        this.cargo = cargo ;
        this.departamento = departamento ;
    }
    seApresentar(){
        return `${this.nome} tem ${this.idade} anos de idade, atualmente atua no cargo de ${this.cargo} `
    }
    trabalhar(){
        return "colaborar com o crescimento da empresa e cumprir metas do setor"
    }

}
class Gerente extends Funcionario {
    constructor(nome, idade, cargo , departamento){
        super(nome, idade , cargo ,departamento  ) 
        this.departamento = departamento ; 
    }

    gerenciar() {
        return "é responsável por liderar e coordenar equipes, planejar e organizar recursos, tomar decisões estratégicas e garantir que os objetivos da empresa sejam alcançados de forma eficiente"
    }
}
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo , departamento, linguagem){
        super(nome, idade , cargo , departamento) 
        this.linguagem = linguagem ; 
    }

    programar() {
        return "cria, testa e mantém sistemas e softwares, escrevendo código para implementar funcionalidades e solucionar problemas, atendendo às necessidades técnicas e de usuários"
    }
}

const funcionariosCadastrados = [] ; 
const gerentesCadastrados = [] ; 
const desenvolvedoresCadastrados = [] ;

const funcionarioUm = new Funcionario("fulano" , 18 , "analista") ; 
const gerenteUm = new Gerente("ciclano" , 37 , "gerente", "RH") ; 
const desenvolvedorUm = new Desenvolvedor("beltrano" , 33 , "desenvolvedor Java" , "Java" )


const btnEnviar = document.querySelector("#btn-enviar") ; 
const formulario = document.getElementById("meu-formulario")


formulario.addEventListener("submit" , (event) => {
    event.preventDefault();
})
btnEnviar.addEventListener("click" , cadastroFuncionario)

function cadastroFuncionario(){
    
    let nome = document.getElementById("nome").value ; 
    let idade = document.getElementById("idade").value ;
    let cargo = document.getElementById("cargo").value ;
    let departamento = document.getElementById("departamento").value ;
    let linguagemProgramacao = document.getElementById('linguagem-programacao').value ; 
    try{
        if(nome === "" || idade == ""){
            throw new Error("Existem dados ainda não digitados"); 
        } if(nome.length < 3){
            throw new Error ("Nome possui menos de 3 caractéres");
        }
        if(cargo === 'desenvolvedor' && departamento !== "TI"){
            throw new Error ("Os desenvolvedores devem pertencer ao departamento de TI")
        }
    }catch(err){
        alert(err.message)
        return err.message;
    }    

    let novoFuncionario ; 
    if(cargo === "gerente"){
        novoFuncionario = new Gerente(nome , idade , cargo , departamento)
    }else if(cargo === "desenvolvedor"){
        novoFuncionario = new Desenvolvedor(nome,idade, cargo, departamento, linguagemProgramacao)
    }
    else{
        novoFuncionario = new Funcionario(nome, idade, cargo , departamento)
    }

    mostrarFuncionario(novoFuncionario)

   
}
function mostrarFuncionario(obj){
    let displayFuncionario = document.getElementById("display") ; 
    displayFuncionario.style.display = "block" ;
    document.getElementById("display-nome").innerHTML = obj.nome.toUpperCase() ;
    document.getElementById("display-idade").innerHTML = obj.idade;
    document.getElementById("display-cargo").innerHTML = obj.cargo.toUpperCase();
    document.getElementById("display-departamento").innerHTML = obj.departamento.toUpperCase() ;
    document.getElementById("display-linguagem-programacao").innerHTML = obj.linguagem ;
   
    document.getElementById("display-apresentar").innerHTML =  obj.seApresentar() ;
    
    let descricaoFuncao = document.getElementById("display-descricao"); 
    if(obj.cargo === "desenvolvedor"){
        descricaoFuncao.innerHTML = obj.programar()
    }else if( obj.cargo === "gerente"){
        descricaoFuncao.innerHTML = obj.gerenciar()
    }else{
        descricaoFuncao.innerHTML = obj.trabalhar()
    }

} ; 

