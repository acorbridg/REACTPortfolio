import './contact.css'
const Contact = () => {
    return (
        <form className='contact'>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder='Email' required />
            <textarea placeholder="shoot me a message" />
            <button type="submit">Submit</button>
        </form>
    )
}
export default Contact