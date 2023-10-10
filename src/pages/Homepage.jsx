
import { Navbar, Blogs, Footer } from "../components";

// eslint-disable-next-line react/prop-types
const Homepage = ({blogs}) => {
  return (
    <div>
      <Navbar />
      <Blogs blogs={blogs ? blogs: ""}/>
      <Footer />
    </div>
  );
};

export default Homepage;
