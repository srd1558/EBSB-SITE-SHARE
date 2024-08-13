

function Details() {
  return (
    <div className=' grid-cols-1 backdrop-blur-md p-8 gap-8 my-auto mx-auto md:mx-0 lg:mx-0 w-80 h-96 rounded-2xl '>
      <div className="w-56 h-12 font-sans font-medium text-2xl text-gray-100">Contact Details</div>
      <div className="py-0 gap-4 w-64 h-72">
        <p className="py-7 h-9 text-2xl text-gray-100 self-stretch">ebsb@iiitbh.ac.in</p>
        <p className="py-7 h-9 text-2xl text-gray-100 self-stretch">gs.ebsb@iiitbh.ac.in</p>
        <div className="p-0 g-8 w-64 h-16 self-stretch">
          <p className="py-7 h-9 text-2xl text-gray-100 self-stretch">LinkedIn</p>
          <a href="https://www.linkedin.com/company/ebsb-board-iiit-bhagalpur/">
            <img src="linkedin-logo.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <p className="py-7 h-9 text-2xl text-gray-100 self-stretch">Instagram</p>
          <a href="https://www.instagram.com/ebsb_iiitbh/">
            <img src="instagram-logo.svg" alt="Instagram" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Details;
