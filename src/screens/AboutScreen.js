import { getBlogs } from "../api.js";




const AboutScreen = {
  
  render: async () => {
    //const blogs = await getBlogs();
  //  alert(blogs);
    return `<div class="blog-detail">
           
            <div class="article-container">
            <div class="content">
            <div class="top">
            <h1 id="AboutMe">!!!</h1>
            </div>
            <p>
            </p>
            <div class="content-img">
            <img src="./images/profpicture2.jpg" alt="hey" />
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
