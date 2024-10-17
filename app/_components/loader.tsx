// "use client";
// import { useEffect, useState } from "react";

// export default function Loader() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const videoElement = document.getElementById("loaderVideo");

//     if (videoElement) {
//       videoElement.onended = () => setLoading(false);
//     }

//     const timer = setTimeout(() => setLoading(false), 6000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (!loading) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
//       <video
//         id="loaderVideo"
//         className="w-full h-full object-cover"
//         autoPlay
//         muted
//         playsInline
//         onEnded={() => setLoading(false)}
//       >
//         <source src="/loader.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// }



"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const videoElement = document.getElementById("loaderVideo") as HTMLVideoElement;

    if (videoElement) {
      videoElement.onended = () => setLoading(false);
    }

    const timer = setTimeout(() => setLoading(false), 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="relative w-full h-full max-w-screen-lg max-h-screen">
        <video
          id="loaderVideo"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-auto h-auto max-w-full max-h-full object-contain"
          autoPlay
          muted
          playsInline
          onEnded={() => setLoading(false)}
        >
          <source src="/loader.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}