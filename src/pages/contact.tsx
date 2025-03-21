import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "../styles/globals.css";

const Contact: React.FC = () => {
   return (
      <>
      <Header />
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
         <h1>Contact Us</h1>
         <form>
            <div style={{ marginBottom: '10px' }}>
               <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
               <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
               <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
               <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }} />
            </div>
            <div style={{ marginBottom: '10px' }}>
               <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message:</label>
               <textarea id="message" name="message" rows={5} style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}></textarea>
            </div>
            <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>Submit</button>
         </form>
      </div>
      <Footer /></>
   );
};

export default Contact;