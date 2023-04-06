import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PhotosList from './features/photos/photoList.jsx';
import PhotoPage from './features/photos/photosPage.jsx';
import * as PropTypes from "prop-types";

function Switch(props) {
    return null;
}

Switch.propTypes = {children: PropTypes.node};

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <PhotosList />
        </Route>
        <Route path="/photos/:id">
          <PhotoPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
