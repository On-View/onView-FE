import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Star } from "lucide-react";
import Carousel from "@/components/carousel";

const exhibitions = [
  {
    id: 1,
    title: "현대미술의 새로운 시선",
    venue: "국립현대미술관",
    date: "2024.03.15 - 2024.06.30",
    rating: 4.8,
    tags: ["현대미술", "회화", "설치미술"],
    image: "/placeholder.svg?key=65qo6",
  },
  {
    id: 2,
    title: "빛과 그림자의 대화",
    venue: "서울시립미술관",
    date: "2024.04.01 - 2024.07.15",
    rating: 4.6,
    tags: ["미디어아트", "빛", "인터랙티브"],
    image: "/placeholder.svg?key=br9jg",
  },
  {
    id: 3,
    title: "자연과 인간의 공존",
    venue: "디뮤지엄",
    date: "2024.02.20 - 2024.05.25",
    rating: 4.7,
    tags: ["자연", "생태", "사진"],
    image: "/placeholder.svg?key=8o7bd",
  },
  {
    id: 4,
    title: "디지털 시대의 예술",
    venue: "아트센터 나비",
    date: "2024.04.10 - 2024.08.10",
    rating: 4.5,
    tags: ["디지털아트", "NFT", "가상현실"],
    image: "/placeholder.svg?key=kovjx",
  },
  {
    id: 5,
    title: "한국 현대 작가전",
    venue: "국립현대미술관",
    date: "2024.03.01 - 2024.06.15",
    rating: 4.7,
    tags: ["한국미술", "현대미술", "회화"],
    image: "/placeholder.svg?key=f0dbw",
  },
  {
    id: 6,
    title: "사진으로 보는 세계",
    venue: "한미사진미술관",
    date: "2024.04.05 - 2024.07.05",
    rating: 4.4,
    tags: ["사진", "다큐멘터리", "세계"],
    image: "/placeholder.svg?key=n5o8g",
  },
  {
    id: 7,
    title: "미래와 과거의 만남",
    venue: "예술의전당",
    date: "2024.05.01 - 2024.08.15",
    rating: 4.9,
    tags: ["융합예술", "미래", "테크놀로지"],
    image:
      "/placeholder.svg?height=400&width=600&query=futuristic art exhibition technology",
  },
  {
    id: 8,
    title: "색채의 향연",
    venue: "대림미술관",
    date: "2024.03.10 - 2024.06.20",
    rating: 4.6,
    tags: ["색채", "추상", "감각"],
    image:
      "/placeholder.svg?height=400&width=600&query=colorful abstract art exhibition",
  },
];

export default function FeaturedExhibitions() {
  return (
    <Carousel
      itemsPerView={{
        mobile: 1,
        tablet: 3,
        desktop: 5,
        large: 6,
      }}
      showArrows={true}
      showDots={true}
    >
      {exhibitions.map((exhibition) => (
        <Link
          href={`/exhibitions/${exhibition.id}`}
          key={exhibition.id}
          className="block h-full"
        >
          <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="relative h-48">
              <Image
                src={exhibition.image || "/placeholder.svg"}
                alt={exhibition.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <Calendar className="h-4 w-4" />
                <span>{exhibition.date}</span>
              </div>
              <h3 className="font-playfair text-lg font-bold mb-2 line-clamp-2">
                {exhibition.title}
              </h3>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                <MapPin className="h-4 w-4" />
                <span>{exhibition.venue}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {exhibition.tags.slice(0, 2).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="bg-orange-50 text-orange-700 border-orange-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span className="font-bold">{exhibition.rating}</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </Carousel>
  );
}
