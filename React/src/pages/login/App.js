import { Component } from 'react';
import './App.css';
import axios from 'axios';
import { parseJWT } from '../../services/auth';

class Login extends Component
{
  constructor(props)
  {
    super(props);

    this.state = {
        email : '',
        senha : '',
        errormensage : '',
    }
  }

  alterarStates = (state) => {
    this.setState({ [state.target.name] : state.target.value })

    console.log(this.state.email)
    console.log(this.state.senha)

  }

  login = () =>
  {
    this.setState({ errormensage : '' })
    
    axios.post('', 
    {
      email : this.state.email,
      senha : this.state.senha
    })

    .then(resp => 
      {
          if (resp.status === 200) {
              localStorage.setItem('user-logado', resp.data.token)

              console.log('Meu token é: ' + resp.data.token);

              let base64 = localStorage.getItem('user-logado').split('.')[1]

              console.log(JSON.parse(window.atob(base64)).role)

              console.log(parseJWT().role)

              if(parseJWT().role === "1")
              {

                this.props.history.push('/lista')

              } else if(parseJWT().role === "2")
              {

                this.props.history.push('/lista')

              }

          }
      })

      .catch( () => 
        {
            this.setState({ errorMensage : "Email ou senha inválidos!! tente novamente"})
        })
  }

  render()
  {
    return(
      <main className="main-lg">
        <div className="dois-lg"></div>
        <div className="triangulo-lg"></div>

        <section className="login-lg">
          <div className="lg">

          <form className="form-lg" onSubmit={this.login}>

            <h1 className="h1-lg">Login</h1>

            <input type="email" name="email" value={this.state.email} onChange={this.alterarStates} className="input-lg" placeholder="Email"/>
            <input type="password" name="senha" value={this.state.senha} onChange={this.alterarStates} className="input-lg" placeholder="Senha"/>

            <button type="submit" className="btn-lg">Login</button>

            <p>{this.state.errormensage}</p>
            
          </form>

          </div>

        <div className="cad-lg">

          <div className="linha-lg"></div>
          <p className="p-cad">Não tem uma conta? <i className="destacado-lg"><a>cadastre-se</a></i></p>
          
        </div>
        </section>


      </main>
    );
  }

}

export default Login;
