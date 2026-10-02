import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BookOpen, Newspaper } from "lucide-react";

const imageSrc = "/images/bogsalg.jpeg";

export function Book() {
	return (
		<section
			id="book"
			className="py-20 px-6 bg-background relative overflow-hidden"
		>
			{/* Playful background shapes */}
			<div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-primary/5 rounded-blob animate-float"></div>
			<div className="absolute bottom-10 right-10 w-64 h-64 md:w-96 md:h-96 bg-accent/30 rounded-blob-2"></div>

			<div className="max-w-6xl mx-auto relative">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="order-2 md:order-1 space-y-6">
						<div className="inline-flex items-center gap-2 px-4 py-2 border border-primary rounded-blob transition-all duration-300 hover:scale-110">
							<span className="text-primary">Min Bog</span>
						</div>

						<h2 className="text-4xl font-heading font-bold tracking-tight mb-2">
							Børn med særlige behov – i kirkeligt børnearbejde
						</h2>

						<p className="text-muted-foreground">
							Bogen er skrevet direkte til dig, der leder efter hjælp til at
							inkludere børn med særlige behov. Som lærer med speciale i
							specialpædagogik har jeg kogt 25 års viden ned til en let
							tilgængelig guide, der giver dig både indsigt i børns
							forskelligheder samt et katalog af praktiske tips.
						</p>

						<div className="space-y-3">
							{[
								"En indsigt i børns forskelligheder (autisme, ADHD, angst mm.)",
								"En praktisk tilgang til håndtering af svære situationer",
								"Værktøjer og konkrete tips, du kan bruge med det samme",
							].map((text) => (
								<div key={text} className="flex items-start gap-3">
									<BookOpen className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
									<p className="text-muted-foreground">{text}</p>
								</div>
							))}
						</div>

						<div className="flex items-start gap-3 pt-2">
							<Newspaper className="w-5 h-5 text-primary mt-1 flex-shrink-0" />

							<p className="text-muted-foreground">
								Omtalt i Udfordringen:
								<a
									href="https://udfordringen.dk/2023/06/ny-bog-saetter-fokus-paa-gode-rammer-i-kirken-for-boern-med-saerlige-behov/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-primary hover:underline ml-1"
								>
									Læs artiklen her
								</a>
							</p>
						</div>

						<div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
							<Button size="lg" className="px-8" asChild>
								<a
									href=" https://prorex.dk/shop/1704-ledelses-litteratur/18753-boern-med-saerlige-behov---i-kirkeligt-boernearbejde/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Køb Bogen
								</a>
							</Button>

							<Button
								size="lg"
								variant="secondary"
								onClick={() => {
									const formElement = document.getElementById("quote-form");
									formElement?.scrollIntoView({ behavior: "smooth" });
								}}
							>
								Book et Oplæg
							</Button>
						</div>
					</div>

					<div className="order-1 md:order-2 hover:scale-105 transition-transform duration-500">
						<ImageWithFallback
							src={imageSrc}
							alt="Forside af bogen 'Børn med særlige behov – i kirkeligt børnearbejde'"
							className="w-full max-w-md mx-auto aspect-square object-cover rounded-blob"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
