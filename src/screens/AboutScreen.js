const AboutScreen = {
  render: (blogs) => {

    const newPantherEl = document.createElement("div");
    newPantherEl.textContent = "heeellllloooo";
    return `<div class="blog-detail">
            <div class="side-ad">
              <a href="#" class="vertical-ad">
              <img src="/images/side-ad.svg"/>
              </a>
            </div>
            <div class="article-container">
            <div class="content">
            <div class="top">
            <h1 id="AboutMe">ggigi</h1>
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
