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
                <input type="text" placeholder="Nome" name="NomeInteiro" value={this.state.NomeInteiro} onChange={this.alterarStates} className="inp-cdu"/>
                <MaskedInput mask="(11)11111-1111" name="celular" value={this.state.celular} onChange={this.alterarStates} placeholder="Celular" className="inp-cdu"/>
                <MaskedInput mask="11.111.111-1" name="RG" value={this.state.RG} onChange={this.alterarStates} placeholder="RG" className="inp-cdu"/>
                <input type="email" placeholder="Email" name="Email" value={this.state.Email} onChange={this.alterarStates} className="inp-cdu"/>
                <input type="password" placeholder="Senha" name="Senha" value={this.state.Senha} onChange={this.alterarStates} className="inp-cdu"/>
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