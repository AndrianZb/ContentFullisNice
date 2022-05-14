import { getBlogs } from "../api.js";




const AboutScreen = {
  
  render: () => {
    //const blogs = await getBlogs();
  //  alert(blogs);
    return `<div class="blog-detail">
           
            <div class="article-container">
            <div class="content">
            <div class="top">
            <h1 id="AboutMe">Andrian Zberea</h1>
            </div>
            <br/>
            <h2>Web Developer, Software Developer & Machine Learning Enthusiast.</h2>
            <p>
            Proven technical abilities and a distinguished record for achieving cost-saving measures in a secure environment. Highly energetic and driven to succeed. Recognized for interpersonal and problem-solving skills.
            </p>
            <div class="content-img">
            <img src="../images/profile1.jpg" alt="heyy" />
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
