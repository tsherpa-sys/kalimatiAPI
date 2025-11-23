import { HeroSearchBar } from "./HeroSearchBar";
export function Hero() {
    return (
        <div className="relative w-full h-[380px] rounded-xl overflow-hidden">

            {/* Background image */}
            <img
                src="/main banner.png"
                alt="Nepal houses"
                className="w-full h-full object-cover"
            />

            {/* Blue gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-center pl-10">
                <h2 className="text-white text-4xl font-bold leading-tight">
                    Find your new <span className="text-yellow-300">Home</span> 
                </h2>

                <HeroSearchBar />
            </div>
        </div>
    );
}
