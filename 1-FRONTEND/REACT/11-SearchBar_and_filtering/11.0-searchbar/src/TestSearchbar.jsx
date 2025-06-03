import React, { useState } from "react";
import { dummy } from "./utils/dummy";
import { IoTicketOutline } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import { SlCalender } from "react-icons/sl";

function TestSearchBar() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <h2>Find Events</h2>
      <div>
        <h1 className="text-center mt-4">Based on EventName</h1>
        <form>
          <input
            className="border-2 border-black my-3"
            type="search"
            placeholder="search title"
            name=""
            id=""
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {/* <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.first_name.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </table> */}
        <div className="mb-2 px-0 lg:mb-10 w-full  p-2">
          <div className="flex flex-col flex-wrap gap-2  sm:flex-row sm:gap-16  sm:justify-center">
            {/* event card starts here */}
            {dummy
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.eventname.toLowerCase().includes(search);
              })
              .map((item) => (
                <div
                  key={item?.id}
                  className="flex break-words bg-transparent bg-white bg-cover bg-clip-padding p-0 transition-shadow duration-300 px-4 pt-6 pb-5 sm:px-0 sm:pt-0 sm:flex-row sm:justify-start sm:rounded sm:w-[272px] border-gray-300 border-b-[1px]"
                >
                  <a
                    href=""
                    className="group inline w-full cursor-pointer hover:no-underline "
                  >
                    <div className="h-full w-full flex flex-row sm:flex-col-reverse">
                      {/* content of card */}
                      <div className="grow space-y-2 pr-4 md:mt-3">
                        {/* title container */}
                        <h3 className="text-lg font-semibold  line-clamp-4 group-hover:underline sm:text-xl sm:leading-6 overflow-wrap-anywhere">
                          {item?.eventname}
                        </h3>
                        {/* Organizer container */}
                        <p className="text-sm font-medium text-gray-300 line-clamp-2">
                          Hosted by: {item?.organiser}
                        </p>
                        {/* date container */}
                        <div>
                          <div className="flex items-center space-x-1.5 text-gray-400">
                            <div>
                              <SlCalender />
                            </div>
                            <div className="flex flex-col text-[12px] sm:text-sm uppercase leading-5 tracking-tight">
                              {item?.date} . {item?.time}
                            </div>
                          </div>
                        </div>
                        {/* price container */}
                        <div className="flex flex-wrap gap-x-4 lg:pt-1 text-[14px]">
                          <div className="flex items-center space-x-1.5 text-gray7">
                            <TiTickOutline />
                            <span>{item?.ticketsize}</span>
                          </div>
                          <div className="flex items-center space-x-1.5 text-gray7">
                            <div>
                              <IoTicketOutline />
                            </div>
                            <span className="inline">{item?.ticketprice}</span>
                          </div>
                        </div>
                      </div>
                      {/* image of card */}
                      <div className="ml-3 bg-transparent sm:ml-0 lg:mr-0 sm:min-w-[90px]">
                        <div
                          className="overflow-hidden bg-transparent sm:w-full h-[90px] w-[90px]
                      sm:h-[153px]"
                        >
                          <img
                            src={item?.src}
                            alt={item?.title}
                            loading="lazy"
                            decoding="async"
                            className="rounded-lg w-full h-full top-0 left-0 object-cover "
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestSearchBar;
