import { Section } from "./Section";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Automation() {
  return (
    <Section id="automation" className="!p-0 relative h-[80vh] min-h-[600px] flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
            src="https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYWN0b3J5JTIwYXV0b21hdGlvbiUyMGNvbnZleW9yJTIwYmVsdHxlbnwxfHx8fDE3NzAyMDQyNDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Industrial Automation"
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24">
        <div className="max-w-2xl bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-white/20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Smart Automation Systems
            </h2>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                We provide advanced automation solutions to improve efficiency, productivity, and intelligence in businesses and industries.
            </p>
            <div className="flex flex-wrap gap-4">
                {["IoT Integration", "Smart Monitoring", "Process Optimization"].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-blue-600/80 rounded-full text-white text-sm font-semibold">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </Section>
  );
}
