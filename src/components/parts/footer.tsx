export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full bg-sidebar h-20 flex items-center justify-center border-t">
      <p>
        &copy; {year} Hackathon Belladonna, Team Ophelia. Tutti diritti
        riservati.
      </p>
    </footer>
  );
}
