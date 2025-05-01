import React from "react";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Learn UI Design with Figma from Scratch",
    instructor: "Daniele Buffa",
    score: 4.9,
    img: "/images/figma-course-1.jpg",
    icon: "/images/figma-icon.png",
  },
  {
    title: "Nordic Design Intensive Course: Complete Branding",
    instructor: "Hmmm Creative Studio",
    score: 5,
    img: "/images/figma-course-2.jpg",
    icon: null,
  },
  {
    title: "Innovative Web Design in Figma: A Step-by-Step Process",
    instructor: "Louis Paquet",
    score: 5,
    img: "/images/figma-course-3.jpg",
    icon: null,
  },
];

const AcademyCourse = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12 bg-white">
      {courses.map((course, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden"
        >
          {/* Image with optional icon */}
          <div className="relative">
            <img
              src={course.img}
              alt={course.title}
              className="w-full h-52 object-cover"
            />
            {course.icon && (
              <img
                src={course.icon}
                alt="icon"
                className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-white p-1 shadow"
              />
            )}
          </div>

          {/* Info */}
          <div className="p-4 space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">
              {course.title}
            </h3>
            <div className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">Instructor</span>{" "}
              <br />
              {course.instructor}
            </div>

            <div className="flex items-center justify-between pt-2">
              <div>
                <p className="text-sm text-gray-700">
                  <span className="font-medium text-black">Score</span>{" "}
                  {course.score}/5
                </p>
                <div className="w-20 h-1 bg-yellow-400 rounded-full mt-1" />
              </div>
              <ArrowRight className="text-black" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcademyCourse;
