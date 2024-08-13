export default function MR_event1() {
  return (
      <div className="mr-20 ml-20 pr-20 pl-20 pb-20">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="relative h-80 w-full md:h-96 md:w-full">
                  <img
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:rotate-1 group-hover:scale-105"
                      src="https://www.iiitbh.ac.in/sites/default/files/2023-10/Swatcha%20Pakhwada.jpg"
                      alt="Event"
                  />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="font-dmserif text-3xl font-bold text-white">Mars-Quize</h1>
                  <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.
                  </p>
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                      See More
                  </button>
              </div>
          </div>
      </div>
  );
}
