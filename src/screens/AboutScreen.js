import { getBlogs } from "../api.js";
import {str} from "../api.js";

const client = require('contentful').createClient({
  space: "sqzdd6o0iz0g",
  accessToken: "x9jae8sbU24uh4UX_IpBp9Y8Tg2KT2FEe7M-ngM6pqk",
})

export const getStaticProps = async () => {
  const data = await client.getEntries();
  alert("hello you" + data);


}



const AboutScreen = {
  
  render: () => {
    return `<div class="blog-detail">
           
            <div class="article-container">
            <div class="content">
            <div class="top">
            <h1 id="AboutMe">${getBlogs.strValue}</h1>
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
