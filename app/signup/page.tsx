export default function Signup() {
  return (
    <div className="p-10 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Créer un compte</h1>
      <form className="space-y-4">
        <input className="w-full p-2 border rounded" type="text" placeholder="Nom complet" />
        <input className="w-full p-2 border rounded" type="email" placeholder="Email" />
        <input className="w-full p-2 border rounded" type="password" placeholder="Mot de passe" />
        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          S'inscrire
        </button>
      </form>
    </div>
  );
}
