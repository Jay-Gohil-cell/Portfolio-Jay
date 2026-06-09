import eMail from "../assets/ContactPageIcon/envelope-icon.svg"
import addRess from "../assets/ContactPageIcon/maps-pin-black-icon.svg"
import mobileNum from "../assets/ContactPageIcon/phone-icon.svg"
import whatsapp from "../assets/ContactPageIcon/whatsapp-icon.svg"
import instagram from "../assets/ContactPageIcon/black-instagram-icon.svg"
import linkedin from "../assets/ContactPageIcon/linkedin-square-icon.svg"
import github from "../assets/ContactPageIcon/github-icon.svg"
import call from "../assets/ContactPageIcon/call-square-icon.svg"
import ContactIcon from "../Other-pageComponent/ContactIcon"
import Socialmedia from "../Other-pageComponent/Socialmedia"

const Contact = () => {
    return (
        <section id="Contact" className="-mt-px pb-10 pt-5 scroll-mt-35 md:-scroll-mt-18 w-screen lg:px-35 lg:pb-20 px-10 md:px-20">
            <p className="md:text-5xl text-4xl font-bold text-center text-black md:pr-5 underline underline-offset-15 decoration-2 mb-10 ">Contact</p>
            <p className="md:text-xl text-lg text-center mb-10">I'm always open to discussing new opportunities, interesting projects, or just having a chat about tech and designs.</p>
            <div className="flex gap-10 lg:gap-20 flex-col lg:flex-row">
                <div className="w-full lg:w-[30vw] flex-col flex gap-3 p-10 lg:px-10 lg:py-10 md:px-20 md:py-15 bg-[gray]/30">
                    <p className="uppercase">let's connect</p>
                    <p className="text-xs mb-5">Feel free to reach out through any of the platform below. I'll get back ti you as soon as pissible !</p>
                    <a href="mailto:gohiljay408@gmail.com" target="_blank" rel="noopener noreferrer"><ContactIcon iconn={`${eMail}`} name="Email" details="gohiljay408@gmail.com"></ContactIcon></a>
                    <ContactIcon iconn={`${mobileNum}`} name="Mobile" details="+91 75673xxxxx"></ContactIcon>
                    <a href="https://www.google.com/maps/search/?api=1&query=Surat+Gujarat+India"
                        target="_blank" rel="noopener noreferrer"><ContactIcon iconn={`${addRess}`} name="Address" details="Surat, Gujrat -  395009"></ContactIcon></a>
                    <p className="mt-4 ml-1 uppercase">Social Media </p>
                    <div className="flex justify-between">
                        <a href="https://wa.me/917567327371" target="_blank" rel="noopener noreferrer"><Socialmedia iconname={`${whatsapp}`} /></a>
                        <a href="https://instagram.com/iam_jai_x" target="_blank" rel="noopener noreferrer"><Socialmedia iconname={`${instagram}`} /></a>
                        <a
                            href="https://linkedin.com/in/jaygohil12"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><Socialmedia iconname={`${linkedin}`} /></a>
                        <a
                            href="https://github.com/Jay-Gohil-ce"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><Socialmedia iconname={`${github}`} /></a>
                        <Socialmedia iconname={`${call}`} />
                    </div>
                </div>
                <form className="w-full flex flex-col gap-5  bg-[gray]/30 py-10 px-6 md:py-20 md:px-20" action="https://api.web3forms.com/submit" method="POST">
                    <p className=" uppercase font-extralight mb-5">send a message</p>
                    <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY}></input>
                    <div className="flex gap-5 md:gap-10 flex-col md:flex-row">
                        <input className="bg-[gray]/40 w-full py-3 px-8 outline-0" type="text" name="name" placeholder="Enter Name" required />
                        <input className="bg-[gray]/40 w-full py-3 px-8 outline-0" type="email" name="email" placeholder="Enter Email" required />
                    </div>
                    <input className="bg-[gray]/40 py-3 px-8 outline-0" type="text" name="subject" placeholder="Subject" required />
                    <textarea className="bg-[gray]/40 py-3 px-8 outline-0" rows={5} name="message" placeholder="Your Message"></textarea>
                    <button type="submit" className="text-start group bg-black hover:bg-black/50 duration-300 px-8 py-3 text-white w-52">Send Message ➡</button>
                </form>

            </div>
        </section>
    )
}

export default Contact
