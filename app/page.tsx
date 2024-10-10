import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Quote } from "@/lib/types"
import { getQuoteOfTheDay } from "@/lib/quotes"

export default async function Home() {
  const quote: Quote = await getQuoteOfTheDay()

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Quote of the Day</CardTitle>
        </CardHeader>
        <CardContent>
          <blockquote className="italic text-lg">&ldquo;{quote.text}&rdquo;</blockquote>
          <p className="text-right mt-2">— {quote.author}</p>
        </CardContent>
      </Card>
    </div>
  )
}