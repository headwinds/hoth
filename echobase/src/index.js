/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  Link,
  hashHistory,
  browserHistory
} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './redux/configureStore';
import Main from './components/main/Main';
import Bio from './components/projects/bio/Bio';

// Client work
import Microsoft from './components/projects/microsoft/Microsoft';
import Mitsubishi from './components/projects/mitsubishi/Mitsubishi';
import BMW from './components/projects/bmw/BMW';
import TotalDrama from './components/projects/totaldrama/TotalDrama';
import Labatt from './components/projects/labatt/Labatt';
import Nintendo from './components/projects/nintendo/Nintendo';
import Toda from './components/projects/toda/Toda';
import Voices from './components/projects/247/Voices';
import Bacardi from './components/projects/bacardi/Bacardi';
import CAMH from './components/projects/camh/CAMH';
import Trioova from './components/projects/trioova/Trioova';

//import RussianGamingCompanyProject from './components/projects/gaming/RussianGamingCompanyProject';
import WindProject from './components/projects/wind/WindProject';
import ProjectsMenu from './components/projects/ProjectsMenu';
import LogRead from './components/logs/LogRead';
import MedicalCentre from './components/medicalcentre/MedicalCentre';

import LogMenu from './components/logs/LogMenu';
import 'typeface-roboto';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <Route path="/bio" component={Bio} />
        <Route path="/mitsubishi" component={Mitsubishi} />
        <Route path="/bmw" component={BMW} />
        <Route path="/totaldrama" component={TotalDrama} />
        <Route path="/nintendo" component={Nintendo} />
        <Route path="/labatt" component={Labatt} />
        <Route path="/bacardi" component={Bacardi} />
        <Route path="/microsoft" component={Microsoft} />
        <Route path="/toda" component={Toda} />
        <Route path="/camh" component={CAMH} />
        <Route path="/trioova" component={Trioova} />
        <Route path="/247" component={Voices} />
        <Route path="/budding-data-scientist" component={WindProject} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
