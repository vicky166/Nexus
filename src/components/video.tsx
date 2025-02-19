import { Card, CardContent, CardHeader } from '@/components/ui/card'

interface VideoPlayerProps {
  videoId: string
  title?: string
  subtitle?: string
}

export default function Video({
  videoId = 'f10TT_9SCl0',
  title = "Reawaken Your Skin's Youth with Sculptra®",
  subtitle = "Because Aging is Inevitable, Looking Tired Doesn't Have to Be",
}: VideoPlayerProps) {
  return (
    <Card className="w-full max-w-4xl mt-16 mb-16 mx-auto overflow-hidden">
      <CardHeader className="space-y-2 px-6 py-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="text-lg text-muted-foreground italic">{subtitle}</p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0"
          />
        </div>
      </CardContent>
    </Card>
  )
}
