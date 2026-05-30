import ObservationDemo from "../components/ObservationDemo";
import { Sparkles, Clock, BookOpen, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-sm">
              <Sparkles className="h-4 w-4" />
              AI support for ECTs and educators
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Write better documentation in minutes, not after hours.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Turn quick educator notes into professional daily journals,
              observations, incident reports, transition reports, and weekly programs.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Feature icon={<Clock />} title="Save time" text="Reduce documentation workload." />
              <Feature icon={<BookOpen />} title="EYLF linked" text="Suggest relevant outcomes." />
              <Feature icon={<Users />} title="Family ready" text="Professional, warm wording." />
            </div>
          </div>
          <ObservationDemo />
        </div>
      </section>
    </main>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="mb-3 h-6 w-6">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{text}</p>
    </div>
  );
}
