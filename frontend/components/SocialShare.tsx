"use client";

import Image from "next/image";
import { toast } from "sonner";

interface SocialShareProps {
  title: string;
  url: string;
}

export default function SocialShare({ title, url }: SocialShareProps) {
  const shareOnFacebook = () => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`;
    window.open(facebookUrl, "_blank", "width=600,height=400");
  };

  const shareOnTwitter = () => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    window.open(twitterUrl, "_blank", "width=600,height=400");
  };

  const InstagramHandleShare = () => {
    toast.success("Article link copied to clipboard!");
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-100/10 py-4 px-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-10">
      <h2 className="text-2xl font-normal italic">
        Share This Article on Favourite Social Platform
      </h2>
      <div className="flex gap-4">
        <Image
          src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
          alt="Facebook Share"
          width={30}
          height={30}
          className="cursor-pointer hover:scale-110 transition-all"
          onClick={shareOnFacebook}
        />
        <Image
          src="https://img.icons8.com/?size=100&id=yoQabS8l0qpr&format=png&color=000000"
          alt="Twitter Share"
          width={30}
          height={30}
          className="cursor-pointer hover:scale-110 transition-all"
          onClick={shareOnTwitter}
        />
        <Image
          src="https://img.icons8.com/?size=100&id=0GU4b5gZ4PdA&format=png&color=000000"
          alt="Instagram Share"
          width={30}
          height={30}
          className="cursor-pointer hover:scale-110 transition-all"
          onClick={InstagramHandleShare}
        />
      </div>
    </div>
  );
}
