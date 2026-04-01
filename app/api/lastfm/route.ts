import { NextResponse } from "next/server"

export async function GET() {
  const LASTFM_API_KEY = process.env.LASTFM_API_KEY
  const LASTFM_USERNAME = process.env.LASTFM_USERNAME || "cherrycakex"

  if (!LASTFM_API_KEY) {
    return NextResponse.json({ error: "Last.fm API key not configured" }, { status: 500 })
  }

  try {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&format=json&limit=1`,
      { next: { revalidate: 30 } },
    )

    if (!response.ok) {
      throw new Error("Failed to fetch from Last.fm")
    }

    const data = await response.json()

    if (!data.recenttracks?.track?.[0]) {
      return NextResponse.json({ track: null })
    }

    const recentTrack = data.recenttracks.track[0]
    const nowPlaying = recentTrack["@attr"]?.nowplaying === "true"

    const track = {
      name: recentTrack.name,
      artist: recentTrack.artist["#text"] || recentTrack.artist,
      album: recentTrack.album["#text"] || "Unknown Album",
      image: recentTrack.image?.[3]?.["#text"] || recentTrack.image?.[2]?.["#text"] || "",
      url: recentTrack.url,
      nowPlaying,
    }

    return NextResponse.json({ track })
  } catch (error) {
    console.error("Error fetching Last.fm data:", error)
    return NextResponse.json({ error: "Failed to fetch Last.fm data" }, { status: 500 })
  }
}
