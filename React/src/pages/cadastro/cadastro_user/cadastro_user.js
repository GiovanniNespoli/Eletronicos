import { Component } from 'react';

import login from '../../../img/img.svg'
import pass from '../../../img/pass.svg'

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
        <div className="img-cdu">
          <img className="imgCtn-cdu" src={login}/>
        </div>

        <div className="cad-cdu">
          <div className="cadInputs-cdu">
            <h1 className="h1-cdu">cadastro</h1>

            <form className="form-cdu">
              <div className="input-cdu">
                <input className="inputCtn-cdu" placeholder="Nome completo" type="text"/>
                <MaskedInput mask="(11)11111-1111" className="inputCtn-cdu" placeholder="Celular" type="text"/>
              </div>
                <div className="linha-cdu">
                  <div className="linhaCtn-cdu"></div>
                </div>
              <div className="input-cdu">
                <input className="inputCtn-cdu" placeholder="Email" type="email"/>
                <input className="inputCtn-cdu" placeholder="Senha" type="password"/>
              </div>
            </form>

            <button className="btn-cdu"><img className="btnPass-cdu" src={pass}/></button>
          </div>
        </div>
      </main>
    );
  }

}

export default User;