const cat = window.localStorage.getItem('myCat');
import {str2} from "src/api.js";
const AboutScreen = {
  
  render: () => {

    return `<div class="blog-detail">
            <div class="side-ad">
              <a href="#" class="vertical-ad">
              <img src="/images/side-ad.svg"/>
              </a>
            </div>
            <div class="article-container">
            <div class="content">
            <div class="top">
            <h1 id="AboutMe">${str2}</h1>
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
