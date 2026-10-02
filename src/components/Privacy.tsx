import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface PrivacyProps {
  onBack: () => void;
}

export function Privacy({ onBack }: PrivacyProps) {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Button onClick={onBack} variant="ghost" className="mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tilbage til forsiden
        </Button>

        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-heading font-bold tracking-tight mb-2">
              Privatlivspolitik
            </h1>
            <p className="text-muted-foreground mt-2">
              Sidst opdateret: 2. oktober 2026
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-muted-foreground">
              Denne privatlivspolitik forklarer, hvordan Dorte Linde behandler
              personoplysninger, når dortelinde.dk besøges, eller når der tages
              kontakt via hjemmesidens formular, e-mail eller telefon.
            </p>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Dataansvarlig
              </h2>
              <p className="text-muted-foreground mt-2">
                Dorte Linde er dataansvarlig for behandlingen af
                personoplysninger. Har du spørgsmål til denne
                privatlivspolitik, findes kontaktoplysningerne nederst på
                siden.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Hvilke oplysninger der indsamles
              </h2>
              <p className="text-muted-foreground mt-2">
                Når tilbudsanmodningsformularen bruges, indsamles følgende
                oplysninger:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>Dit navn</li>
                <li>Din e-mailadresse</li>
                <li>Navn på kirke, forening eller skole</li>
                <li>Den ønskede pakke</li>
                <li>Ønsket dato for arrangementet</li>
                <li>Forventet antal deltagere</li>
                <li>Oplysninger skrevet i beskedfeltet</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                Ved kontakt via e-mail eller telefon behandles de oplysninger,
                der gives i den forbindelse.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Hvordan oplysningerne indsamles
              </h2>
              <p className="text-muted-foreground mt-2">
                Oplysningerne indsamles direkte fra dig, når du:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>
                  Udfylder og indsender tilbudsanmodningsformularen på
                  hjemmesiden
                </li>
                <li>Tager kontakt via e-mail eller telefon</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Formål og retsgrundlag
              </h2>
              <p className="text-muted-foreground mt-2">
                Oplysningerne bruges til at:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>Besvare henvendelser og give et tilbud</li>
                <li>
                  Planlægge og gennemføre et eventuelt oplæg, forløb eller
                  arrangement
                </li>
                <li>Overholde gældende lovkrav, herunder bogføring</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                Behandlingen sker på grundlag af en legitim interesse i at
                besvare henvendelser (databeskyttelsesforordningens artikel 6,
                stk. 1, litra f) samt, hvor det er relevant, indgåelse eller
                opfyldelse af en aftale (litra b) og retlige forpligtelser
                (litra c).
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Opbevaring
              </h2>
              <p className="text-muted-foreground mt-2">
                Oplysningerne opbevares, så længe det er nødvendigt for at
                besvare henvendelser og håndtere et eventuelt samarbejde.
                Herefter slettes de, medmindre der er pligt til at gemme dem
                efter lovgivningen, f.eks. bogføringsloven.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Datasikkerhed
              </h2>
              <p className="text-muted-foreground mt-2">
                Personoplysninger behandles fortroligt, og der træffes passende
                sikkerhedsforanstaltninger for at forhindre uautoriseret
                adgang, ændring, videregivelse eller ødelæggelse af data.
                Ingen overførselsmetode over internettet er dog 100 % sikker.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Deling af oplysninger
              </h2>
              <p className="text-muted-foreground mt-2">
                Personoplysninger sælges, handles eller udlejes ikke.
                Oplysningerne kan deles i følgende tilfælde:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>
                  Med tjenesteudbydere, der bistår med at drive hjemmesiden og
                  håndtere henvendelser. Formularer på siden behandles via
                  Formspree (formspree.io), der fungerer som databehandler
                </li>
                <li>
                  Når det kræves ved lov, eller for at beskytte rettigheder
                </li>
                <li>Med dit udtrykkelige samtykke</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Dine rettigheder
              </h2>
              <p className="text-muted-foreground mt-2">
                Du har efter databeskyttelsesforordningen ret til at:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>Få indsigt i de oplysninger, der behandles om dig</li>
                <li>Få urigtige oplysninger rettet</li>
                <li>Få dine oplysninger slettet</li>
                <li>Få behandlingen begrænset</li>
                <li>Gøre indsigelse mod behandlingen</li>
                <li>Modtage dine oplysninger i et almindeligt anvendt format</li>
                <li>Trække et eventuelt samtykke tilbage</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                For at gøre brug af disse rettigheder kan du kontakte Dorte
                Linde på dortelinde@gmail.com. Er du utilfreds med behandlingen
                af dine oplysninger, kan du klage til Datatilsynet via
                datatilsynet.dk.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Cookies og sporing
              </h2>
              <p className="text-muted-foreground mt-2">
                Denne hjemmeside bruger i øjeblikket ikke cookies eller
                sporingsteknologier. Ændrer dette sig i fremtiden, opdateres
                denne politik i overensstemmelse hermed.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Børns privatliv
              </h2>
              <p className="text-muted-foreground mt-2">
                Tjenesterne er rettet mod voksne og organisationer. Der
                indsamles ikke bevidst personoplysninger fra børn under 13 år.
                Er der mistanke om, at der er indsamlet oplysninger fra et
                barn, bedes du kontakte Dorte Linde hurtigst muligt.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Ændringer til denne politik
              </h2>
              <p className="text-muted-foreground mt-2">
                Denne privatlivspolitik kan opdateres fra tid til anden.
                Væsentlige ændringer offentliggøres på denne side, og datoen
                under "Sidst opdateret" opdateres.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Kontakt
              </h2>
              <p className="text-muted-foreground mt-2">
                Har du spørgsmål til denne privatlivspolitik, findes
                kontaktoplysningerne her:
              </p>
              <ul className="list-none mt-2 text-muted-foreground space-y-1">
                <li>E-mail: dortelinde@gmail.com</li>
                <li>Telefon: +45 53 55 20 60</li>
              </ul>
            </section>
          </div>

          <div className="pt-8">
            <Button onClick={onBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tilbage til forsiden
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
