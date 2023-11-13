import {useState} from 'react'
import '../scss/Login.scss'
import { Link } from 'react-router-dom';
 
function Login(){
 
    const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
 
  function isEmailRegistered(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    return users.some(user => user.email === email);
  }
 
  function signup() {
    if (isEmailRegistered(signupEmail)) {
      alert('Email já cadastrado. Use outro email.');
      window.location='/'
      return;
    }
 
    const user = { email: signupEmail, password: signupPassword };
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Cadastro realizado com sucesso, acesse login utilizando sua conta para ir para nosso site');
  }
 
  
 
 
 
    return(
        <>
            <div className="containerLogin">
                <div className='titulo'>
                <h1>
                    Pagina de login/cadastro
                </h1>
                </div>
                <div className='login-cadastro'>
                <div className="login">
                    <h1>Login</h1>
                    <form onSubmit={e => { e.preventDefault(); Login(); }}>
                    Email: <input type="text" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} required /><br />
                    Senha: <input type="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} required /><br />
                    <button>
                        <Link to="/Home">
                            <input type="submit" value="Login" />
                        </Link>                      
                    </button>
                    
                    </form>
                </div>
                <div className="cadastro">
                    <h1>Cadastro</h1>
                    <form onSubmit={e => { e.preventDefault(); signup(); }}>
                    Email: <input type="text" value={signupEmail} onChange={e => setSignupEmail(e.target.value)} required /><br />
                    Senha: <input type="password" value={signupPassword} onChange={e => setSignupPassword(e.target.value)} required /><br />
                    <input type="submit" value="Cadastrar" />
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}
 
export default Login