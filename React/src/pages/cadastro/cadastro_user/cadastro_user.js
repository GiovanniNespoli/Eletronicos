import { Component } from 'react';
import './cadastro_user.css'
import MaskedInput from 'react-maskedinput';
import axios from 'axios';
import { parseJWT } from '../../../services/auth';
import { post } from 'jquery';


class User extends Component
{
  constructor(props)
  {
    super(props);
    
    this.state = {
      NomeInteiro : '',
      celular : '',
      RG : '',
      Email : '',
      Senha : '',

      erromensage : '',
    }
  }

  alterarStates = (state) => {
    this.setState({ [state.target.name] : state.target.value })

    console.log(this.state.NomeInteiro)
    console.log(this.state.celular)
    console.log(this.state.RG)
    console.log(this.state.Email)
    console.log(this.state.Senha)

  }

  cadastraUser = (event) => 
  {
    event.preventDefault();

    this.setState({ erromensage : ''})

    axios.post('',
    {
      method : 'POST',

      body : JSON.stringify({
              nome : this.state.NomeInteiro,
              celular : this.state.celular,
              RG : this.state.RG,
              Email : this.state.Email,
              Senha : this.state.Senha,

      headers : {
          "Content-Type" : "application/json",
    }
    })

    })
  }
  

  render()
  {
    return(
      <main className="main-cdu">
        <div className="dois-cdu"></div>
        <div className="triangulo-cdu"></div>

        <section className="sec-cdu">
          <div className="ctn-cdu">
            <form className="form-cdu" onSubmit={this.cadastraUser}>

              <h1 className="h1-cdu">Cadastro do usuário</h1>

              <div className="inputs-cdu">
                <div className="Nome-cdu"> 
                  <input className="NomeCompleto-cdu" placeholder="Nome completo"></input>
                </div>

                <div className="inpInfs-cdu">
                  <MaskedInput mask="(11)11111-1111" className="infs-cdu" placeholder="Celular" type="text" />
                </div>
                <div className="inpInfs-cdu">
                  <input className="infs-cdu" placeholder="Email" type="email"/>
                  <input className="infs-cdu" placeholder="Senha" type="password"/>
                </div>

                <div className="endereco-cdu">
                  <h3>- Endereço -</h3>
                </div>

                <div className="cpf-cdu">
                  <MaskedInput mask="11111-11" className="cpfInp-cdu" placeholder="CEP"/>
                  <button className="btnCpf-cdu">Buscar</button>
                </div>

                <div className="cpf-Inputs">
                  <input className="cpfIn-cdu" placeholder="Rua" type="text"/>
                  <input className="cpfIn-cdu" placeholder="Número" type="text"/>
                  <input className="cpfIn-cdu" placeholder="Complemento" type="text"/>
                </div>
              </div>

              <button className="btn-cdu" type="submit">Cadastrar</button>
            </form>

          </div>

        </section>
      </main>
    );
  }

}

export default User;