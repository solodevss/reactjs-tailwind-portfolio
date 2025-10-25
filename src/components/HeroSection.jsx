
export const HeroSection = () => {

    return (
    
    // Hero
    <section 
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 "
        
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in-delay-1">Hey,</span>
                    <span className="opacity-0 animate-fade-in-delay-3">{" "} I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-5">{" "} Solomon</span>
                </h1>
            </div>
        </div>

    </section>
    )
}