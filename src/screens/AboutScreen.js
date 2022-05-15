
import { createClient } from "contentful";

const client = createClient({
  space: "sqzdd6o0iz0g",
  accessToken: "x9jae8sbU24uh4UX_IpBp9Y8Tg2KT2FEe7M-ngM6pqk",
});


var strValue = "----";



const response = await client.getEntries({
  content_type: "databaseData",
});
const AboutScreen = {
  
  render: () => {
    //const blogs = await getBlogs();
  //  alert(blogs);
    return `<div class="blog-detail">
           
            <div class="article-container">
            <div class="content">
            <div class="top">
            <h1 id="AboutMe">${response.items[0].fields.helloWorld}</h1> 
            <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'>

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
