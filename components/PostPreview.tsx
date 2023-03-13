import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

const PostPreview = (props: PostMetadata) => {
  return (
    <Link href={`/posts/${props.slug}`} className="group">
      <div className=" flex flex-col cursor-pointer bg-white shadow-2xl rounded-md group-hover:scale-105">
        <div className="relative w-full h-80 drop-shadow-xl  transition-transform duration-200 ease-out">
          <Image
            src={props.image}
            alt="Blog Image"
            className="object-cover object-left lg:object-center rounded-t-md"
            fill
          />
          <div className="absolute bottom-0 w-full bg-opacity-10 bg-black backdrop-blur-lg drop-shadow-lg text-white p-5 flex flex-col justify-between">
            <h2 className="font-bold">{props.title}</h2>
            <p className="text-xs">{props.date}</p>
            <p className="text-xs font-bold">{props.author}</p>
          </div>
        </div>

        <div className="flex-1 p-4">
          <p className="text-gray-500 line-clamp-2">{props.subtitle}</p>
        </div>
        <p className="font-bold flex items-center group-hover:underline p-4">
          Read Post
          <ArrowUpRightIcon className="ml-2 h-4 w-4" color="#8e24aa" />
        </p>
      </div>
    </Link>
  );
};

export default PostPreview;
