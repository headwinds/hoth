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
import RussianGamingCompanyProject from './components/projects/gaming/RussianGamingCompanyProject';
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
        {/*
        <IndexRoute component={MedicalCentre} />
        <Route path="/logs" component={LogMenu} />
        <Route path="2016/04/redux-data-table/(:key)" component={LogRead} />
        <Route
          path="2016/03/codepen-angular2-typescript-build-component-playgrounds/"
          component={LogRead}
        />*/}
        <Route
          path="/budding-data-scientist"
          component={RussianGamingCompanyProject}
        >
          {/*
          <IndexRoute component={MedicalCentre} />
          <Route path="/logs" component={LogMenu} />
          <Route path="2016/04/redux-data-table/(:key)" component={LogRead} />
          <Route
            path="2016/03/codepen-angular2-typescript-build-component-playgrounds/"
            component={LogRead}
          />*/}
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
