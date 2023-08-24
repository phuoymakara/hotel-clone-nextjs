"use client"

import Link from "next/link"


export const BodyCard = () =>{
  return(
    <div className="z-0">
      <div id="bg-img" className="relative z-0 h-[120vh] top-0 left-0 md:mt-[-9%] mt-[-32%] sm " >
        <div className="absolute left-[10%] top-[55%] ">
            <h2 className="text-white font-bold font-mono text-[40px]">Welcome to our hotel</h2>
            <button className="mt-6 rounded-sm px-6 py-2 border-[1px] border-yellow-500 text-white font-medium hover:bg-yellow-500">Book Now</button>
        </div>
      </div>

      <div className="my-12">
        <h1 className="text-center text-yellow-500 text-[40px] font-bold">Palace Gate Hotel & Resort</h1>
      </div>

      <div className="w-[80%] mx-auto flex flex-wrap md:flex-row sm:flex-col">
        <div className="w-[50%] p-1">
          <p>
          Welcome to the Palace Gate Hotel & Resort, a new luxury hotel situated in the heart of the thriving and lively capital city of the Kingdom of Wonder. Only 11.5km from Phnom Penh International Airport, the hotel is located adjacent to the splendors of the Royal Palace and within a short walking distance of the bustling Riverside area of Sisowath Quay.
          </p>
        </div>
        <div className="w-[50%] p-1">
          <p>
          Welcome to the Palace Gate Hotel & Resort, a new luxury hotel situated in the heart of the thriving and lively capital city of the Kingdom of Wonder. Only 11.5km from Phnom Penh International Airport, the hotel is located adjacent to the splendors of the Royal Palace and within a short walking distance of the bustling Riverside area of Sisowath Quay.
          </p>
        </div>
      </div>

      <div className="mt-8 w-[80%] mx-auto flex flex-wrap md:flex-row sm:flex-col">
        <div className="md:w-[16.1%] items-center justify-center flex w-[50%] sm">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 36 36"><path fill="#E1E8ED" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18z"/><path fill="#CCD6DD" d="M30 18c0 6.628-5.372 12-12 12S6 24.628 6 18S11.372 6 18 6s12 5.372 12 12z"/><path fill="#E1E8ED" d="M29 18c0 6.075-4.925 11-11 11c-6.076 0-11-4.925-11-11c0-6.076 4.925-11 11-11s11 4.924 11 11z"/><g fill="#99AAB5"><circle cx="1" cy="1" r="1"/><path d="M0 1h2v7H0z"/><circle cx="5" cy="1" r="1"/><path d="M4 1h2v7H4z"/><circle cx="9" cy="1" r="1"/><path d="M8 1h2v7H8zM3 14h4v20H3z"/><circle cx="5" cy="34" r="2"/><path d="M8 8a1 1 0 0 1-2 0H4a1 1 0 0 1-2 0H0c0 3.866 1 7 5 7s5-3.134 5-7H8z"/><circle cx="1" cy="8" r="1"/><circle cx="5" cy="8" r="1"/><circle cx="9" cy="8" r="1"/></g><g fill="#99AAB5"><path d="M30 14h4v20h-4z"/><circle cx="32" cy="34" r="2"/><path d="M32 0c1 0 2 1 2 3v16s-7 2-7-8c0-6 3-11 5-11z"/></g></svg>
            <h2 className="text-center mt-1 text-[20px] text-orange-500 font-medium">Pool</h2>
          </span>
        </div>
        <div className="md:w-[16.1%] items-center justify-center flex w-[50%] sm">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 36 36"><path fill="#E1E8ED" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18z"/><path fill="#CCD6DD" d="M30 18c0 6.628-5.372 12-12 12S6 24.628 6 18S11.372 6 18 6s12 5.372 12 12z"/><path fill="#E1E8ED" d="M29 18c0 6.075-4.925 11-11 11c-6.076 0-11-4.925-11-11c0-6.076 4.925-11 11-11s11 4.924 11 11z"/><g fill="#99AAB5"><circle cx="1" cy="1" r="1"/><path d="M0 1h2v7H0z"/><circle cx="5" cy="1" r="1"/><path d="M4 1h2v7H4z"/><circle cx="9" cy="1" r="1"/><path d="M8 1h2v7H8zM3 14h4v20H3z"/><circle cx="5" cy="34" r="2"/><path d="M8 8a1 1 0 0 1-2 0H4a1 1 0 0 1-2 0H0c0 3.866 1 7 5 7s5-3.134 5-7H8z"/><circle cx="1" cy="8" r="1"/><circle cx="5" cy="8" r="1"/><circle cx="9" cy="8" r="1"/></g><g fill="#99AAB5"><path d="M30 14h4v20h-4z"/><circle cx="32" cy="34" r="2"/><path d="M32 0c1 0 2 1 2 3v16s-7 2-7-8c0-6 3-11 5-11z"/></g></svg>
            <h2 className="text-center mt-1 text-[20px] text-orange-500 font-medium">Pool</h2>
          </span>
        </div>
        <div className="md:w-[16.1%] items-center justify-center flex w-[50%] sm">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 36 36"><path fill="#E1E8ED" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18z"/><path fill="#CCD6DD" d="M30 18c0 6.628-5.372 12-12 12S6 24.628 6 18S11.372 6 18 6s12 5.372 12 12z"/><path fill="#E1E8ED" d="M29 18c0 6.075-4.925 11-11 11c-6.076 0-11-4.925-11-11c0-6.076 4.925-11 11-11s11 4.924 11 11z"/><g fill="#99AAB5"><circle cx="1" cy="1" r="1"/><path d="M0 1h2v7H0z"/><circle cx="5" cy="1" r="1"/><path d="M4 1h2v7H4z"/><circle cx="9" cy="1" r="1"/><path d="M8 1h2v7H8zM3 14h4v20H3z"/><circle cx="5" cy="34" r="2"/><path d="M8 8a1 1 0 0 1-2 0H4a1 1 0 0 1-2 0H0c0 3.866 1 7 5 7s5-3.134 5-7H8z"/><circle cx="1" cy="8" r="1"/><circle cx="5" cy="8" r="1"/><circle cx="9" cy="8" r="1"/></g><g fill="#99AAB5"><path d="M30 14h4v20h-4z"/><circle cx="32" cy="34" r="2"/><path d="M32 0c1 0 2 1 2 3v16s-7 2-7-8c0-6 3-11 5-11z"/></g></svg>
            <h2 className="text-center mt-1 text-[20px] text-orange-500 font-medium">Pool</h2>
          </span>
        </div>
        <div className="md:w-[16.1%] items-center justify-center flex w-[50%] sm">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 36 36"><path fill="#E1E8ED" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18z"/><path fill="#CCD6DD" d="M30 18c0 6.628-5.372 12-12 12S6 24.628 6 18S11.372 6 18 6s12 5.372 12 12z"/><path fill="#E1E8ED" d="M29 18c0 6.075-4.925 11-11 11c-6.076 0-11-4.925-11-11c0-6.076 4.925-11 11-11s11 4.924 11 11z"/><g fill="#99AAB5"><circle cx="1" cy="1" r="1"/><path d="M0 1h2v7H0z"/><circle cx="5" cy="1" r="1"/><path d="M4 1h2v7H4z"/><circle cx="9" cy="1" r="1"/><path d="M8 1h2v7H8zM3 14h4v20H3z"/><circle cx="5" cy="34" r="2"/><path d="M8 8a1 1 0 0 1-2 0H4a1 1 0 0 1-2 0H0c0 3.866 1 7 5 7s5-3.134 5-7H8z"/><circle cx="1" cy="8" r="1"/><circle cx="5" cy="8" r="1"/><circle cx="9" cy="8" r="1"/></g><g fill="#99AAB5"><path d="M30 14h4v20h-4z"/><circle cx="32" cy="34" r="2"/><path d="M32 0c1 0 2 1 2 3v16s-7 2-7-8c0-6 3-11 5-11z"/></g></svg>
            <h2 className="text-center mt-1 text-[20px] text-orange-500 font-medium">Pool</h2>
          </span>
        </div>
        <div className="md:w-[16.1%] items-center justify-center flex w-[50%] sm">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 36 36"><path fill="#E1E8ED" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18z"/><path fill="#CCD6DD" d="M30 18c0 6.628-5.372 12-12 12S6 24.628 6 18S11.372 6 18 6s12 5.372 12 12z"/><path fill="#E1E8ED" d="M29 18c0 6.075-4.925 11-11 11c-6.076 0-11-4.925-11-11c0-6.076 4.925-11 11-11s11 4.924 11 11z"/><g fill="#99AAB5"><circle cx="1" cy="1" r="1"/><path d="M0 1h2v7H0z"/><circle cx="5" cy="1" r="1"/><path d="M4 1h2v7H4z"/><circle cx="9" cy="1" r="1"/><path d="M8 1h2v7H8zM3 14h4v20H3z"/><circle cx="5" cy="34" r="2"/><path d="M8 8a1 1 0 0 1-2 0H4a1 1 0 0 1-2 0H0c0 3.866 1 7 5 7s5-3.134 5-7H8z"/><circle cx="1" cy="8" r="1"/><circle cx="5" cy="8" r="1"/><circle cx="9" cy="8" r="1"/></g><g fill="#99AAB5"><path d="M30 14h4v20h-4z"/><circle cx="32" cy="34" r="2"/><path d="M32 0c1 0 2 1 2 3v16s-7 2-7-8c0-6 3-11 5-11z"/></g></svg>
            <h2 className="text-center mt-1 text-[20px] text-orange-500 font-medium">Pool</h2>
          </span>
        </div>
        <div className="md:w-[16.1%] items-center justify-center flex w-[50%] sm">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 36 36"><path fill="#E1E8ED" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18S8.059 0 18 0s18 8.059 18 18z"/><path fill="#CCD6DD" d="M30 18c0 6.628-5.372 12-12 12S6 24.628 6 18S11.372 6 18 6s12 5.372 12 12z"/><path fill="#E1E8ED" d="M29 18c0 6.075-4.925 11-11 11c-6.076 0-11-4.925-11-11c0-6.076 4.925-11 11-11s11 4.924 11 11z"/><g fill="#99AAB5"><circle cx="1" cy="1" r="1"/><path d="M0 1h2v7H0z"/><circle cx="5" cy="1" r="1"/><path d="M4 1h2v7H4z"/><circle cx="9" cy="1" r="1"/><path d="M8 1h2v7H8zM3 14h4v20H3z"/><circle cx="5" cy="34" r="2"/><path d="M8 8a1 1 0 0 1-2 0H4a1 1 0 0 1-2 0H0c0 3.866 1 7 5 7s5-3.134 5-7H8z"/><circle cx="1" cy="8" r="1"/><circle cx="5" cy="8" r="1"/><circle cx="9" cy="8" r="1"/></g><g fill="#99AAB5"><path d="M30 14h4v20h-4z"/><circle cx="32" cy="34" r="2"/><path d="M32 0c1 0 2 1 2 3v16s-7 2-7-8c0-6 3-11 5-11z"/></g></svg>
            <h2 className="text-center mt-1 text-[20px] text-orange-500 font-medium">Pool</h2>
          </span>
        </div>
      </div>

      <div className="mt-8 w-[80%] mx-auto flex flex-wrap md:flex-row sm:flex-col md:justify-between">
          <div className="md:w-[49%] md:mb-0 w-full mb-2 sm">
            <iframe width="560"  className="w-full border-[1px] border-white" height="315" src="https://www.youtube.com/embed/ITYdrQzx5_0?si=PTykrS0ukbMD78oj" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          <div className="md:w-[49%] w-full mb-2 sm">
            <iframe width="560" className="w-full border-[1px] border-white" height="315" src="https://www.youtube.com/embed/ITYdrQzx5_0?si=PTykrS0ukbMD78oj" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
      </div>

      <div className="mt-8 w-[80%] mx-auto">
        <h6 className="text-center  text-[17px]">
          When you arrive, the first thing you notice about our hotel is our lovingly restored French colonial villa – perhaps one of the finest examples in the city – formerly the seat of power of the French colonial government. This stunning centrepiece, complete with ornate columns and wonderful examples of Cambodian tile making, serves as the home to our fine dining restaurant, Mealea. The restaurant offers both French Fine Dining or Royal Khmer Cuisine options, and our chef has created a range of culinary delights to please every palate. Combining deluxe modern accommodation with a traditional Angkorian feel, Palace Gate Hotel & Resort offers guests the chance to relax in a palatial oasis or to explore the resurgent Pearl of Asia.
        </h6>
      </div>

      <div className="mt-8 w-[80%] mx-auto md:justify-between flex flex-wrap md:flex-row sm:flex-col">
        <div className="md:w-[49%] sm:w-full block">
          <div className="w-full mb-5">
            <img src="https://palacegatepp.com/wp-content/uploads/2023/02/Palace-Gate-Hotel-Car-001-768x513.jpg.webp" className="w-full" alt="" />
          </div>
          <div className="w-full ">
            <img src="https://palacegatepp.com/wp-content/uploads/2023/02/Palace-Gate-Hotel-Pool-768x512.png.webp" className="w-full" alt="" />
          </div>
        </div>
        <div className="md:w-[49%] sm:w-full block mt-6 sm">
          <div className="w-full mb-8">
            <img src="https://palacegatepp.com/wp-content/uploads/2023/02/Palace-Gate-Hotel-Mealea-Restaurant-002-768x768.png.webp" className="w-full h-[360px]" alt="" />
          </div>
          <div className="w-full ">
          Choose from a range of carefully designed rooms, have some time out by the pool, sip cocktails at our rooftop bar surrounded by the greenery of our unique organic herb and vegetable garden which supplies Mealea, or use the hotel as your base for sightseeing trips around the city and beyond. Guests can also choose from an extensive range of treatments provided by experienced therapists in our spa facility or use our well-equipped gym. Please take some time to explore our room options and facilities, and see what Palace Gate Hotel & Resort can offer you. Our highly trained and attentive staff look forward to welcoming you soon.
          </div>
        </div>
      </div>

      <div className="mt-10 w-[80%] mx-auto">
          <h1 className="text-[50px] text-yellow-500 font-bold ">Rooms</h1>
          <div className="mt-6 w-full flex flex-wrap md:flex-row sm:flex-col">
            <div className="md:w-[32%] sm:w-[50%] block md:mr-3">
              <div className="relative room-box">
                  <img src="https://palacegatepp.com/wp-content/uploads/2022/11/Palace-Suite.jpeg" alt="" />
                  <span className="hidden w-[300px] h-[300px] rounded-[50%] border-[2px] border-white absolute room-child md:right-[-20%] md:bottom-[-25%] right-[-50%] bottom-[-60%] sm">
                  </span>
              </div>
              <h6 className="text-[20px] py-2">Palace Suite</h6>
            </div>
            <div className="md:w-[32%] sm:w-[50%] block md:mx-3">
              <div className="relative room-box">
                  <img src="https://palacegatepp.com/wp-content/uploads/2022/11/Palace-Suite.jpeg" alt="" />
                  <span className="hidden w-[300px] h-[300px] rounded-[50%] border-[2px] border-white absolute room-child md:right-[-20%] md:bottom-[-25%] right-[-50%] bottom-[-60%] sm">
                  </span>
              </div>
              <h6 className="text-[20px] py-2">Palace Suite</h6>
            </div>
            <div className="md:w-[32%] sm:w-[50%] block md:ml-3">
              <div className="relative room-box">
                  <img src="https://palacegatepp.com/wp-content/uploads/2022/11/Palace-Suite.jpeg" alt="" />
                  <span className="hidden w-[300px] h-[300px] rounded-[50%] border-[2px] border-white absolute room-child md:right-[-20%] md:bottom-[-25%] right-[-50%] bottom-[-60%] sm">
                  </span>
              </div>
              <h6 className="text-[20px] py-2">Palace Suite</h6>
            </div>
          </div>
          <div className="mt-6 w-full flex flex-wrap md:flex-row sm:flex-col">
            <div className="md:w-[32%] sm:w-[50%] block md:mr-3">
              <div className="relative room-box">
                  <img src="https://palacegatepp.com/wp-content/uploads/2022/11/Apsara-Suite.jpeg" alt="" />
                  <span className="hidden w-[300px] h-[300px] rounded-[50%] border-[2px] border-white absolute room-child md:right-[-20%] md:bottom-[-25%] right-[-50%] bottom-[-60%] sm">
                  </span>
              </div>
              <h6 className="text-[20px] py-2">Palace Suite</h6>
            </div>
            <div className="md:w-[32%] sm:w-[50%] block md:mx-3">
              <div className="relative room-box">
                  <img src="https://palacegatepp.com/wp-content/uploads/2022/11/Apsara-Suite.jpeg" alt="" />
                  <span className="hidden w-[300px] h-[300px] rounded-[50%] border-[2px] border-white absolute room-child md:right-[-20%] md:bottom-[-25%] right-[-50%] bottom-[-60%] sm">
                  </span>
              </div>
              <h6 className="text-[20px] py-2">Palace Suite</h6>
            </div>
            <div className="md:w-[32%] sm:w-[50%] block md:ml-3">
              <div className="relative room-box">
                  <img src="https://palacegatepp.com/wp-content/uploads/2022/11/Apsara-Suite.jpeg" alt="" />
                  <span className="hidden w-[300px] h-[300px] rounded-[50%] border-[2px] border-white absolute room-child md:right-[-20%] md:bottom-[-25%] right-[-50%] bottom-[-60%] sm">
                  </span>
              </div>
              <h6 className="text-[20px] py-2">Palace Suite</h6>
            </div>
          </div>
          <div className="w-full items-center justify-center flex mt-6">
            <span className="flex">
              <button className="mr-2 px-4 py-1 border-[1.5px] rounded-sm border-yellow-500 text-[16px] font-medium">View Rooms</button>
              <button className="ml-2 px-4 py-1 border-[1.5px] rounded-sm text-white hover:-translate-y-1 border-yellow-500 text-[16px] bg-yellow-500 font-medium">Book Now</button>
            
            </span>
          </div>
      </div>

     <div className="mt-10 w-full px-2 border-b-[1px]">

     </div>
      
      <div className="w-[80%] mx-auto mt-6">
          <h1 className="text-[45px] mb-6 text-yellow-500 font-bold text-center">Reviews</h1>
          <p className="text-[17px] text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas amet doloribus architecto tempora assumenda nesciunt expedita iusto dignissimos maiores, placeat nemo voluptate facere ipsum quasi temporibus ullam corrupti maxime, fuga quos at provident exercitationem modi iure commodi. Doloribus vitae, error quidem reiciendis laboriosam voluptate voluptates. Tempore accusantium exercitationem voluptas fuga aliquid quae expedita, ducimus quas ad placeat voluptates minima alias incidunt adipisci cupiditate iure consectetur, architecto nobis soluta itaque labore?
          </p>
      </div>

      <div className="mt-40 w-full px-2 border-b-[1px]">

     </div>

     <div className="mt-0 w-full border-b-[1px]">
        <div className="w-full flex flex-wrap md:flex-row sm:flex-col">
            <div className="md:w-[50%] sm:w-full ">
                <img src="https://demo.palacegatepp.com/wp-content/uploads/2023/01/Mealea-Restaurant.png" className="w-full" alt="" />
            </div>
            <div className="md:w-[50%] sm:w-full p-8">
                <h5 className="text-yellow-500 text-center ">FINE DINING RESTAURANT</h5>
                <h1 className="text-yellow-500 text-[40px] text-center ">Mealea Restaurant</h1>
                <div className="items-center justify-center flex">
                    <div className="flex py-4">
                        <span className="w-[100px] border-b-[1px]"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z"/></svg>
                        <span className="w-[100px] border-b-[1px] "></span>
                    </div>
                </div>
                <p className=" text-center" >
                  The centerpiece of our hotel is also the location of Mealea, our fine dining restaurant, where our chef and his team will take you on a culinary journey across Asia and the rest of the world. No better location to enjoy the very best gastronomic choices than this wonderfully restored 80-year-old French colonial building that once served as the headquarters for the commander of the French army in Cambodia.
                </p>
                <div className="mt-8 items-center justify-center flex">
                  <button className="mr-2 px-4 py-1 border-[1.5px] rounded-sm border-yellow-500 text-[16px] font-medium hover:bg-yellow-500">View Rooms</button>
                </div>
            </div>
        </div>
        <div className="w-full flex flex-wrap md:flex-row sm:flex-col">
           
            <div className="md:w-[50%] sm:w-full p-8">
                <h5 className="text-yellow-500 text-center ">FINE DINING RESTAURANT</h5>
                <h1 className="text-yellow-500 text-[40px] text-center ">Mealea Restaurant</h1>
                <div className="items-center justify-center flex">
                    <div className="flex py-4">
                        <span className="w-[100px] border-b-[1px]"></span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#888888" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z"/></svg>
                        <span className="w-[100px] border-b-[1px] "></span>
                    </div>
                </div>
                <p className=" text-center" >
                  The centerpiece of our hotel is also the location of Mealea, our fine dining restaurant, where our chef and his team will take you on a culinary journey across Asia and the rest of the world. No better location to enjoy the very best gastronomic choices than this wonderfully restored 80-year-old French colonial building that once served as the headquarters for the commander of the French army in Cambodia.
                </p>
                <div className="mt-8 items-center justify-center flex">
                  <button className="mr-2 px-4 py-1 border-[1.5px] rounded-sm border-yellow-500 text-[16px] font-medium hover:bg-yellow-500">View Rooms</button>
                </div>
            </div>
            <div className="md:w-[50%] sm:w-full ">
                <img src="https://demo.palacegatepp.com/wp-content/uploads/2023/01/Senses-Spa.jpg" className="w-full" alt="" />
            </div>
        </div>
     </div>

      <div className="w-[80%] mx-auto mt-8">
            <div className="mb-20">
                <h1 className="text-yellow-500 text-[45px] text-center font-bold ">Special Offers</h1>
                <p className="text-center mt-4">
                Find out the best deals available at Palace Gate Hotel and Resort!
                </p>
            </div>
            <div className="w-full flex flex-wrap md:flex-row sm:flex-col">
                <div className="md:w-[32%] sm:w-full block md:mr-3">
                    <img src="https://palacegatepp.com/wp-content/uploads/2023/08/Mealea-poster-Chill-out-Friday-768x512.jpg.webp" className="w-full h-[442px]" alt="" />
                    <h3 className="text-[20px] mt-3">Mealea Chill Out Friday</h3>
                </div>
                <div className="md:w-[32%] sm:w-full block md:mx-3">
                    <img src="https://palacegatepp.com/wp-content/uploads/2023/08/Hair-Nail-Care-Spa-65-768x768.jpg.webp" className="w-full h-[442px]" alt="" />
                    <h3 className="text-[20px] mt-3">Mealea Chill Out Friday</h3>
                </div>
                <div className="md:w-[32%] sm:w-full block md:ml-3">
                    <img src="https://palacegatepp.com/wp-content/uploads/2023/08/One-Evening-in-Havan-768x512.png.webp" className="w-full h-[442px]" alt="" />
                    <h3 className="text-[20px] mt-3">Mealea Chill Out Friday</h3>
                </div>
               
            </div>
            <div className="items-center justify-center flex m-10">
                  <button className="mr-2 px-4 py-1 border-[1.5px] rounded-sm border-yellow-500 text-[16px] font-medium hover:bg-yellow-500">All offer</button>
              </div>
      </div>



      <div className="w-full bg-white mt-16">
        <div className="w-[80%] mx-auto flex flex-wrap md:flex-row sm:flex-col">
            <div className="md:w-[33%] w-full sm">
              <span className="items-center justify-center flex">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="100" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
              </span>
              <p className="text-black text-center">Overall Rating</p>
              <span className="items-center justify-center flex mt-2">
                <h6>4.6</h6>
                <ul className="flex px-2 cursor-pointer">
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg></li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg></li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg></li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg></li>
                </ul>
              </span>
              <nav className="items-center justify-center mt-2 flex">
                <Link href={``} className="border-b-[0.8px] border-black">Read our 800+ reviews</Link>
              </nav>
            </div>
            <div className="md:w-[33%] w-full sm">
              <span className="items-center justify-center flex">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="100" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
              </span>
              <p className="text-black text-center">Overall Rating</p>
              <span className="items-center justify-center flex mt-2">
                <h6>4.6</h6>
                <ul className="flex px-2 cursor-pointer">
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg></li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg></li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg></li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg></li>
                </ul>
              </span>
              <nav className="items-center justify-center mt-2 flex">
                <Link href={``} className="border-b-[0.8px] border-black">Read our 800+ reviews</Link>
              </nav>
            </div>
            <div className="md:w-[33%] w-full sm">
              <span className="items-center justify-center flex">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60" height="100" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
              </span>
              <p className="text-black text-center">Overall Rating</p>
              <span className="items-center justify-center flex mt-2">
                <h6>4.6</h6>
                <ul className="flex px-2 cursor-pointer">
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg></li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg></li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg></li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="25" height="32" viewBox="0 0 24 24"><path fill="#888888" d="m22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg></li>
                </ul>
              </span>
              <nav className="items-center justify-center mt-2 flex">
                <Link href={``} className="border-b-[0.8px] border-black">Read our 800+ reviews</Link>
              </nav>
            </div>
        </div>
      </div>
    </div>
  )
}