import Intro from "./components/Intro";
import Clubs from "./components/Clubs";
import MR_block from "./components/MR-Block";
import MR_event1 from "./components/MR-Event1";
import MR_event2 from "./components/MR-Event2";
import MR_event3 from "./components/MR-Event3";
// import Carousel from "./components/crousal"
export default function Home() {
  return (
    <div className="mt-0 flex-col space-y-1">
      {/* <div className=""> */}
      <div className="relative h-screen overflow-hidden ">
      {/* <div className="h-5 w-full bg-gradient-to-r from-white to-transparent blur-md"></div> */}
      <video
        autoPlay
        loop
        muted
        className="relative w-full h-full object-cover rotate-180  "
      >
        <source src="FlagBG.mp4" type="video/mp4" />
      
      </video>
      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent">
      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

    return (
        <div className=" ">
           <div><Intro/></div>
           {/* <div><Carousel/></div> */}
           <div><Clubs/></div>
           <div><MR_block/></div>
           <div><MR_event1/></div>
           <div><MR_event2/></div>
           <div><MR_event3/></div>
        </div>
      {/* <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm h-20 bottom-0 mb-0 "></div>

      </div> */}
</div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <Intro />
      </div>
      {/* <div><Carousel/></div> */}
      <div className="">
        <Clubs />
      </div>
      <div>
        <MR_block />
      </div>
      <div>
        <MR_event1 />
      </div>
      <div>
        <MR_event2 />
      </div>
      <div>
        <MR_event3 />
      </div>
    </div>
  );
}
