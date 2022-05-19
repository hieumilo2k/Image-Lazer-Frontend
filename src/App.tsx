import { Route, Routes } from 'react-router-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { useEffect } from 'react';
import Home from './components/Home';
import Auth from './components/Auth/Auth';
import { AppState, history } from './app/store';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Header from './components/Layout/Header';
import { authActions } from './features/auth/authSlice';

function App() {
  const dispatch = useAppDispatch();
  const loginSuccess = useAppSelector((state: AppState) => state.auth.success);
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      dispatch(authActions.loginSuccess());
    }
  }, [dispatch]);

  return (
    <Router history={history}>
      {loginSuccess && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
