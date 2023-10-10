
import { Navbar, Footer, BlogContent } from "../components";

// eslint-disable-next-line react/prop-types
const BlogContentPage = ({blogs}) => {
  return (
    <div>
      <Navbar />
      <BlogContent blogs={blogs}/>
      <Footer />
    </div>
  );
};

export default BlogContentPage;
