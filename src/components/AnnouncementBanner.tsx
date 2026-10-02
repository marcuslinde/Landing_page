import { CalendarClock } from "lucide-react";
import { BOOKED_UNTIL_YEAR } from "../siteConfig";

export function AnnouncementBanner() {
	return (
		<div className="fixed top-0 left-0 right-0 z-50 h-9 bg-ink text-accent border-b border-accent/50 flex items-center justify-center px-4 text-center">
			<p className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-tight">
				<CalendarClock className="w-4 h-4 flex-shrink-0" />
				<span>
					Fuldt booket indtil {BOOKED_UNTIL_YEAR} · forespørgsler for{" "}
					{BOOKED_UNTIL_YEAR} er velkomne
				</span>
			</p>
		</div>
	);
}
