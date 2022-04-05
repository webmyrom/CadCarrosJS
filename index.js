
class Carros {

    constructor(){
        this.id = 1;
        this.baseDeCarros = [];
        this.editId = null;
    }
    
        salvar(){
            let carros = this.lerdados();
                
                if(this.validaCampo(carros) == true){                   
                    if(this.editId == null){
                        this.adicionar(carros);
                    }else{
                        this.atualizar(this.editId, carros);
                    }
                }
                this.limpar();
                this.buscaCarro();
            }

        adicionar(carros){
            this.baseDeCarros.push(carros);
            this.id++;
            alert('Veiculo cadastrado com Sucesso!')
            
            //console.log(this.baseDeCarros)                        
        }

    lerdados(){
        let carros = {}
            carros.id = this.id;
            carros.placa = document.getElementById('placa').value;
            carros.modelo = document.getElementById('modelo').value;
            carros.marca = document.getElementById('marca').value;
            carros.ano = document.getElementById('ano').value;
        return carros;
    }

        validaCampo(carros){
            let msg = '';
            
            for (let i = 0; i < this.baseDeCarros.length; i++) {
                let verificaPlaca = this.baseDeCarros[i].placa
                if(carros.placa == verificaPlaca){
                    alert('Placa ja cadastrada no sistema!')
                        return false
            }
        }
            if(carros.placa == ''){
                msg += 'Informar Placa do Veiculo \n';
            }if(carros.modelo == ''){
                msg += 'Informar o modelo do Veiculo \r';
            }if(carros.marca == ''){
                msg += 'Informar a Marca do Veiculo \r';
            }if(carros.ano == ''){
                msg += 'Informar o Ano do Veiculo \r';
            }if (msg != ''){
                alert(msg);
                return false
            }
            return true
        }

    buscaCarro() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
            for( let i = 0; i < this.baseDeCarros.length; i++){
                let tr = tbody.insertRow();

                let td_id = tr.insertCell();
                let td_placa = tr.insertCell();
                let td_modelo = tr.insertCell();
                let td_marca = tr.insertCell();
                let td_ano = tr.insertCell();
                let td_acao = tr.insertCell();
                
                    td_id.innerText = this.baseDeCarros[i].id;
                    td_placa.innerText = this.baseDeCarros[i].placa;
                    td_modelo.innerText = this.baseDeCarros[i].modelo;
                    td_marca.innerText = this.baseDeCarros[i].marca;
                    td_ano.innerText = this.baseDeCarros[i].ano;
                        let imgEdit = document.createElement('img');
                            imgEdit.src = 'img/editar.png';
                            imgEdit.setAttribute("onclick", "carros.editar(" + JSON.stringify(this.baseDeCarros[i]) +")");
                            
                            let imgDel = document.createElement('img');
                            imgDel.src = 'img/bin.png';
                            imgDel.setAttribute("onclick", "carros.deletar("+ this.baseDeCarros[i].id +")");

                            td_acao.appendChild(imgEdit);
                            td_acao.appendChild(imgDel);
                    
                    
            }
            //console.log(this.baseDeCarros);            
        }
    limpar(){
        document.getElementById('placa').value = '';
        document.getElementById('modelo').value = '';
        document.getElementById('marca').value = '';
        document.getElementById('ano').value = '';
        document.getElementById('btnSalvar').innerText = 'Cadastrar Veiculo';
        this.editId = null;
        document.getElementById('placa').disabled = false;
    }
    
    deletar(id){
        if(confirm('Deseja apagar o registro ' + id)){
        let tbody = document.getElementById('tbody');
        for (let i = 0; i < this.baseDeCarros.length; i++) {
            if(this.baseDeCarros[i].id == id){
                this.baseDeCarros.splice(i, 1);
                    tbody.deleteRow(i);
            }           
            }
        }
    }

        editar(dados){
            this.editId = dados.id;
            document.getElementById('placa').disabled = true;
            document.getElementById('placa').value = "Editando ID: " + dados.id
           // document.getElementById('placa').value = dados.placa;
            document.getElementById('modelo').value = dados.modelo;
            document.getElementById('marca').value = dados.marca;
            document.getElementById('ano').value = dados.ano;
            document.getElementById('btnSalvar').innerText = 'Atualizar';
        }
        atualizar(id, carros){
            for (let i = 0; i < this.baseDeCarros.length; i++) {
                if(this.baseDeCarros[i].id == id){
                   // this.baseDeCarros[i].placa = carros.placa
                    this.baseDeCarros[i].modelo = carros.modelo
                    this.baseDeCarros[i].marca = carros.marca
                    this.baseDeCarros[i].ano = carros.ano
                }
                
                
            }
        }

}
    var carros = new Carros();