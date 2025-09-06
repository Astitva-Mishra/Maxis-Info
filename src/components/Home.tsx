import Link from    "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

function HeroSection() {
    return (
        <div
        className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: "url('/hero2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}
        >
                 {/* Dark overlay for better text readability */}
                 <div className="absolute inset-0 bg-black/50 z-0"></div>
                 <div className="p-4 relative z-10 w-full text-center">
                    <h1 className=" mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                    >Maxis Info Trades Pvt. Ltd.</h1>
                    <p
                    className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
                    >We Create Custom Web Solutions And Software That Elevate Your Brand And Connect You With Your Ideal Clients, Driving Your Business To New Heights With Innovation And Excellence.</p>
                    <div className="flex justify-center gap-4 mt-4">
                        <div>
                            <Link href="/about">
                            <HoverBorderGradient
                            border-radius="1.75rem"
                            >About</HoverBorderGradient>
                            </Link>
                        </div>
                        <div>
                            <Link href="/services">   
                            <HoverBorderGradient
                            border-radius="1.75rem"
                            >Services</HoverBorderGradient>
                            </Link>
                        </div>
                        
                    </div>
                 </div>

            </div>
    )
}

export default HeroSection;