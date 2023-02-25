import { Navigate, Route, Routes } from "react-router-dom";
import Bookmark from "./Components/Bookmarks/Bookmarks";
import Home from "./Components/Home/Home";

import Layout from "./Components/Layout/Layout";
import Movies from "./Components/Movies/Movies";
import Series from "./Components/Series/series";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/bookmarks" element={<Bookmark />} />
      </Routes>
    </Layout>
  );
}

export default App;
