import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  Home,
  NotFound,
} from './routes';

import {
  ScrollToTop,
} from './components';

import { PageRoutes } from './constants';

import './styles.scss';

const App = (): JSX.Element => (
  <Router>
    <div className="content">
      <Switch>
        <Route exact path={PageRoutes.Home} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
    <ScrollToTop />
  </Router>
);

export default App;
