import { BlogContentPage, Homepage } from "./pages";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
export default function App() {

  let {loading, data, error} = useFetch('https://strapi-be-4i68.onrender.com/api/blogs?populate=*')
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Homepage blogs={data ? data : ""}/>}/>
        <Route path="/blog/:id" exact element={<BlogContentPage blogs={data ? data : ""}/>}/>
      </Routes>
    </div>
  );
}
