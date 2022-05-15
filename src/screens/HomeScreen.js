import { getBlogs } from "../api.js";

import Blog from "../components/Blog.js";

const HomeScreen = {
  render: async () => {
  
    return `<div>
    <h1> Welcome to my e-portfolio. As a programmer, I am always open to learning new ideas and new technologies.<h1>
    <h2>As of late, my hobby is exploring machine learning methods.
    Please contact me in the <strong>Hire Me</strong> section for any inquiries.<h2>
    </div>`;
  },
};



export default HomeScreen;
