export default function Catalogue() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">📚 Catalogue des cours</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {['Arabe Classique', 'Darija', 'Tunisien', 'Arabe pour enfants'].map((title, idx) => (
          <div key={idx} className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm text-gray-500 mt-2">Un cours interactif pour progresser rapidement.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
