import { BlogContentPage, Homepage } from "./pages";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/blog/:id" exact element={<BlogContentPage />}/>
      </Routes>
    </div>
  );
}
