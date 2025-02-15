import emailjs from "emailjs-com";
import swal from "sweetalert2";

const Form = {
  render: () => {
    return `<form
      class='form'
      id="contactform"
      disabled
    >
      <h4>Contact Me</h4>

      <input
        autocomplete='off'
        name='name'
        placeholder='Name*'g
        required
      />

      <input
        autocomplete='off'
        name='email'
        type='email'
        placeholder='Email*'
        required
      />

      <textarea
        name='message'
        rows='8'
        placeholder='Message:'
        required
      ></textarea>
      <button type='submit' value='Send'>
        Send
      </button>
    </form>`;
  },
  after_render: async () => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      };

      try {
        const response = await emailjs.send(
          "service_ix2ir2p",
          "template_k8i2xmn",
          data,
          "Rlu6snwLZH7NLu7T0"
        );

        if (response.status === 200) {
          swal.fire("Your message was sent ", "Thank you for contracting me", "success");
        }
      } catch (error) {
        console.log(error);
        if (error) {
          swal.fire(
            "Oops!",
            "Sorry, Something bad really happended, Please try again",
            "error"
          );
        }
      }
    };

    document
      .getElementById("contactform")
      .addEventListener("submit", handleSubmit);
  },
};

export default Form;
