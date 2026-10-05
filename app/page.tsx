"use client";

import { useEffect, useState } from "react";
import {
  SketchAvatar,
  SketchRocket,
  SketchComet,
  SketchArrow,
  ThemeToggle,
} from "@/components/sketchy";

const socialLinks = [
  { label: "GitHub", handle: "@vats", href: "https://github.com/vats-24" },
  { label: "X", handle: "@vats_exe", href: "https://x.com/vats_exe" },
  {
    label: "LinkedIn",
    handle: "@vats_mishra",
    href: "https://linkedin.com/in/vats-mishra",
  },
  {
    label: "Email",
    handle: "vats24dev@gmail.com",
    href: "mailto:vats24dev@gmail.com",
  },
  {
    label: "Medium",
    handle: "@vats24dev",
    href: "https://medium.com/@vats24dev",
  },
];

export default function Portfolio() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted =
        now.toLocaleDateString("en-US", { month: "short", day: "numeric" }) +
        ", " +
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
      setCurrentTime(formatted);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen paper-texture">
      <main className="max-w-2xl mx-auto px-5 sm:px-8 py-10 sm:py-16">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-14">
          <p className="font-caveat text-xl text-muted-foreground rotate-[-2deg]">
            hello, i'm vats
          </p>
          <ThemeToggle />
        </div>

        {/* Hero */}
        <section className="mb-16">
          <div className="flex items-start gap-6 sm:gap-8">
            <div className="sketch-border text-foreground w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0">
              <SketchAvatar className="w-full h-full p-1.5" />
            </div>
            <div className="pt-1">
              <h1 className="font-caveat text-5xl sm:text-6xl leading-none text-foreground">
                Vats
              </h1>
              <p className="mt-2 text-sm text-muted-foreground tracking-wide">
                Engineer <span className="text-foreground/40">•</span> Dev{" "}
                <span className="text-foreground/40">•</span> Neophile
              </p>
            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="mb-16 space-y-5 text-[15px] leading-relaxed text-foreground/80">
          <p>
            23 y/o semicolon dev trying to build better systems. I'm a wannabe{" "}
            <span className="sketch-underline text-foreground font-medium">
              systems dev
            </span>{" "}
            — previously into fullstack until I fell in love with backend and
            systems. Technical writer, and somewhat of a gamer as well. I can
            write{" "}
            <span className="sketch-underline text-foreground font-medium">
              typescript, c++, go
            </span>
            , and honestly, language is just a way of communicating to systems —
            if you understand the fundamentals, the language doesn't matter.
          </p>
          <p>
            I like{" "}
            <span className="sketch-underline text-foreground font-medium">
              minimalism
            </span>{" "}
            and{" "}
            <span className="sketch-underline text-foreground font-medium">
              simplicity
            </span>{" "}
            and try to reflect that in my work. I often watch indie films while
            working to keep my head clear. Instead of chasing trends, I focus on
            building things that last. Apart from creative work, I spend most of
            my time coding and exploring my obsession with space science —
            always looking for the logic behind the chaos.
          </p>
        </section>

        {/* Currently */}
        <section className="mb-16">
          <h2 className="font-caveat text-3xl text-foreground mb-6 rotate-[-1deg]">
            currently
          </h2>
          <div className="space-y-4">
            <div className="sketch-card text-foreground p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    NASA Deep Space Telemetry
                  </p>
                  <AsteroidStatus />
                </div>
                <SketchComet className="w-10 h-10 text-foreground/50 flex-shrink-0" />
              </div>
            </div>

            <div className="sketch-card text-foreground p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-2">
                    currently compiling
                  </p>
                  <p className="text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Learning: Distributed Systems & OS.
                  </p>
                </div>
                <SketchRocket className="w-10 h-10 text-foreground/50 flex-shrink-0" />
              </div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="mb-16">
          <h2 className="font-caveat text-3xl text-foreground mb-6 rotate-[0.5deg]">
            find me here
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {socialLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`sketch-card text-foreground p-4 flex items-center justify-between group ${
                  i % 2 === 0 ? "rotate-[-0.3deg]" : "rotate-[0.3deg]"
                }`}
              >
                <div>
                  <p className="font-caveat text-xl text-foreground/80">
                    {link.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {link.handle}
                  </p>
                </div>
                <SketchArrow className="w-4 h-4 text-foreground/40 sketch-arrow" />
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-muted-foreground">
          <span className="font-caveat text-lg rotate-[-1deg]">
            made by vats
          </span>
          <span className="font-mono">{currentTime}</span>
        </footer>
      </main>
    </div>
  );
}

function AsteroidStatus() {
  const [asteroid, setAsteroid] = useState<string | null>(null);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=DEMO_KEY`
    )
      .then((res) => res.json())
      .then((data) => {
        const todayAsteroids = data.near_earth_objects[today];
        if (todayAsteroids && todayAsteroids.length > 0) {
          const fastest = todayAsteroids.sort(
            (a: any, b: any) =>
              b.close_approach_data[0].relative_velocity.kilometers_per_hour -
              a.close_approach_data[0].relative_velocity.kilometers_per_hour
          )[0];
          setAsteroid(
            `${fastest.name.replace(/[()]/g, "")} — ${Number(
              fastest.close_approach_data[0].relative_velocity
                .kilometers_per_hour
            ).toLocaleString(undefined, { maximumFractionDigits: 0 })} km/h`
          );
        }
      })
      .catch(() => setAsteroid("Signal Lost"));
  }, []);

  return (
    <p className="text-sm font-mono text-foreground/70">
      {asteroid ? asteroid : "Scanning quadrant..."}
    </p>
  );
}
