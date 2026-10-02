import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

interface PrivacyProps {
  onBack: () => void;
}

export function Privacy({ onBack }: PrivacyProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Button onClick={onBack} variant="ghost" className="mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Tilbage til Forsiden
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
              personoplysninger, når du besøger dortelinde.dk, eller når du
              kontakter os via hjemmesidens formular, e-mail eller telefon.
            </p>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Dataansvarlig
              </h2>
              <p className="text-muted-foreground mt-2">
                Dorte Linde er dataansvarlig for behandlingen af dine
                personoplysninger. Har du spørgsmål til denne politik, kan du
                kontakte os på e-mail eller telefon nederst på siden.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Hvilke Oplysninger Vi Indsamler
              </h2>
              <p className="text-muted-foreground mt-2">
                Når du bruger tilbudsanmodningsformularen, indsamler vi
                følgende oplysninger:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>Dit navn</li>
                <li>Din e-mailadresse</li>
                <li>Navn på kirke, forening eller skole</li>
                <li>Hvilken pakke du er interesseret i</li>
                <li>Ønsket dato for arrangementet</li>
                <li>Forventet antal deltagere</li>
                <li>De oplysninger, du selv skriver i din besked</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                Kontakter du os i stedet via e-mail eller telefon, behandler vi
                de oplysninger, du giver os i den forbindelse.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Hvordan Vi Indsamler Dine Oplysninger
              </h2>
              <p className="text-muted-foreground mt-2">
                Vi indsamler oplysningerne direkte fra dig, når du:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>
                  Udfylder og indsender tilbudsanmodningsformularen på
                  hjemmesiden
                </li>
                <li>Kontakter os via e-mail eller telefon</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Formål og Retsgrundlag
              </h2>
              <p className="text-muted-foreground mt-2">
                Vi bruger de oplysninger, du giver, til at:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>Besvare din henvendelse og give dig et tilbud</li>
                <li>
                  Planlægge og gennemføre et eventuelt oplæg, forløb eller
                  arrangement
                </li>
                <li>Overholde gældende lovkrav, herunder bogføring</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                Behandlingen sker på grundlag af vores legitime interesse i at
                besvare din henvendelse (databeskyttelsesforordningens artikel
                6, stk. 1, litra f) samt, hvor det er relevant, indgåelse eller
                opfyldelse af en aftale (litra b) og retlige forpligtelser
                (litra c).
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Opbevaring
              </h2>
              <p className="text-muted-foreground mt-2">
                Vi opbevarer dine oplysninger, så længe det er nødvendigt for at
                besvare din henvendelse og håndtere et eventuelt samarbejde.
                Derefter sletter vi dem, medmindre vi er forpligtet til at gemme
                dem efter lovgivningen, f.eks. bogføringsloven.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Datasikkerhed
              </h2>
              <p className="text-muted-foreground mt-2">
                Vi er forpligtede til at beskytte dine personlige oplysninger.
                Vi implementerer passende sikkerhedsforanstaltninger for at
                forhindre uautoriseret adgang, ændring, videregivelse eller
                ødelæggelse af dine data. Dog er ingen overførselsmetode over
                internettet 100% sikker.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Deling af Oplysninger
              </h2>
              <p className="text-muted-foreground mt-2">
                Vi sælger, handler eller udlejer ikke dine personlige
                oplysninger. Vi kan dele dem i følgende tilfælde:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>
                  Med tjenesteudbydere, der hjælper os med at drive
                  hjemmesiden og håndtere henvendelser. Formularer på siden
                  behandles via Formspree (formspree.io), der fungerer som
                  databehandler
                </li>
                <li>Når det kræves ved lov, eller for at beskytte vores rettigheder</li>
                <li>Med dit udtrykkelige samtykke</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Dine Rettigheder
              </h2>
              <p className="text-muted-foreground mt-2">
                Du har efter databeskyttelsesforordningen ret til at:
              </p>
              <ul className="list-disc pl-6 mt-2 text-muted-foreground space-y-1">
                <li>Få indsigt i de oplysninger, vi behandler om dig</li>
                <li>Få urigtige oplysninger rettet</li>
                <li>Få dine oplysninger slettet</li>
                <li>Få behandlingen begrænset</li>
                <li>Gøre indsigelse mod behandlingen</li>
                <li>Modtage dine oplysninger i et almindeligt anvendt format</li>
                <li>Trække et eventuelt samtykke tilbage</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                For at gøre brug af dine rettigheder kan du kontakte os på
                dortelinde@gmail.com. Er du utilfreds med vores behandling af
                dine oplysninger, kan du klage til Datatilsynet via
                datatilsynet.dk.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Cookies og Sporing
              </h2>
              <p className="text-muted-foreground mt-2">
                Denne hjemmeside bruger i øjeblikket ikke cookies eller
                sporingsteknologier. Hvis dette ændrer sig i fremtiden, vil vi
                opdatere denne politik i overensstemmelse hermed.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Børns Privatliv
              </h2>
              <p className="text-muted-foreground mt-2">
                Vores tjenester er rettet mod voksne og organisationer. Vi
                indsamler ikke bevidst personlige oplysninger fra børn under 13
                år. Hvis du tror, vi har indsamlet oplysninger fra et barn,
                kontakt os venligst øjeblikkeligt.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Ændringer til Denne Politik
              </h2>
              <p className="text-muted-foreground mt-2">
                Vi kan opdatere denne privatlivspolitik fra tid til anden. Vi
                vil underrette dig om eventuelle ændringer ved at offentliggøre
                den nye politik på denne side og opdatere "Sidst opdateret"
                datoen.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-heading font-bold tracking-tight mb-2">
                Kontakt Os
              </h2>
              <p className="text-muted-foreground mt-2">
                Hvis du har spørgsmål om denne privatlivspolitik, kan du
                kontakte os:
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
              Tilbage til Forsiden
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
