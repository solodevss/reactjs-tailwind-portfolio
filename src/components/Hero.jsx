import { ArrowDown } from "lucide-react"

export const Hero = () => {

    return (

        // Hero
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4 "

        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in-delay-1">Hey, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-5">{" "} Solomon</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-5">{" "} Isu</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-6">
                        Nunc orci quam, efficitur sed mattis facilisis, tincidunt eu erat. Proin eget elit est.
                        Nam non fringilla felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Nam efficitur dolor vitae sollicitudin porta. Maecenas eu fringilla tortor.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            Explore Portfolio
                        </a>
                    </div>

                    {/* ArrowDown animation */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center animate-bounce">
                        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
                        <ArrowDown className="h-5 w-5 text-primary"/>
                    </div>

                </div>
            </div>
        </section>
    )
}