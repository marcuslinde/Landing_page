import { Quote } from "lucide-react";

const mosaikSrc = "/images/logos/mosaik-logo.webp";
const danskoaseSrc = "/images/logos/DanskOase.webp";
const apostolskSrc = "/images/logos/apostolsk.webp";

const OrganizationLogo = ({ src, alt }: { src: string; alt: string }) => (
	<div className="flex items-center justify-center w-32 h-12 px-6">
		<img
			src={src}
			alt={alt}
			className="h-full w-auto max-w-[120px] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
			loading="lazy"
			decoding="async"
		/>
	</div>
);

const TestimonialCard = ({
	quote,
	author,
	role,
}: {
	quote: string;
	author: string;
	role: string;
}) => (
	<div className="bg-white border border-border rounded-lg p-8 relative flex flex-col h-full overflow-hidden">
		<Quote className="absolute -right-6 -top-6 w-24 h-24 text-[#117ABB]/10" />
		<blockquote className="text-sm text-foreground mb-6 flex-1 relative z-10">
			{quote}
		</blockquote>
		<div className="relative z-10">
			<p className="text-sm font-semibold text-primary">— {author}</p>
			<p className="text-xs text-muted-foreground">{role}</p>
		</div>
	</div>
);

export function Testimonials() {
	return (
		<section className="py-20 px-6 relative overflow-hidden bg-background">
			<div className="absolute top-[12.5%] right-10 w-48 h-48 md:w-96 md:h-96 bg-[#D7EFF2]/60 rounded-blob-2 animate-float"></div>

			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12 relative z-10">
					<h2 className="text-4xl font-heading font-bold tracking-tight mb-2 text-foreground">
						Det siger mine samarbejdspartnere
					</h2>
					<p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
						Her er nogle af de erfaringer samarbejdspartnere har delt efter
						samarbejde.
					</p>
				</div>

				<div className="max-w-5xl mx-auto relative z-10">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<TestimonialCard
							quote="Selv med erfaring og viden på området var det givende at få nye perspektiver på både udfordringer og muligheder. Dortes levende formidling gjorde det nemt at spejle historierne i vores virkelighed, så pointerne kunne omsættes til konkrete tiltag."
							author="Mie Nygaard Fris"
							role="Børneambassadør/BUO"
						/>
						<TestimonialCard
							quote="Et praksisnært og inspirerende kursus med genkendelige eksempler og konkrete handleforslag. De frivillige fik nye perspektiver på neurodivergente børn og gik derfra med både indsigt og konkrete idéer til deres arbejde."
							author="Majbrit Strange"
							role="Leder for Børn & Junior i AKBU"
						/>
					</div>
				</div>

				<div className="max-w-4xl mx-auto pt-16 relative z-10">
					<div className="text-center mb-6">
						<p className="text-sm font-semibold text-accent uppercase tracking-wider">
							Betroet af
						</p>
					</div>
					<div className="flex flex-col md:flex-row items-center justify-center gap-8">
						<OrganizationLogo src={mosaikSrc} alt="Mosaik" />
						<OrganizationLogo src={danskoaseSrc} alt="DanskOase" />
						<OrganizationLogo src={apostolskSrc} alt="Apostolsk Kirke" />
					</div>
				</div>
			</div>
		</section>
	);
}
