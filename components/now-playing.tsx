"use client"

import { useEffect, useState } from "react"
import { Music } from "lucide-react"

interface Track {
  name: string
  artist: string
  album: string
  image: string
  url: string
  nowPlaying: boolean
}

export function NowPlaying() {
  const [track, setTrack] = useState<Track | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch("/api/lastfm")
        const data = await response.json()

        if (data.track) {
          setTrack(data.track)
        }
      } catch (error) {
        console.error("Error fetching Last.fm data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchNowPlaying()
    const interval = setInterval(fetchNowPlaying, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="rounded-2xl bg-gradient-to-br from-card to-muted border border-border p-6 flex items-center gap-4 animate-pulse">
        <div className="w-20 h-20 rounded-xl bg-muted" />
        <div className="flex-1">
          <div className="h-4 bg-muted rounded w-24 mb-2" />
          <div className="h-5 bg-muted rounded w-40 mb-1" />
          <div className="h-4 bg-muted rounded w-32" />
        </div>
      </div>
    )
  }

  if (!track) {
    return null
  }

  return (
    <div className="rounded-2xl bg-gradient-to-br from-card to-muted border border-border hover:border-primary/50 transition-all p-6 flex items-center gap-4">
      <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-muted border border-border">
        {track.image ? (
          <img src={track.image || "/placeholder.svg"} alt={track.album} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Music className="w-8 h-8 text-muted-foreground" />
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <div
            className={`w-2 h-2 rounded-full ${track.nowPlaying ? "bg-primary animate-pulse" : "bg-muted-foreground"}`}
          />
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            {track.nowPlaying ? "Now Playing" : "Last Played"}
          </span>
        </div>
        <a
          href={track.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:text-primary transition-colors"
        >
          <p className="font-semibold text-foreground truncate mb-1">{track.name}</p>
          <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
        </a>
      </div>
    </div>
  )
}
