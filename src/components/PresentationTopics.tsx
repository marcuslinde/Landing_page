import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Heart, Users, Church } from "lucide-react";

const topics = [
	// ... (din data er uændret)
	{
		Icon: Heart,
		title: "Neurodiversitet i fællesskabet",
		description:
			"En grundlæggende indføring i autisme, ADHD og angst. Vi ser på, hvordan Gud værdsætter hvert barn, og hvorfor neurodiversitet beriger vores fællesskab.",
		targetAudience:
			'Perfekt som en "øjenåbner" for hele kirken, frivillige og ledere.',
	},
	{
		Icon: Users,
		title: "Praktiske inklusionsstrategier",
		description:
			"Konkrete 'hands-on' redskaber til at skabe imødekommende og tilgængelige miljøer for alle børn – fra visuelle hjælpemidler til at håndtere en 'nedsmeltning' med ro.",
		targetAudience:
			"Alle frivillige, der arbejder direkte med børn i klubber, kirker og foreninger.",
	},
	{
		Icon: Church,
		title: "Opbygning af en inkluderende kultur",
		description:
			"For ledere og teams. Vi ser på, hvordan man skaber systemiske ændringer, byder familier med særlige behov velkommen og bygger en sund kultur fra bunden.",
		targetAudience:
			"Præster, lederskabsteams, bestyrelser og nøglemedarbejdere.",
	},
];

export function PresentationTopics() {
	return (
		<section
			id="topics"
			className="py-20 px-6 bg-secondary relative overflow-hidden"
		>
			{/* Playful background blob */}
			<div className="absolute top-[12.5%] -left-20 w-64 h-64 md:w-96 md:h-96 bg-[#117ABB]/15 rounded-blob animate-float"></div>

			<div className="max-w-6xl mx-auto relative">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-heading font-bold tracking-tight mb-2">
						Hvad kan jeg hjælpe jer med?
					</h2>

					<p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
						Mine oplæg tager altid udgangspunkt i jeres unikke behov. Her er de
						kerneemner, vi kan dykke ned i sammen. Alle emner kan leveres som en
						af pakkerne længere nede.
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					{topics.map(({ Icon, title, description, targetAudience }, index) => (
						<Card
							key={index}
							className="group hover:-translate-y-2 h-full hover:border-primary/30 transition-all duration-300 flex flex-col"
						>
							<CardHeader>
								<div className="w-14 h-14 rounded-blob-2 flex items-center justify-center mb-4 bg-[#EAF7F9] transition-all duration-300 group-hover:scale-110">
									<Icon className="w-7 h-7 text-primary" />
								</div>

								<CardTitle>{title}</CardTitle>
							</CardHeader>

							<CardContent className="flex flex-col flex-1">
								<p className="text-muted-foreground mb-6">{description}</p>

								<div className="pt-4 mt-auto border-t border-muted">
									<h4 className="font-semibold text-sm text-foreground mb-1">
										Målgruppe:
									</h4>

									<p className="text-muted-foreground text-sm">
										{targetAudience}
									</p>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
