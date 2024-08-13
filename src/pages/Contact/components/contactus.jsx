import './font.css'; 
import Details from "./details";
import Form from "./form";

function ContactUs() {
    
    return (
        <div className="pb-16">
            <div className="grid justify-center pb-16 md:pb-16 lg:pb-16 h-9 text-3xl text-slate-100 self-stretch">Contact Us</div>
            <div className="">
            <div className=" grid gap-32 justify-center md:flex lg:flex ">
                <Details/>
                <Form/>
            </div>
        </div>
        </div>
    );
}

export default ContactUs;