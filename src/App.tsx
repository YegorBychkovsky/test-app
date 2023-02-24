// import './App.css';
import { Routes, Route } from 'react-router';
import { MainLayout } from './layouts/MainLayout';
import MainPage from './pages/MainPage';
import './scss/libs/app.scss';
import '@fontsource/roboto/400.css';
import NewsPage from './pages/NewsPage';
import ProfilePage from './pages/ProfilePage';
import { rightPassword, rightUsername } from './components/Header';
import { useDispatch } from 'react-redux';
import { changeLoginState } from './redux/slices/AuthorizationSlice/slice';

const username = localStorage.getItem('username');
const password = localStorage.getItem('password');
function App() {
  const dispatch = useDispatch();
  username === rightUsername && password === rightPassword
    ? dispatch(changeLoginState(true))
    : dispatch(changeLoginState(false));
  console.log(window.localStorage);

  return (
    <Routes>
      <Route path="/test-app" element={<MainLayout />}>
        <Route path="" element={<MainPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
