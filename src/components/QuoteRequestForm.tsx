import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { toast } from "sonner";

export function QuoteRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    packageType: "",
    eventDate: "",
    attendees: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xblpnzer", { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Tak for din henvendelse! Jeg vender tilbage hurtigst muligt.");
        setFormData({
          name: "",
          email: "",
          organization: "",
          packageType: "",
          eventDate: "",
          attendees: "",
          message: ""
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
    <section id="quote-form" className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Playful background blob - RETTET */}
      <div className="absolute -top-20 right-10 w-[450px] h-[450px] bg-[#D7EFF2]/80 rounded-blob-2 animate-float"></div>
      
      <div className="max-w-3xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold tracking-tight mb-2">Anmod om Tilbud</h2>
          {/* RETTET: Varmere subheader */}
          <p className="text-muted-foreground mt-4">
            Udfyld formularen, så vender jeg tilbage hurtigst muligt for at drøfte jeres behov.
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
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
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
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
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
              onChange={(e) => setFormData(prev => ({ ...prev, organization: e.target.value }))}
              placeholder="Navn"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="packageType">Hvilken pakke er I interesseret i? *</Label>
              <Select value={formData.packageType} onValueChange={(value) => setFormData(prev => ({ ...prev, packageType: value }))} required>
                <SelectTrigger id="packageType">
                  <SelectValue placeholder="Vælg pakketype" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="oplæg">Oplæg & Foredrag (fra 3.000 kr)</SelectItem>
                  <SelectItem value="workshop">Hands-on Workshop (fra 4.500 kr)</SelectItem>
                  <SelectItem value="træningsdag">Træningsdag & Implementering (fra 8.500 kr)</SelectItem>
                  <SelectItem value="sparring">1:1 Sparring</SelectItem>
                  <SelectItem value="netværk">Længerevarende partnerskab for kirkenetværk</SelectItem>
                  <SelectItem value="usikker">Ved ikke endnu</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="eventDate">Ønsket dato</Label>
              <Input
                id="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={(e) => setFormData(prev => ({ ...prev, eventDate: e.target.value }))}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="attendees">Forventet antal deltagere</Label>
            <Input
              id="attendees"
              type="number"
              value={formData.attendees}
              onChange={(e) => setFormData(prev => ({ ...prev, attendees: e.target.value }))}
              placeholder="F.eks. 30"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Yderligere bemærkninger *</Label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              placeholder="Fortæl mig lidt om jeres fællesskab, jeres udfordringer, og hvad I håber at få ud af et oplæg eller forløb."
              rows={5}
            />
          </div>

          <div className="pt-4">
            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Indsender..." : "Indsend anmodning"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}