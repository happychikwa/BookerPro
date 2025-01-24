import Image from "next/image";
import Link from 'next/link'
import { ApartmentName, ApartmentQuantity, CalenderDates } from "./lib/definitions";

export default function Home() {
  const 


  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className=" items-center ">
        {/* Start of component */}
        <div className="mx-auto flex flex-col w-full h-15 overflow-hidden bg-indigo-100">
          <div className="justify-items-start" ><h2>FULLY FURNISHED APARTMENTS</h2></div>
            <div className="flex flex-row" >            
                {/* <div className="align-self: flex-start bg-indigo-500" >
                  <Image
                    src="/exohut.png"
                    alt="apartment"
                    width={250}
                    height={250}
                  />
                </div> */}
                {/* Content Section */}
                <div className="p-4 justify-between flex flex-row" >
                  <div>
                    <Image
                          src="/IMG.jpg"
                          alt="apartment"
                          width={1000}
                          height={0}
                          className="align-self: flex-start"
                        />
                  </div>
                    <div>
                      <article>
                        Our fully furnished apartments offer everything you need for a comfortable lifestyle.
                        Stylish interiors designed with your comfort in mind. Conveniently located near 
                        shopping, dining, and entertainment.
                        Amenities include utilities, and housekeeping services are available.
                        Enjoy the perfect blend of convenience and style in our fully furnished apartments.
                      </article>
                      <div className="flex justify-ocontent:space-between space-x-2" >
                        <Link
                          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                          href="#/"
                          target="_blank"
                          rel="noopener noreferrer">
                          Show More
                        </Link>
                        <p>K650/Night</p>
                        <Link
                          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                          href="./reservation/chooseapartment"
                          target="_blank"
                          rel="noopener noreferrer">
                          RESERVE
                        </Link>
                    </div>
                  </div>                   
                </div>
            </div>
        </div>
        {/* End of component */}
      </main>
      <footer className="items-center justify-center">
        <div>
          <strong>Contact Information</strong>
          <li>
            <ul>26095512345</ul>
            <ul>26097712345</ul>
            <ul>26096612345</ul>
          </li>
        </div>
        <div>
          <li>
            <ul><strong>Address</strong></ul>
            <ul><p>Address line goes here</p></ul>
          </li>   
        </div>
        <div>
          <li>
            <ul><p>Social Media Links</p></ul>
            <ul><a href="#">facebook</a></ul>
            <ul><a href="#">Instagram</a></ul>
          </li>
        </div>
      </footer>
    </div>
  );
}
