"use client";
import Image from "next/image";
import logoImg from "/assets/logo.png";
import Link from "next/link";
import MainHeaderBackground from "@/components/main-header/main-header-background";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className="flex items-center justify-between p-8 px-4 md:px-[10%]">
        <Link
          href="/"
          className="flex items-center justify-center gap-8 no-underline 
                 text-customColor font-bold font-montserrat tracking-widest 
                 uppercase text-2xl"
        >
          <div className="drop-shadow-custom">
            <Image
              src={logoImg}
              width={60}
              height={60}
              alt="A plate with food"
              priority
            />
          </div>
          NextLevel Food
        </Link>
        <nav>
          <ul className="flex m-0 p-0 gap-5 text-xl list-none">
            <li>
              <Link className="nav-link" href="/meals">
                Browse Meals
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/community">
                Foodies Community
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
