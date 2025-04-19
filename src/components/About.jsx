import React from "react";

const About = () => {
    return (
        <>
            <div className="px-4 py-10 sm:px-6 md:px-10 lg:px-20 bg-white dark:bg-black transition-colors duration-500">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-red-500 font-bold font-monospace text-center mb-8">
                    About Me
                </h1>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">
                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src="https://media.istockphoto.com/id/2012537211/vector/copywriter-with-laptop-vector.jpg?s=612x612&w=0&k=20&c=FkFTFce22NNl9SqtxsA8WEjuQyAkMdVNYjypIgmGSYA="
                            alt="About Illustration"
                            className="w-[180px] sm:w-[220px] md:w-[300px] lg:w-[400px] xl:w-[450px] rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Text */}
                    <div className="max-w-2xl text-center lg:text-left px-4">
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-white font-semibold leading-relaxed">
                            I'm a passionate Computer Science student from India, currently
                            exploring the world of web development. I specialize in the MERN
                            stack and love building full-stack applications that solve
                            real-world problems. Besides coding, I'm also diving into Data
                            Structures & Algorithms to sharpen my problem-solving skills.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;