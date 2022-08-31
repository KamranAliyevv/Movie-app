import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import "./assets/Style/index.scss";
import Movies from "./containers/Movies/Movies";
import Details from "./containers/Details/Details";
import WatchList from "./containers/WatchList/WatchList";
import WishList from "./containers/WishList/WishList";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/popular" element={<Movies />}></Route>
          <Route path="/now_playing" element={<Movies />}></Route>
          <Route path="/top_rated" element={<Movies />}></Route>
          <Route path="/upcoming" element={<Movies />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route path="/watchlist" element={<WatchList />}></Route>
          <Route path="/detail/:type/:id" element={<Details />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
