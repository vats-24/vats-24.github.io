"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const tabs = ["Home", "Now", "Guestbook", "Writing"];

const socialLinks = [
  { label: "GitHub", handle: "@vats", href: "https://github.com/vats-24" },
  {
    label: "X (formerly Twitter)",
    handle: "@vats_exe",
    href: "https://x.com/vats_exe",
  },
  {
    label: "LinkedIn",
    handle: "@vats_linkedin",
    href: "https://linkedin.com/in/vats-mishra",
  },
  {
    label: "Email",
    handle: "@vats_gmail",
    href: "mailto:vats24dev@gmail.com",
  },
  {
    label: "Medium",
    handle: "@vats_medium",
    href: "https://medium.com/@vats24dev",
  },
  // { label: "Discord", handle: "@asheeshh", href: "#" },
  // { label: "CV", handle: "read.cv/asrvd", href: "https://read.cv/asrvd" },
];

const guestbookEntries = [
  {
    id: 1,
    name: "John Doe",
    message: "Cool portfolio! Love the minimal design.",
    date: "Apr 8, 2026",
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "Great work on the t3-stack projects!",
    date: "Apr 5, 2026",
  },
  {
    id: 3,
    name: "Alex Chen",
    message: "Fellow VALORANT player here. Nice site!",
    date: "Apr 2, 2026",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    message: "Your writing is inspiring. Keep it up!",
    date: "Mar 28, 2026",
  },
];

const writingPosts = [
  {
    id: 1,
    title: "Why I Switched from MERN to T3 Stack",
    date: "Apr 6, 2026",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Building Type-Safe APIs with tRPC",
    date: "Mar 25, 2026",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "My Hackathon Experience at DevHacks 2026",
    date: "Mar 15, 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "A Beginner's Guide to Neovim (that I don't use)",
    date: "Mar 1, 2026",
    readTime: "10 min read",
  },
];

const nowItems = [
  {
    category: "Working on",
    items: [
      "Building a SaaS product for developers",
      "Contributing to open-source projects",
      "Learning Rust in my spare time",
    ],
  },
  {
    category: "Reading",
    items: ["Atomic Habits by James Clear", "The Pragmatic Programmer"],
  },
  {
    category: "Playing",
    items: ["VALORANT (trying to hit Immortal)", "Elden Ring DLC"],
  },
  {
    category: "Listening to",
    items: [
      "EDEN - no future",
      "The Weeknd - Dawn FM",
      "Arijit Singh's latest releases",
    ],
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("Home");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted =
        now.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        }) +
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
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <header className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-gray-400 to-gray-600 flex-shrink-0">
            <img
              src="/hero.png"
              alt="Vats"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h1 className="text-white font-medium text-lg">Vats</h1>
            <p className="text-gray-500 text-sm">Engineer • Dev • Neophile</p>
          </div>
        </header>

        {/* Navigation */}
        {/* <nav className="mb-8 bg-[#111111] rounded-lg p-1 flex flex-wrap sm:inline-flex gap-1 w-full sm:w-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-md text-sm transition-colors ${
                activeTab === tab
                  ? "bg-[#1a1a1a] text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav> */}

        {/* Tab Content */}
        {activeTab === "Home" && <HomeContent />}
        {activeTab === "Now" && <NowContent />}
        {activeTab === "Guestbook" && <GuestbookContent />}
        {activeTab === "Writing" && <WritingContent />}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a] mt-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center text-xs text-gray-500">
          <span>made by vats</span>
          <span>{currentTime}</span>
        </div>
      </footer>
    </div>
  );
}

