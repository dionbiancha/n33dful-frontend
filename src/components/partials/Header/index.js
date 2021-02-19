import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';

import { isLogged, doLogout } from '../../../helpers/AuthHandler';

const Header = () => {
  let logged = isLogged();

  const handleLogout = () => {
    doLogout();
    window.location.href = '/';
  };

  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="text-logo">n33dful</span>
          </Link>
        </div>
        <nav>
          <ul>
            {logged &&
              <>
                <li>
                  <Link to="/myaccount">Minha conta</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Sair</button>
                </li>
                <li>
                  <Link to="post-an-ad" className="button">Poste um anúncio</Link>
                </li>
              </>
            }
            {!logged &&
              <>
                <li>
                  <Link to="/signin">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Cadastrar</Link>
                </li>
                <li>
                  <Link to="/signin" className="button">Poste um anúncio</Link>
                </li>
              </>
            }
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
};

export default Header;