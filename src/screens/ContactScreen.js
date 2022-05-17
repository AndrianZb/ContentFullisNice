import Form from "../components/Form.js";
const ContactScreen = {
  render: () => {
    return `<div class="blog-detail">
         
            <div class="article-container">
            <div class="content">
           
     
         
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
