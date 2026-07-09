export function LandingPage() {
  return (
    <section className="min-h-screen overflow-hidden bg-[#ebe4d8] px-6 text-black">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Linke Seite: Motion-Lines */}
        <div className="relative h-[420px] lg:h-[650px]">
          <div className="absolute left-[-260px] top-1/2 h-[360px] w-[820px] -translate-y-1/2">
            {Array.from({ length: 32 }).map((_, index) => (
              <div
                key={index}
                className="absolute left-0 top-1/2 h-[220px] w-[760px] -translate-y-1/2 rounded-[50%] border border-black/45"
                style={{
                  transform: `translateY(-50%) rotate(${index * 2.4}deg)`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Rechte Seite: Text */}
        <div className="text-center lg:text-left">
          <p className="mb-12 text-sm font-black uppercase tracking-[0.45em]">
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

          <p className="mt-10 max-w-xl text-xl font-medium leading-relaxed text-black/75">
            Baue Gewohnheiten. Bleib dran.
            <br />
            Werde die beste Version von dir.
          </p>

          <button className="group mt-10 inline-flex items-center gap-16 border border-black px-10 py-5 text-lg font-medium transition-all duration-300 hover:border-[#1C6ADD] hover:text-[#1C6ADD]">
            Jetzt starten
            <span className="text-2xl text-[#1C6ADD] transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
