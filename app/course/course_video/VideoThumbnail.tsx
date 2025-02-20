"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import { PiPlayFill } from "react-icons/pi";

const VideoThumbnail: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const thumbnailUrl = "https://img.youtube.com/vi/mkDokl4YhbA/hqdefault.jpg";

  return (
    <div className="relative w-full">
      {/* Thumbnail Video */}
      <Image
        src="/images/cover/cover-course.png"
        alt="Video Thumbnail"
        width={1200}
        height={300}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary p-4">
        <PiPlayFill
          size={34}
          onClick={openModal}
          className=" cursor-pointer text-white"
        />
      </div>

      {/* Modal untuk memutar video */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Play Video</DialogTitle>
          </DialogHeader>
          <div className="relative">
            <div className="w-full">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/mkDokl4YhbA"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoThumbnail;
