import React, { Component } from 'react';
import CharacterList from '../characters/CharacterList';
import CharacterDetail from '../characters/CharacterDetail';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <CharacterList {...routerProps} />
                )}
              />

              <Route path="/character-detail/:id" exact={true}
                render={routerProps => (
                  <CharacterDetail {...routerProps} />
                )}
              />
              {/* <Redirect to="/" /> */}

            </Switch>
          </main>
        </Router>
      </div>
    );
  }

}

export default App;