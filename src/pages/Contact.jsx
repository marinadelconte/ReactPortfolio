import '../styles/styles.css';

const handleFormSubmit = async (event) => {
  event.preventDefault();
}


export default function Contact() {
    return (
      <>
      <form className="contactForm">
        <h1>Contact Me</h1>
        <input
        placeholder="Name"
        name="name"
        type="text"
        required></input>
        <input
        placeholder="Email"
        name="email"
        type="text"
        required></input>
        <input
        placeholder="Message"
        name="message"
        type="text"
        required></input>
        <button
        type="submit"
        onClick={handleFormSubmit}>Submit</button>
      
        </form>
        

        
      </>
    );
  }
  