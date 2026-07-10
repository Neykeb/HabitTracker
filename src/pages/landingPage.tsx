import heroFoto from "../assets/heropage2.jpg";
import { Link } from "@tanstack/react-router";
export function LandingPage() {
  return (
    <section className="min-h-screen overflow-hidden bg-[#000000] px-6 text-white">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Linke Seite */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative flex justify-center lg:justify-start overflow-hidden">
            <img
              src={heroFoto}
              alt="Motion Lines"
              className="
      w-[650px]
      scale-110
      object-cover
    "
            />
          </div>
        </div>

        {/* Rechte Seite */}
        <div className="text-center lg:text-left">
          <p className="mb-12 text-sm font-black uppercase tracking-[0.45em] text-white/70">
            HabitFlow
          </p>

          <h1 className="max-w-2xl font-serif text-6xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl">
            Wer du sein
            <br />
            willst, beginnt
            <br />
            <span className="font-serif italic font-medium text-[#1C6ADD]">
              heute.
            </span>
          </h1>

          <p className="mt-10 max-w-xl text-xl font-medium leading-relaxed text-white/60">
            Baue Gewohnheiten. Bleib dran.
            <br />
            Werde die beste Version von dir.
          </p>

          <Link
            to="/dashboard"
            className="group mt-10 inline-flex items-center gap-16 rounded-lg border border-[#1C6ADD] px-10 py-5 text-lg font-medium transition-all duration-300 hover:bg-[#1C6ADD]"
          >
            Jetzt starten
            <span className="text-2xl text-[#1C6ADD] transition-all duration-300 group-hover:translate-x-2 group-hover:text-white">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
