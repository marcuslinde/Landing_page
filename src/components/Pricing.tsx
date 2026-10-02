import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

// --- OPDATERET DATA BASERET PÅ OPRINDELIG TEKST ---

const pricingTiers = [
	{
		name: "Oplæg & Foredrag",
		price: "3.000 kr",
		description:
			"Et praksisnært oplæg, der giver en grundlæggende indsigt i børn med særlige behov.",
		features: [
			"45-60 minutters foredrag",
			"Intro til diagnoser og reaktionsmønstre",
			"Gode råd og \"do's & don'ts\" i praksis",
			"Intro til fidgets og roskabende tilgange",
			"Huskekort (A5) til alle deltagere",
		],
		popular: false,
	},
	{
		name: "Hands-on Workshop",
		price: "4.500 kr",
		description:
			"Workshoppen kombinerer teori og praksis, hvor I selv får redskaberne i hænderne.",
		features: [
			"2-timers interaktiv workshop",
			"Undervisning om børnetyper og reaktioner",
			"Kreativt værksted (lav egne fidgets)",
			"Fælles samtale og sparring om jeres hverdag",
			"Deltagerne går hjem med egne redskaber",
			"Huskekort (A5) til alle deltagere",
		],
		popular: true,
	},
	{
		name: "Træningsdag & Implementering",
		price: "8.500 kr",
		description:
			"Til jer, der har en specifik udfordring eller brug for langsigtet hjælp til en inkluderende kultur.",
		features: [
			"Alt fra 'Hands-on Workshop'-pakken",
			"Udvidet 3,5-timers session (hel formiddag/aften)",
			"1:1 sparring med udvalgte ledere og nøglepersoner",
			"Foreslag til implementeringsstrategier",
			"Opfølgningssession (virtuel) efter en måned",
		],
		popular: false,
	},
];

export function Pricing() {
	const scrollToForm = () => {
		document
			.getElementById("quote-form")
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section
			id="pricing"
			className="py-20 px-6 bg-secondary overflow-hidden relative"
		>
			<div className="absolute top-16 -left-32 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#117ABB]/15 rounded-blob-2 animate-morph opacity-60"></div>
			<div className="absolute bottom-20 right-5 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-[#117ABB]/15 rounded-blob animate-float opacity-70"></div>

			<div className="max-w-7xl mx-auto relative">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-heading font-bold tracking-tight mb-2">
						Find jeres Format
					</h2>

					{/* --- INTRO-TEKST FRA OPRINDELIG TEKST --- */}
					<p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
						Her er de tre pakker, jeg tilbyder. Alle ydelser tilpasses
						selvfølgelig til jeres målgruppe og unikke behov.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-8 items-start">
					{pricingTiers.map((tier) => (
						<Card
							key={tier.name}
							className={`bg-white relative flex flex-col h-full hover:scale-105 transition-all duration-300 ${
								tier.popular ? "border-primary border-2" : ""
							}`}
						>
							{tier.popular && (
								<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full">
									Mest Populær
								</div>
							)}

							<CardHeader className="text-center pb-8 pt-8">
								<CardTitle className="mb-2">{tier.name}</CardTitle>

								<div className="mb-2">
									<span className="text-4xl font-bold text-primary">
										{tier.price}
									</span>
								</div>

								<CardDescription>{tier.description}</CardDescription>
							</CardHeader>

							<CardContent className="flex flex-col flex-1 justify-between space-y-6">
								<ul className="space-y-3">
									{tier.features.map((feature) => (
										<li key={feature} className="flex items-start gap-3">
											<Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
											<span className="text-sm">{feature}</span>
										</li>
									))}
								</ul>

								<Button
									onClick={scrollToForm}
									className="w-full mt-auto"
									variant={tier.popular ? "default" : "cards"}
								>
									{tier.price === "Pris efter aftale"
										? "Kontakt for tilbud"
										: "Anmod om Tilbud"}
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="mt-12 text-center">
					{/* Del 1: Den almindelige disclaimer */}
					<p className="text-muted-foreground text-sm">
						Alle priser er ekskl. transport (kørsel tillægges efter statens
						gældende takst).
					</p>

					{/* Del 2: Den nye, synlige boks til variable ydelser */}
					<div className="max-w-2xl mx-auto mt-10">
						<h3 className="text-lg font-semibold text-foreground">
							Leder du efter noget andet?
						</h3>

						<p className="text-muted-foreground mt-2">
							Jeg tilbyder også 1:1 sparring til specifikke udfordringer og
							længerevarende partnerskaber for kirkenetværk. Kontakt mig for et
							uforpligtende tilbud.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
