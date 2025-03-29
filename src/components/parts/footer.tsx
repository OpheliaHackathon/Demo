export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-sidebar h-20 flex items-center justify-center border-t">
      <span>
        &copy; {year} Hackathon Belladonna, Team Ophelia. Tutti diritti
        riservati.
      </span>
    </footer>
  );
}
