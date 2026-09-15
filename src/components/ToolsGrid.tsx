import { CREATIVE_TOOLS } from '../data';

export function ToolsGrid() {
  return (
    <section id="tools" className="w-full bg-[#e9e9e9] py-20 md:py-28 px-4 sm:px-8 border-y border-neutral-300">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading & Badge */}
        <div className="lg:col-span-4 flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2.5">
            <div className="w-5 h-5 rounded-full bg-neutral-300 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-black" />
            </div>
            <span className="font-satisfy text-lg md:text-xl text-neutral-600 tracking-wide">
              Tools Section
            </span>
          </div>

          <h2 className="font-antonio font-bold uppercase text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-black">
            Tools For<br />Creative<br />Work
          </h2>

          <p className="font-poppins text-xs sm:text-sm font-medium text-neutral-600 uppercase tracking-wider mt-2 max-w-sm">
            Industry-standard digital software and development suites powering our daily design, prototyping, and production workflows.
          </p>
        </div>

        {/* Right Column: Grid of Tools with Animated Progress Bars */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {CREATIVE_TOOLS.map((tool) => (
            <div
              key={tool.id}
              className="bg-[#f3f3f3] hover:bg-white rounded-2xl p-5 sm:p-6 border border-neutral-300/80 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-5 group"
            >
              {/* Tool Icon inside dark badge */}
              <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-[#171717] flex items-center justify-center p-3 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={tool.icon}
                  alt={tool.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain filter brightness-110"
                />
              </div>

              {/* Details & Progress Bar */}
              <div className="flex-1 flex flex-col gap-2 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-antonio font-bold text-base sm:text-lg uppercase tracking-wider text-black truncate">
                    {tool.name}
                  </h3>
                  <span className="font-poppins text-xs sm:text-sm font-semibold text-neutral-600 shrink-0">
                    {tool.percentage}%
                  </span>
                </div>

                <p className="text-[11px] font-poppins text-neutral-500 uppercase tracking-wide truncate">
                  {tool.category}
                </p>

                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-neutral-300/80 overflow-hidden mt-1">
                  <div
                    className="h-full bg-black rounded-full transition-all duration-1000 ease-out group-hover:bg-[#b3de4f]"
                    style={{ width: `${tool.percentage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
