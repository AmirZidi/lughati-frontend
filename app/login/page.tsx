export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">🔐 Connexion</h2>
      <input type="email" placeholder="Email" className="input mb-2" />
      <input type="password" placeholder="Mot de passe" className="input mb-4" />
      <button className="btn-primary w-full">Se connecter</button>
    </div>
  );
}
