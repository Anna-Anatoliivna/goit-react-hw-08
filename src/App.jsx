import './App.css';
import { lazy, Suspense, useEffect } from 'react';
import { fetchContacts } from './redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { Navigation } from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';

import Loader from './components/Loader/Loader';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { refreshUser } from './redux/auth/operations';
import { selectAuthIsRefreshing } from './redux/auth/selectors';

const HomePage = lazy(() => import('./pages/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

const App = () => {
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

if(isRefreshing) return <p>User is refreshing, please wait.</p>;

  return (
    <div>
      <header>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <footer>
        <p className="footer">Footer</p>
      </footer>
    </div>
  );
};

export default App;
