import { getBlogs } from "../api.js";
import {strValue} from "../api.js";


const AboutScreen = {
  
  render: async (strValue) => {
    const blogs = await getBlogs();

    return `<div class="blog-detail">
           
            <div class="article-container">
            <div class="content">
            <div class="top">
            <h1 id="AboutMe">${strValue}</h1>
            </div>
            <p>
            </p>
            <div class="content-img">
            <img src="./images/profile.jpg" alt="" />
            </div>
            <p>
            weawe
            </p>
            <p>
          hellop
            </p>
            </div>
            </div>
            
            </div>`;
  },
};
export default AboutScreen;
