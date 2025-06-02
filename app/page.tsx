
export default function Home() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl mb-4">Bienvenue sur <span className="text-blue-600">Lughati 🌍</span></h1>
      <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-6">
        Apprenez l'arabe classique et les dialectes arabes avec les meilleurs instructeurs.
        Des cours interactifs, ludiques et accompagnés par l'IA.
      </p>
      <a href="/catalogue" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
        Explorer les cours
      </a>
    </div>
  );
}
