import { NextResponse } from 'next/server'

export const revalidate = 3600 // Revalidate every 1 hour (3600 seconds)

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const type = searchParams.get('type') || 'tracks'

  const client_id = process.env.SPOTIFY_CLIENT_ID!
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET!
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN!

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
    // Prevent caching this token response
    cache: 'no-store',
  })

  const tokenData = await tokenRes.json()
  const access_token = tokenData.access_token

  const topRes = await fetch(`https://api.spotify.com/v1/me/top/${type}?limit=8`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    // Let Next.js cache this for revalidation
    next: { revalidate: 3600 },
  })

  const topData = await topRes.json()
  return NextResponse.json(topData)
}
