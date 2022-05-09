import { Routes, Route } from "react-router-dom";
import Movie from "../src/components/Movie";
import Current from "./components/Current";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Movie />}></Route>
      <Route exact path="/current" element={<Current />}></Route>
    </Routes>
  );
}

export default App;
