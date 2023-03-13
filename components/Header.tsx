import Image from "next/image";
import Link from "next/link";
import Search from "./Search";

function Banner() {
  return (
    <header className="flex flex-col md:flex-row-reverse lg:space-x-5 justify-between md:items-start px-10 p-5 mb-10">
      <Search />
      <div className=" font-bold">
        <div className="flex flex-col">
          <Link href="/">
            <div className="flex items-center space-x-2">
              <Image
                className="rounded-full"
                width={36}
                height={36}
                src="/images/logo.jpg"
                alt="Logo"
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                NataNoob's Blog
              </h1>
            </div>
          </Link>

          <h2 className="mt-5 md:mt-2 hidden sm:block">
            Mastering{" "}
            <span className="underline decoration-4 decoration-purple-600">
              Digital Productivity
            </span>
            : one component at a time.
          </h2>
        </div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
          Welcome to NataNoob's Blog, let's embark on this exciting journey
          together to create more innovative and impactful digital solutions in
          the world of cutting-edge technology.
        </p>
      </div>
    </header>
  );
}

export default Banner;
