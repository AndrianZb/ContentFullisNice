import { getBlogs } from "../api.js";

import Blog from "../components/Blog.js";

const HomeScreen = {
  render: async () => {
  
    return `<div>
    <h1><i> Welcome to my e-portfolio. As a programmer, I am always open to learning new ideas and new technologies. </i></h1>
<br/>
    <div style="border-style: solid; border-color: #fcfafa; border-width: 50px" class="border border-primary">
    <p style="float: left;"><img src="../images/wow.png" alt="heyy" /></p>
    <p>
    <h2 style="border-radius: 10px;background-color: lightblue;"> Welcome to my Portfolio ! </h2>
    <ul>
    <li>DEC, COMPUTER SCIENCE: TECHNOLOGY <strong>2019 - 2022</strong> <br/>Champlain Regional College</li>
    <li>CS50 PYTHON WEBINAR <strong>2021</strong> <br/>Harvard Online Course</li>
 
  </ul>  
  <h2 style="border-radius: 10px;background-color: lightblue;"> My hobbies are</h2>
  <ul>
  <li>Tweaking and collecting watches</li>
  <li>Learning about machine learning</li>
  <li></li>
  </ul>  </p>
  </div>

<div style="clear: left;">
   
</div>



    <h2>Follow Me On :    <a>GitHub</a>  <a>LinkedIn</a> </h2>
    
    
</div>
    
    `;
  },
};



export default HomeScreen;
