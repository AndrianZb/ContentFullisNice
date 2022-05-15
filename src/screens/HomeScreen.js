import { getBlogs } from "../api.js";

import Blog from "../components/Blog.js";

const HomeScreen = {
  render: async () => {
  
    return `<div>
    <h1> Welcome to my e-portfolio. As a programmer, I am always open to learning new ideas and new technologies.</h1>

    <div>
    <p style="float: left;"><img src="../images/wow.png" alt="heyy" /></p>
    <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
</div>
<div style="clear: left;">
    <p style="float: left;"><img src="../images/wow.png" alt="heyy" /></p>
    <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text</p>
</div>

    <h2>Follow Contact Me On :    <a>GitHub</a>  <a>LinkedIn</a> </h2>
        
    
    `;
  },
};



export default HomeScreen;