function HomeContent() {
  const [asteroid, setAsteroid] = useState(null);

  useEffect(() => {
    // NASA's free demo API for Near Earth Objects (NEOs)
    const today = new Date().toISOString().split("T")[0];
    fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=DEMO_KEY`
    )
      .then((res) => res.json())
      .then((data) => {
        const todayAsteroids = data.near_earth_objects[today];
        if (todayAsteroids && todayAsteroids.length > 0) {
          // Get the fastest one for maximum flex
          const fastest = todayAsteroids.sort(
            (a, b) =>
              b.close_approach_data[0].relative_velocity.kilometers_per_hour -
              a.close_approach_data[0].relative_velocity.kilometers_per_hour
          )[0];
          setAsteroid(fastest);
        }
      })
      .catch(() => setAsteroid("Signal Lost"));
  }, []);
  return (
    <section className="space-y-6">
      <h2 className="text-white font-medium">Hello~</h2>

      <div className="space-y-4 text-sm leading-relaxed">
        <p>23 y/o semicolon dev trying to build better systems.</p>

        <p>
          I&apos;m a wannabe{" "}
          <span className="text-amber-600 hover:text-amber-500 text-sm underline-offset-2">
            systems dev
          </span>{" "}
          previously into fullstack until I fell in love with backend and
          systems, techical writer, and somewhat of a gamer as well. I can write{" "}
          <span className="text-amber-600 hover:text-amber-500 text-sm underline-offset-2">
            typescript, c++, go
          </span>
          , and In my opinion language is just way communicating to systems if
          you undestand the fundamentals the language doesn't matter.
        </p>

        <p>
          I like{" "}
          <span className="text-amber-600 hover:text-amber-500 text-sm underline-offset-2">
            minimalism
          </span>{" "}
          and{" "}
          <span className="text-amber-600 hover:text-amber-500 text-sm underline-offset-2">
            simplicity
          </span>{" "}
          and I try to reflect that in my works as well. I often watch indie
          films while working to keep my head clear. Instead of just chasing
          trends, I focus on building things that last. Apart from my creative
          work, I spend most of my time coding and exploring my obsession with
          space science. Whether it's debugging a complex script or reading up
          on the latest NASA mission, I’m always looking for the logic behind
          the chaos..
        </p>
      </div>

      {/* Last Played */}
      {/* Space Science Status */}
      <div className="mt-8 bg-[#111111] border border-[#1a1a1a] rounded-lg p-4 flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-xs mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            NASA Deep Space Telemetry
          </p>
          {asteroid ? (
            <>
              <p className="text-gray-300 text-sm font-mono">
                Obj: {asteroid.name.replace(/[()]/g, "")}
              </p>
              <p className="text-amber-600/60 text-[10px] mt-1 font-mono">
                Velocity:{" "}
                {Number(
                  asteroid.close_approach_data[0].relative_velocity
                    .kilometers_per_hour
                ).toLocaleString(undefined, { maximumFractionDigits: 0 })}{" "}
                km/h
              </p>
            </>
          ) : (
            <p className="text-gray-500 text-sm font-mono">
              Scanning quadrant...
            </p>
          )}
        </div>
        <div className="text-2xl opacity-40 grayscale">☄️</div>
      </div>

      {/* Current Stack Status */}
      <div className="mt-8 bg-[#111111] border border-[#1a1a1a] rounded-lg p-4 flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-xs mb-2">Currently Compiling</p>
          <p className="text-gray-300 text-sm font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Learning: Distributed Systems & OS.
          </p>
        </div>
        <div className="text-gray-600 text-xs font-mono border-l border-[#1a1a1a] pl-4">
          v2.0.4
        </div>
      </div>

      {/* Find Me Here */}
      <section className="mt-10">
        <h2 className="text-white font-medium mb-6">Find me here~</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialLinks.map((link) => (
            <div key={link.label}>
              <p className="text-gray-500 text-sm mb-1">{link.label}</p>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:text-amber-500 text-sm underline underline-offset-2"
              >
                {link.handle}
              </a>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}

function NowContent() {
  return (
    <section className="space-y-6">
      <h2 className="text-white font-medium">What I&apos;m up to now~</h2>
      <p className="text-gray-500 text-sm">Last updated: April 10, 2026</p>

      <div className="space-y-8 mt-6">
        {nowItems.map((section) => (
          <div key={section.category}>
            <h3 className="text-amber-600 text-sm font-medium mb-3">
              {section.category}
            </h3>
            <ul className="space-y-2">
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-300 text-sm flex items-start gap-2"
                >
                  <span className="text-gray-600 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-[#111111] border border-[#1a1a1a] rounded-lg">
        <p className="text-gray-500 text-xs mb-2">Current mood</p>
        <p className="text-gray-300 text-sm">
          Feeling productive and caffeinated
        </p>
      </div>
    </section>
  );
}

function GuestbookContent() {
  const [newMessage, setNewMessage] = useState("");

  return (
    <section className="space-y-6">
      <h2 className="text-white font-medium">Guestbook~</h2>
      <p className="text-gray-500 text-sm">
        Leave a message for me! (or just say hi)
      </p>

      {/* Sign Form */}
      <div className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-4">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Write something nice..."
          className="w-full bg-transparent border border-[#222222] rounded-md p-3 text-sm text-gray-300 placeholder-gray-600 resize-none focus:outline-none focus:border-amber-600/50"
          rows={3}
        />
        <button className="mt-3 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-black text-sm font-medium rounded-md transition-colors">
          Sign Guestbook
        </button>
      </div>

      {/* Entries */}
      <div className="space-y-4 mt-8">
        {guestbookEntries.map((entry) => (
          <div
            key={entry.id}
            className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-4"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-white text-sm font-medium">
                {entry.name}
              </span>
              <span className="text-gray-600 text-xs">{entry.date}</span>
            </div>
            <p className="text-gray-400 text-sm">{entry.message}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function WritingContent() {
  return (
    <section className="space-y-6">
      <h2 className="text-white font-medium">Writing~</h2>
      <p className="text-gray-500 text-sm">
        Thoughts, tutorials, and occasional rants
      </p>

      {/* Posts List */}
      <div className="space-y-4 mt-6">
        {writingPosts.map((post) => (
          <article
            key={post.id}
            className="bg-[#111111] border border-[#1a1a1a] rounded-lg p-4 hover:border-[#252525] transition-colors cursor-pointer group"
          >
            <h3 className="text-white text-sm font-medium group-hover:text-amber-600 transition-colors">
              {post.title}
            </h3>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-gray-600 text-xs">{post.date}</span>
              <span className="text-gray-700">•</span>
              <span className="text-gray-600 text-xs">{post.readTime}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="#">View all posts →</Link>
      </div>
    </section>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-amber-600 hover:text-amber-500 underline underline-offset-2"
    >
      {children}
    </a>
  );
}
