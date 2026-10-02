import { Mail, Phone } from "lucide-react";

interface FooterProps {
	onPrivacyClick?: () => void;
}

export function Footer({ onPrivacyClick }: FooterProps) {
	return (
		<footer className="bg-primary text-primary-foreground py-12 px-6">
			<div className="max-w-6xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between md:justify-center gap-8 md:gap-12">
					{/* Kontakt */}
					<div className="md:w-1/3 md:text-center">
						<h2 className="text-lg text-center font-heading font-semibold tracking-tight mb-2">
							Kontakt
						</h2>
						<div className="mt-4 space-y-3 opacity-80 flex flex-col items-center">
							<a
								href="mailto:dortelinde@gmail.com"
								className="flex items-center gap-3 hover:opacity-80 transition-opacity"
							>
								<Mail className="w-5 h-5 flex-shrink-0" />
								<span>dortelinde@gmail.com</span>
							</a>
							<a
								href="tel:+4553552060"
								className="flex items-center gap-3 hover:opacity-80 transition-opacity"
							>
								<Phone className="w-5 h-5 flex-shrink-0" />
								<span>+45 53 55 20 60</span>
							</a>
						</div>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center opacity-80">
					<p>
						&copy; {new Date().getFullYear()} Dorte Linde. Alle rettigheder
						forbeholdes.
					</p>
					{onPrivacyClick && (
						<button
							onClick={onPrivacyClick}
							className="mt-2 hover:underline focus:underline outline-none"
						>
							Privatlivspolitik
						</button>
					)}
				</div>
			</div>
		</footer>
	);
}
