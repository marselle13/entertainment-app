import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import { fetchEntData } from "./Components/Store/ent-slice";
import LoadingSpinner from "./Components/UI/LoadingSpinner";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntData());
  }, [dispatch]);

  const Home = lazy(() => import("./Components/Home/Home"));
  const Movies = lazy(() => import("./Components/Movies/Movies"));
  const Series = lazy(() => import("./Components/Series/Series"));
  const Bookmark = lazy(() => import("./Components/Bookmarks/Bookmarks"));

  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="*" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Series />} />
          <Route path="/bookmarks" element={<Bookmark />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
