import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { BrowserRouter as Router, Switch, useHistory } from 'react-router-dom';
import Backoffice from '../../js/components/Backoffice';
import { getRoles, isAuthenticated } from './auth';

const requireAdmin = (to, from, next) => { // Fonction pour vérifier si l'utilisateur est connecté et a le rôle admin
  if (isAuthenticated() && getRoles() === 'ROLE_ADMIN') { // Si l'utilisateur est connecté et a le rôle admin, il peut accéder à la page
    next();
  } else {
    next.redirect('/LoginUser');
  }
};

const SecurityRoutes = () => { // Fonction qui permet de sécuriser les routes
  const history = useHistory();

  return (
    <GuardProvider history={history}>
      <Router>
        <Switch>
          <GuardedRoute path="/Backoffice" component={Backoffice} guard={requireAdmin} />
        </Switch>
      </Router>
    </GuardProvider>
  );
};

export default SecurityRoutes;