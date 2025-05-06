import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import "./Inscription.css";

function Inscription() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis", { email, password, confirmPassword });
  };

  return (
    <div className="inscription-container">
      <div className="inscription-overlay">
        <h1 className="app-title">BakeenApp</h1>
        <div className="inscription-content">
          <h2>Inscription</h2>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              id="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              id="password"
              label="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              type="password"
              id="confirmPassword"
              label="Confirmer mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <Button type="submit">S'inscrire</Button>
          </form>
          <p className="qui-vous-la">Qui va la ?</p>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
