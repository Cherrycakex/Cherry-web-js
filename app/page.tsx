import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Youtube } from "lucide-react"
import { NowPlaying } from "@/components/now-playing"
import { StarfieldBackground } from "@/components/starfield-background"
import { TypingLogo } from "@/components/typing-logo"

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      <StarfieldBackground />
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50 bg-background/70">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <TypingLogo />
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <a href="https://ko-fi.com/yingtaom" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Commissions
            </a>
            <Button asChild size="sm" className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="https://discord.gg/F2kcsVfgCM" target="_blank" rel="noopener noreferrer">
                Contact
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex items-center justify-center gap-6">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-transparent bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 p-[2px] flex-shrink-0">
              <div className="w-full h-full rounded-full overflow-hidden bg-card">
                <img
                  src="/profile.jpg"
                  alt="Cherry's profile picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent">
                Cherry
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mt-2">@Yingtao</p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 text-pretty max-w-2xl mx-auto leading-relaxed">
            {"I'm an artist, content creator, developer and music enjoyer, feel free to explore my page and check my work!"}
          </p>

          <div className="flex items-center justify-center gap-4 mb-10">
            <a
              href="https://instagram.com/yingtaom_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-card to-muted border border-border hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110"
            >
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://twitter.com/yingtaoo_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-card to-muted border border-border hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110"
            >
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
            </a>
            <a
              href="https://youtube.com/@yingtaom"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-card to-muted border border-border hover:border-accent/50 flex items-center justify-center transition-all hover:scale-110"
            >
              <Youtube className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
            </a>
          </div>

          <div className="mb-10 max-w-md mx-auto">
            <NowPlaying />
          </div>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 transition-all hover:scale-105"
            >
              <a href="https://ko-fi.com/cherrycakex" target="_blank" rel="noopener noreferrer">View Commissions</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border hover:border-primary/50 px-8 bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm transition-all hover:scale-105"
            >
              <a href="https://discord.gg/F2kcsVfgCM" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Album Chart Section */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl overflow-hidden border-2 border-transparent bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 p-[2px] mb-8">
            <div className="rounded-3xl overflow-hidden bg-card">
              <img
                src="/album-chart.png"
                alt="Cherry's favorite albums chart"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://last.fm/user/guimania"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-card to-muted border border-border hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110 overflow-hidden"
              title="Last.fm"
            >
              <img src="/lastfm-logo.png" alt="Last.fm" className="w-8 h-8 rounded" />
            </a>
            <a
              href="https://rateyourmusic.com/~guimaniax"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-card to-muted border border-border hover:border-accent/50 flex items-center justify-center transition-all hover:scale-110 overflow-hidden"
              title="RateYourMusic"
            >
              <img src="/rym-logo.png" alt="RateYourMusic" className="w-8 h-8 rounded-full" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">© 2025 Cherry (@cherrycakex). All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
