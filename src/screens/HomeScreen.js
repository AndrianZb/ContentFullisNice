import { getBlogs } from "../api.js";

import Blog from "../components/Blog.js";

const HomeScreen = {
  render: async () => {
  
    return `<div>
    <div class="blog-layout container" id="blog-layout">
    hello
    </div>
    <div class="load-btn"><button class="load" id="load">Load more</button></div>
    </div>`;
  },
};



export default HomeScreen;
