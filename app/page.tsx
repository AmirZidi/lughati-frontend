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
    title: "Libanais conversationnel",
    image: "/lebanese.jpg",
    instructor: "Rami K.",
    avatar: "/avatar4.jpg"
  },
];

export default function Home() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight mb-4">
          Apprenez l’arabe avec <span className="text-blue-600">Lughati</span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
          Maîtrisez l’arabe classique et les dialectes avec des instructeurs natifs.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition">
            Explorer les cours
          </button>
          <button className="border border-gray-400 px-6 py-2 rounded-md font-semibold hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
            Créer un cours
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div key={course.title} className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
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
    </section>
  );
}
