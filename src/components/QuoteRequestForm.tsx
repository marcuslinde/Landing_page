import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { toast } from "sonner";
import { BOOKED_UNTIL_YEAR, EARLIEST_DATE } from "../siteConfig";

export function QuoteRequestForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		organization: "",
		packageType: "",
		eventDate: "",
		attendees: "",
		message: "",
		acknowledged: false,
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (formData.eventDate && formData.eventDate < EARLIEST_DATE) {
			toast.error(
				`Dorte er fuldt booket indtil ${BOOKED_UNTIL_YEAR}. Vælg venligst en dato i ${BOOKED_UNTIL_YEAR} eller senere.`,
			);
			return;
		}

		setIsSubmitting(true);

		try {
			const response = await fetch("https://formspree.io/f/xblpnzer", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				toast.success(
					"Tak for din henvendelse! Jeg vender tilbage hurtigst muligt.",
				);

				setFormData({
					name: "",
					email: "",
					organization: "",
					packageType: "",
					eventDate: "",
					attendees: "",
					message: "",
					acknowledged: false,
				});
			} else {
				toast.error("Hov, der skete en fejl. Prøv venligst igen.");
			}
		} catch (error) {
			toast.error("Hov, der skete en netværksfejl. Tjek din forbindelse.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section
			id="quote-form"
			className="py-20 px-6 bg-secondary relative overflow-hidden scroll-mt-[104px]"
		>
			{/* Playful background blob - RETTET */}
			<div className="absolute top-10 -left-20 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-[#117ABB]/15 rounded-blob-2 animate-morph opacity-60"></div>
			<div className="absolute -bottom-40 -right-32 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-[#117ABB]/15 rounded-blob animate-float opacity-70"></div>
			<div className="max-w-3xl mx-auto relative">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-heading font-bold tracking-tight mb-2">
						Anmod om tilbud
					</h2>

					{/* RETTET: Varmere subheader */}
					<p className="text-muted-foreground mt-4">
						Udfyld formularen, så vender jeg tilbage hurtigst muligt for at
						drøfte jeres behov.
					</p>
					<p className="text-muted-foreground mt-2">
						Du er stadig velkommen til at sende en forespørgsel for{" "}
						{BOOKED_UNTIL_YEAR}.
					</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="grid md:grid-cols-2 gap-6">
						<div className="space-y-2">
							<Label htmlFor="name">Fulde navn *</Label>

							<Input
								id="name"
								required
								value={formData.name}
								onChange={(e) =>
									setFormData((prev) => ({ ...prev, name: e.target.value }))
								}
								placeholder="Navn Navnesen"
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="email">E-mail *</Label>

							<Input
								id="email"
								type="email"
								required
								value={formData.email}
								onChange={(e) =>
									setFormData((prev) => ({ ...prev, email: e.target.value }))
								}
								placeholder="navn@hjemmeside.dk"
							/>
						</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="organization">Kirke, forening eller skole *</Label>

						<Input
							id="organization"
							required
							value={formData.organization}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									organization: e.target.value,
								}))
							}
							placeholder="Navn"
						/>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						<div className="space-y-2">
							<Label htmlFor="packageType">
								Hvilken pakke er I interesseret i? *
							</Label>

							<Select
								value={formData.packageType}
								onValueChange={(value) =>
									setFormData((prev) => ({ ...prev, packageType: value }))
								}
								required
							>
								<SelectTrigger id="packageType">
									<SelectValue placeholder="Vælg pakketype" />
								</SelectTrigger>

								<SelectContent>
									<SelectItem value="oplæg">
										Oplæg & foredrag (fra 3.000 kr)
									</SelectItem>

									<SelectItem value="workshop">
										Hands-on workshop (fra 4.500 kr)
									</SelectItem>

									<SelectItem value="træningsdag">
										Træningsdag & implementering (fra 8.500 kr)
									</SelectItem>

									<SelectItem value="sparring">1:1 sparring</SelectItem>

									<SelectItem value="netværk">
										Længerevarende partnerskab for kirkenetværk
									</SelectItem>

									<SelectItem value="usikker">Ved ikke endnu</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className="space-y-2">
							<Label htmlFor="eventDate">Ønsket dato</Label>

							<Input
								id="eventDate"
								type="date"
								min={EARLIEST_DATE}
								value={formData.eventDate}
								onChange={(e) =>
									setFormData((prev) => ({
										...prev,
										eventDate: e.target.value,
									}))
								}
							/>
							<p className="text-xs text-muted-foreground">
								Tidligste dato: 1. januar {BOOKED_UNTIL_YEAR}
							</p>
						</div>
					</div>

					<div className="space-y-2">
						<Label htmlFor="attendees">Forventet antal deltagere</Label>

						<Input
							id="attendees"
							type="number"
							value={formData.attendees}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									attendees: e.target.value,
								}))
							}
							placeholder="F.eks. 30"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="message">Yderligere bemærkninger *</Label>

						<Textarea
							id="message"
							required
							value={formData.message}
							onChange={(e) =>
								setFormData((prev) => ({ ...prev, message: e.target.value }))
							}
							placeholder="Fortæl mig lidt om jeres fællesskab, jeres udfordringer, og hvad I håber at få ud af et oplæg eller forløb."
							rows={5}
						/>
					</div>

					<div className="flex items-start gap-3">
						<input
							id="acknowledged"
							type="checkbox"
							required
							checked={formData.acknowledged}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									acknowledged: e.target.checked,
								}))
							}
							className="mt-1 h-4 w-4 flex-shrink-0 accent-primary cursor-pointer"
						/>
						<Label
							htmlFor="acknowledged"
							className="text-sm font-normal leading-relaxed cursor-pointer"
						>
							Jeg er opmærksom på, at Dorte er fuldt booket indtil{" "}
							{BOOKED_UNTIL_YEAR}, og at min henvendelse først kan imødekommes
							fra {BOOKED_UNTIL_YEAR}.
						</Label>
					</div>

					<div className="pt-4">
						<Button
							type="submit"
							size="lg"
							className="w-full"
							disabled={isSubmitting}
						>
							{isSubmitting ? "Indsender..." : "Indsend anmodning"}
						</Button>
					</div>
				</form>
			</div>
		</section>
	);
}
