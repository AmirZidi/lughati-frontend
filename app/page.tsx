export default function Home() {
  return (
    <section className="bg-white dark:bg-zinc-900 py-20 text-center px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-zinc-800 dark:text-white mb-6">Bienvenue sur Lughati 🌍</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Apprenez l’arabe, le français et l’anglais avec les meilleurs instructeurs. Cours interactifs et accompagnement IA.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/catalogue" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold">
            Explorer les cours
          </a>
          <a href="/login" className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-md font-semibold">
            Connexion
          </a>
        </div>
      </div>
    </section>
  );
}
