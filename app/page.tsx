import { AboutUs, Footer, Hero, Project, Portfolio } from "@/components"
import navUtil from "@/utils/nav"

export default function Home() {
  const { headerNav } = navUtil

  return (
    <div>
      <Hero />
      <AboutUs />
      <Project />
      <Portfolio />
      <Footer />
    </div>
  )
}
