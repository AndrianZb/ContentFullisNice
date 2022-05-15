import Form from "../components/Form.js";
const ContactScreen = {
  render: () => {
    return `<div class="blog-detail">
         
            <div class="article-container">
            <div class="content">
            <p>
         text here
            </p>
            <div class="content-img">
            <img style="border-radius: 20px" src="./images/Asset 4.svg" alt="" />
            </div>
            <p>
         test in here
            </p>
            <p>
         ggawsew
            </p>
            ${Form.render()}
            </div>
            </div>
      
            </div>`;
  },
  after_render: async () => {
    if (Form.after_render) await Form.after_render();
  },
};

export default ContactScreen;
