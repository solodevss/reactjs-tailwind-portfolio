import { useEffect, useState } from "react";


export const StarBackground = () => {
        const [stars, setStars] = useState([]);
        const [meteors, setMeteors] = useState([]);

        // Calling generateStars & generateMeteors to effect
        useEffect(() => {
            generateStars();
            generateMeteors();

            // Handle screen resize( i.e stars aren't clogged)
            const handleResize = () => {
                generateStars();
            }

            window.addEventListener('resize', handleResize);

            return () => window.removeEventListener('resize', handleResize);
        }, []);



        //Stars
        //id, size, x, y, opacity, animation duration : Stars properties
        const generateStars = () => {
            
            // Determine the numbers of stars according to screen size
            const numberOfStars = Math.floor(
                (window.innerWidth * window.innerHeight) / 4000
            );

            const newStars = [];

            for (let i = 0; i < numberOfStars; i++) {
                newStars.push({
                    id: i,
                    size: Math.random() * 3 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    opacity: Math.random() * 0.5 + 0.5,
                    animationDuration: Math.random() * 4 + 2
                });
            }

            setStars(newStars);
        };


        //Meteors
        //id, size, x, y, delay, animation duration : Meteors properties
        const generateMeteors = () => {
            const numberOfMeteors = 3
            const newMeteors = []; 

            for (let i = 0; i < numberOfMeteors; i++) {
                newMeteors.push({
                    id: i,
                    size: Math.random() * 2 + 1,
                    x: Math.random() * 100,
                    y: Math.random() * 20,
                    delay: Math.random() * 15,
                    animationDuration: Math.random() * 3 + 3
                });
            }

            setMeteors(newMeteors);
        };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            
            {/* // Stars displays */}
            {stars.map((star) => (
                <div key={star.id} className="star animate-pulse-subtle" 
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {/* /* Meteors displaying  */}
            {meteors.map((meteor) => (
                <div key={meteor.id} className="meteor animate-meteor" 
                    style={{
                        width: meteor.size * 20 + "px",
                        height: meteor.size * 1.2   + "px",
                        left: meteor.x + "%",
                        top: meteor.y + "%",
                        animationDelay: meteor.delay,
                        animationDuration: meteor.animationDuration + "s",
                    }}
                />
            ))}
        </div>
    );

    
}