import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Mail, Map, MapPin, Phone, Twitter, Send} from "lucide-react";
import { useToast } from "@/hooks/use-toast"
import { useState } from "react";

export const Contact = () => {

    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit =(e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon",
            });
            
            setIsSubmitting(false);
        }, 1500);

        
    }

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Class aptent taciti sociosqu ad litora 
                    torquent per conubia nostra, per inceptos himenaeos. 
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 justify-center">

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email </h4>
                                    <a href="mailto:mail@gmail.com" className="text-muted-foregroundhover:text-primary transition-colors">
                                        youjvjcnje@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone </h4>
                                    <a href="tel:+12345678901" className="text-muted-foregroundhover:text-primary transition-colors">
                                        +1 (234) 567-8901
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location </h4>
                                    <a href="tel:+12345678901" className="text-muted-foregroundhover:text-primary transition-colors">
                                        1 Somewhere, State in Country, Continent, Earth
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Twitter />
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="#" target="_blank">
                                    <Facebook/>
                                </a>
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card rounded-lg shadow-xs" onSubmit={ handleSubmit }>
                        <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>

                        <form className="space-y-6">

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 "> Name: </label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name"
                                    required 
                                    placeholder="type in your name"
                                    className="w-full px-4 py-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 "> Email: </label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email"
                                    required 
                                    placeholder="enter your email"
                                    className="w-full px-4 py-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium mb-2 "> Phone Number: </label>
                                <input 
                                    type="number" 
                                    id="phone"
                                    name="phone"
                                    required 
                                    placeholder="enter your phone number"
                                    className="w-full px-4 py-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 "> Message: </label>
                                <textarea 
                                    id="message"
                                    name="mesasge"
                                    required 
                                    placeholder="Hello, I would like to talk about..."
                                    className="w-full px-4 py-4 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                />
                            </div>

                            <button
                                 type="submit"
                                 disabled={isSubmitting}
                                 className= {cn("cosmic-button w-full flex items-center justify-center gap-2")}
                            >

                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};