import { getBlogs } from "../api.js";

import Blog from "../components/Blog.js";

const HomeScreen = {
  render: async () => {
  
    return `<div>
    <h1> Welcome to my e-portfolio. As a programmer, I am always open to learning new ideas and new technologies.<h1>

    <div class="content-img">
    <img src="../images/wow.png" alt="heyy" />
    <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'>


    <div>As of late, my hobby is exploring machine learning methods.</div>
    Please contact me in the <strong>Hire Me</strong> section for any inquiries.
    </div>
    
    <div>My hobbies</div>
    <div>Attending Cisco Connect Conventions</div>
    <div>Going to Montreal theatres</div> 
    <div>Collecting suits and watches</div>
    </div>
    

    <h2>Follow Contact Me On :    <a>GitHub</a>  <a>LinkedIn</a> </h2>
        
    
    `;
  },
};



export default HomeScreen;
