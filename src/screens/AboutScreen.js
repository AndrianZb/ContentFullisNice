const AboutScreen = {
  
  render: () => {
    //const blogs = await getBlogs();
  //  alert(blogs);
    return `<div class="blog-detail">
           
            <div class="article-container">
            <div class="content">
            <div class="top">
            <h1 id="AboutMe">Hi, my name is Andrian Zberea</h1> 
        
            <div class="content-img">
            <img src="../images/profile1.jpg" alt="heyy" />
            <link href='https://fonts.googleapis.com/css?family=Josefin+Sans' rel='stylesheet' type='text/css'>

            </div>
            <div >
            <p>
               <a href="../images/CV_Andrian.pdf" class="button" download><i class="fa fa-download"></i>Download CV</a>
            </p>
            </div>
            <br/>
            <hr/>
            <br/>
            <h2>Web Developer, Software Developer & Machine Learning Enthusiast.</h2>
            <p>
            Proven technical abilities and a distinguished record for achieving cost-saving measures in a secure environment. Highly energetic and driven to succeed. 
            <br/> Recognized for good workplace ethics and problem-solving skills.
            </p>
            </div>
            <h2 style="border-radius: 10px;background-color: lightblue;" >Education</h2>

            <ul>
              <li>DEC, COMPUTER SCIENCE: TECHNOLOGY <strong>2019 - 2022</strong> <br/>Champlain Regional College</li>
              <li>CS50 PYTHON WEBINAR <strong>2021</strong> <br/>Harvard Online Course</li>
           
            </ul>  
            <h2 style="border-radius: 10px;background-color: lightblue;"> Professional Experience</h2>
            <ul>
            <li>JUNIOR DEVELOPER <strong>2022 - PRESENT</strong> <br/>NexOne, Saint-Hubert, QC</li>
            <li>IT SUPPORT AGENT <strong>2019 - 2020</strong> <br/>NexOne, Saint-Hubert, QC</li>
            </ul>  
     
            </div>
            </div>
            
            </div>`;
  },
};
export default AboutScreen;
