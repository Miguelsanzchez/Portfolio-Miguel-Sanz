import { Header } from './components/layout/Header'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Education } from './sections/Education'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { SecurityHighlights } from './sections/SecurityHighlights'
import { Experience } from './sections/Experience'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-50 antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <SecurityHighlights />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
