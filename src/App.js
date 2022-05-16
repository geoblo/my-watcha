import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MovieDetail from "./pages/MovieDetail";
import NotFound from './pages/NotFound';
import TvDetail from "./pages/TvDetail";
import TvPage from "./pages/TvPage";

function App() {
  return (
    <Routes>
      <Route path={`/${process.env.REACT_APP_HOST}`} element={<MainPage />} />
      <Route path="/tv" element={<TvPage />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/tv/:id" element={<TvDetail />} />
      <Route path="*" element={<NotFound /> } />
    </Routes>
  );
}

export default App;
