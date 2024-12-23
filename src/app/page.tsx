import { Header } from './components/header'
import { TextHumanizer } from './components/text-humanizer'
import { Introduction } from './components/introduction'
import { Footer } from './components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 max-w-7xl min-h-screen">
        <TextHumanizer />
        <Introduction />
      </main>
      <Footer />
    </div>
  )
}

