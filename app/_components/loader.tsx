"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const videoElement = document.getElementById("loaderVideo");

    if (videoElement) {
      videoElement.onended = () => setLoading(false);
    }

    const timer = setTimeout(() => setLoading(false), 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <video
        id="loaderVideo"
        className="w-full h-full object-cover"
        autoPlay
        muted
        playsInline
        onEnded={() => setLoading(false)}
      >
        <source src="/loader.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
