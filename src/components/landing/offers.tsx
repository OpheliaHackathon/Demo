import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const services = [
  {
    id: 1,
    title: "Obiettivo",
    description:
      "Vogliamo rendere voi utenti consapevoli della vostra emissione di CO2 derivata dal vostro traffico su internet.",
  },
  {
    id: 2,
    title: "Dashboard",
    description:
      "Potrai vedere tutte le informazioni relative ai tuoi consumi attraverso dei grafici semplici ed intuitivi sulla nostra dashboard.",
  },
  {
    id: 3,
    title: "Leaderboard",
    description:
      "Sfida gli altri utenti, gareggia in una competizione dove vince chi consuma di meno.",
  },
  {
    id: 4,
    title: "Consigli",
    description:
      "Ricevi quotidianamente consigli su come migliorare la tua impronta carbonica digitale.",
  },
];

export default function Services() {
  return (
    <div className="w-full h-fit lg:h-1/2 flex flex-col justify-center items-center gap-3 p-3">
      <div className="flex flex-col items-center">
        <h2>
          I nostri <span className="text-primary">servizi</span>:
        </h2>
        <p className="muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla saepe
          facere quae cumque molestiae, laboriosam.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 w-full">
        {services.map((service) => (
          <Card key={service.id} className="lg:w-1/4 w-full">
            <CardHeader>
              <CardTitle className="text-3xl">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
