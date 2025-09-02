import React from "react";

const BestestWebs = () => {
  const cards = [
    {
      title: "Your Creative",
      author: "Your Creative",
      imgSrc: "/src/assets/satoru-gojo-blue-3840x2160-16951.jpg",
    },
    {
      title: "naughty or nice",
      author: "digitalists",
      imgSrc: "/src/assets/satoru-gojo-blue-3840x2160-16951.jpg",
    },
    {
      title: "Agency Eats",
      author: "Locomotive",
      imgSrc: "/src/assets/satoru-gojo-blue-3840x2160-16951.jpg",
    },
  ];

  return (
    <section id="BestestWeb" className="w-full text-center px-4 py-16 bg-white">
      {/* Top Text */}
      <p className="text-sm text-gray-500 mb-2">Latest</p>

      {/* Bestest Title */}
      <div className="relative inline-block mb-4">
        <h1 className="text-5xl font-extrabold text-gray-900">BESTEST</h1>
        <img
          src="/src/assets/satoru-gojo-blue-3840x2160-16951.jpg" // <-- hình lá nguyệt quế (nếu có)
          alt="Laurel"
          className="absolute w-8 h-8 right-[-20px] top-[-10px]"
        />
      </div>

      {/* Subtitle */}
      <p className="text-gray-600 mb-12">Buy for the latest websites on HL</p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="rounded-xl overflow-hidden shadow-md">
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold">{card.title}</p>
              <p className="text-sm text-gray-600">
                by <span className="underline">{card.author}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestestWebs;
