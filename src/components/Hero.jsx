import React, { useEffect, useState } from "react";

const Hero = () => {
    const roles = ["MERN Stack Developer", "Backend Developer", "Frontend Developer"];
    const [displayedText, setDisplayedText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentRole = roles[roleIndex];

        if (charIndex < currentRole.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + currentRole.charAt(charIndex));
                setCharIndex(prev => prev + 1);
            }, 100); // typing speed
            return () => clearTimeout(timeout);
        } else {
            const waitBeforeNext = setTimeout(() => {
                setCharIndex(0);
                setDisplayedText("");
                setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            }, 2000); // wait 2s after full word
            return () => clearTimeout(waitBeforeNext);
        }
    }, [charIndex, roleIndex]);

    return (
        <>
            <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-10 lg:gap-20 xl:gap-32 p-5 m-3 dark:bg-black dark:text-white transition-colors duration-500">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col justify-center items-center bg-[url('/images/blob2.svg')] bg-contain bg-center bg-no-repeat h-[220px] sm:h-[600px] md:h-[620px] w-full">
                        <h1 className="text-lg font-bold font-monospace dark:bg-gray-800 bg-opacity-50 md:text-2xl lg:text-4xl xl:text-6xl">
                            Sundaram Katare
                        </h1>
                        <br />
                        <p className="text-lg font-bold font-monospace md:text-2xl lg:text-3xl xl:text-5xl">
                            I am{" "}
                            <span className="text-white dark:text-green-400 bg-blue-800 dark:bg-gray-800 p-2 rounded-2xl bg-opacity-50 ">
                                {displayedText}
                            </span>
                            <span className="animate-pulse">|</span>
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center p-4">
                    <img
                        src="/images/my-face-art.png"
                        alt="face"
                        className="h-[180px] sm:h-[225px] md:h-[355px] lg:h-[455px] border rounded-3xl dark:border-gray-700"
                    />
                </div>
            </div>

        </>
    );
};

export default Hero;
