const courses = [
  {
    title: "Arabe classique débutant",
    image: "/arabic.jpg",
    instructor: "Imen B.",
    avatar: "/avatar1.jpg"
  },
  {
    title: "Darija marocaine",
    image: "/morocco.jpg",
    instructor: "Youssef M.",
    avatar: "/avatar2.jpg"
  },
  {
    title: "Tunisien parlé",
    image: "/tunisian.jpg",
    instructor: "Lina G.",
    avatar: "/avatar3.jpg"
  },
  {
    title: "Tunisien parlé",
    image: "/tunisian.jpg",
    instructor: "Lina G.",
    avatar: "/avatar3.jpg"
  },

];

export default function Catalogue() {
  return (
    <div className="p-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Catalogue des cours</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.title} className="bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                <img src={course.avatar} alt={course.instructor} className="w-6 h-6 rounded-full" />
                <span>{course.instructor}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
