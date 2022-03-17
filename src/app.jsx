// import logo from './logo.svg';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import styles from './app.module.css';
import Login from './components/login/login';
import Maker from './components/maker/maker';


function App({FileInput, authService}) {
  return( 
    <div className={styles.app}>
      <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Login authService={authService} />} />
            <Route path="/maker" exact element={<Maker  FileInput={FileInput} authService={authService} />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
