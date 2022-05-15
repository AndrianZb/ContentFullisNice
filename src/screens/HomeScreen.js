import { getBlogs } from "../api.js";

import Blog from "../components/Blog.js";

const HomeScreen = {
  render: async () => {
  
    return `<div>
    <h1> Welcome to my e-portfolio. As a programmer, I am always open to learning new ideas and new technologies.</h1>

    <div>
    <p style="float: left;"><img src="http://placekitten.com/g/200/200" height="200px" width="200px" border="1px"></p>
    <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
</div>
<div style="clear: left;">
    <p style="float: left;"><img src="http://placekitten.com/g/200/200" height="200" width="200" border="1px"></p>
    <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
</div>

    <h2>Follow Contact Me On :    <a>GitHub</a>  <a>LinkedIn</a> </h2>
        
    
    `;
  },
};



export default HomeScreen;
