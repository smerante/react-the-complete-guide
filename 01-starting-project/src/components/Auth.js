import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { AUTH_ACTIONS } from '../store/auth-store';
import { useRef } from 'react'
const Auth = () => {
  const dispatch = useDispatch();
  const email = useRef();
  const pw = useRef();

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={(event) => { event.preventDefault(); dispatch(AUTH_ACTIONS.login({ userName: email.current.value, password: pw.current.value })) }}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input ref={email} type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input ref={pw} type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
