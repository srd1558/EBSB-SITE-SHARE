import React, { useState, useEffect, useRef } from "react";

const Slider = () => {
    const [active, setActive] = useState(0);
    const sliderRef = useRef(null);
    const items = [
        "/AboutImg1.png",
        "/AboutImg3.png",
        "/AboutImg2jpeg.png",
    ];

    const lengthItems = items.length - 1;

    const nextSlide = () => {
        setActive(active + 1 <= lengthItems ? active + 1 : 0);
    };

    const prevSlide = () => {
        setActive(active - 1 >= 0 ? active - 1 : lengthItems);
    };

    useEffect(() => {
        const reloadSlider = () => {
            sliderRef.current.style.left = -sliderRef.current.children[active].offsetLeft + "px";
        };

        reloadSlider();
        const interval = setInterval(nextSlide, 3000);

        return () => clearInterval(interval);
    }, [active]);

    return (
        <div className="relative w-auto max-w-full overflow-hidden h-[400px] md:h-[700px] mx-auto">
            <div
                ref={sliderRef}
                className="absolute flex transition-all duration-1000"
                style={{ width: `${items.length * 100}%` }}
            >
                {items.map((src, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                        <img
                            src={src}
                            alt=""
                            className="w-auto h-30 object-cover"
                        />
                    </div>
                ))}
            </div>

            <div className="absolute flex justify-between top-1/2 left-5 w-[90%] transform -translate-y-1/2">
                <button
                    id="prev"
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-white bg-opacity-30 text-white font-bold"
                >
                    &lt;
                </button>
                <button
                    id="next"
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-white bg-opacity-30 text-white font-bold"
                >
                    &gt;
                </button>
            </div>

            <ul className="absolute bottom-2 left-0 w-full flex justify-center">
                {items.map((_, index) => (
                    <li
                        key={index}
                        className={`w-2 h-2 md:w-3 md:h-3 bg-white rounded-full mx-2 transition-all duration-500 ${
                            active === index ? "w-8" : ""
                        }`}
                        onClick={() => setActive(index)}
                    ></li>
                ))}
            </ul>
        </div>
    );
};

export default Slider;
