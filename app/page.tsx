import { Quote } from "@/lib/types";
import { getQuoteOfTheDay } from "@/lib/quotes";

export default async function Home() {
  const quote: Quote = await getQuoteOfTheDay();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4">
      <blockquote className="italic text-lg text-center">
        &ldquo;{quote.text}&rdquo;
      </blockquote>
      <p className="text-right mt-2">— {quote.author}</p>
    </div>
  );
}
