import Link from "next/link";
import React from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { close, menu } from "../public/assets";
import Image from "next/image";

const Navbar = (props) => {
  const [tottle, setTottle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar z-10 text-white">
      <div className="flex justify-center items-center gap-3 ">
        <Link href="/">
          <img
            src="/logo.jpg"
            alt="logo"
            width={700}
            height={700}
            className=" sm:w-[60px] w-[45px]  rounded-full "
          />
        </Link>
        <h1 className="sm:text-3xl text-2xl font-bold font-poppins">
          VAT Digital
        </h1>
      </div>
      <ul className="list-none hidden sm:flex justify-end items-center flex-1">
        {props.home && (
          <Link
            href="/"
            className={`menu font-poppins font-normal cursor-pointer text-[20px] z-10 hover mr-10`}
          >
            <h2 className="text-2xl  font-bold font-poppins">Home</h2>
          </Link>
        )}
        {props.allsongs && (
          <Link
            href="/allsongs"
            className={`menu font-poppins font-normal cursor-pointer text-[20px] z-10 hover mr-10`}
          >
            <h2 className="text-2xl  font-bold font-poppins">All Songs</h2>
          </Link>
        )}

        {props.contact && (
          <Link
            href="/contact"
            className={`menu font-poppins font-normal cursor-pointer text-[20px] z-10 hover mr-0`}
          >
            <h2 className="text-2xl  font-bold font-poppins">Contact</h2>
          </Link>
        )}
      </ul>

      <div className="sm:hidden z-10 flex flex-1 justify-end items-center">
        <Image
          src={tottle ? close : menu}
          alt="menu"
          className="w-[25px] h-[25px] object-contain"
          onClick={() => {
            setTottle((tog) => {
              return !tog;
            });
          }}
        />
        <div
          className={`${
            tottle ? "flex" : "hidden"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar  border-2 border-[#EC3460] `}
        >
          <ul className="list-none flex  justify-end flex-col z-10 items-center flex-1">
            {props.home && (
              <Link
                href="/"
                className={`font-poppins font-normal z-10 cursor-pointer text-[16px]  mb-10}`}
              >
                <h2 className="text-[20px] font-bold hover mb-2">Home</h2>
              </Link>
            )}
            {props.allsongs && (
              <Link
                href="/allsongs"
                className={`font-poppins font-normal z-10 cursor-pointer text-[16px] mb-10}`}
              >
                <h2 className="text-[20px] font-bold hover mb-2">All Songs</h2>
              </Link>
            )}
            {props.contact && (
              <Link
                href="/contact"
                className={`font-poppins font-normal z-10 cursor-pointer text-[16px]  mb-10}`}
              >
                <h2 className="text-[20px] font-bold hover mb-2">Contact</h2>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
