import '../styles/styles.css';

const handleFormSubmit = async (event) => {
  event.preventDefault();
}


export default function Contact() {
    return (
      <>
      <form class="contactForm">
        <h1>Contact Me</h1>
        <input
        placeholder="Name"
        name="name"
        type="text"></input>
        <input
        placeholder="Email"
        name="email"
        type="text"></input>
        <input
        placeholder="Message"
        name="message"
        type="text"></input>
        <button
        type="submit"
        onClick={handleFormSubmit}>Submit</button>
      
        </form>
        

        
      </>
    );
  }
  