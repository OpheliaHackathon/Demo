import { Link } from "@tanstack/react-router";

import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="flex bg-sidebar flex-col justify-center items-center h-1/2 relative overflow-hidden p-3 lg:p-0">
      <h1>Benvenuto su CarbonQuest</h1>
      <p className="muted">
        La nostra piattaforma ti aiuterà a calcolare e compensare la tua
        impronta di carbonio.
      </p>

      <Button className="mt-3" asChild>
        <Link to="/dashboard">
          {localStorage.getItem("token") ? "Vai alla Dashboard" : "Inizia ora"}
        </Link>
      </Button>

      <img
        src="neutro.png"
        alt="Ophelia"
        className="absolute -right-20 lg:-bottom-16 -bottom-26 -rotate-12"
        width={300}
        height={300}
        draggable={false}
      />
    </header>
  );
}
