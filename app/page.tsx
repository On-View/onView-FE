import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, MapPin, Star, Clock } from "lucide-react";
import FeaturedExhibitions from "@/components/featured-exhibitions";
import Carousel from "@/components/carousel";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Featured Exhibitions */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-playfair text-3xl font-bold">요즘 인기 전시</h2>
            <Link
              href="/exhibitions"
              className="text-gray-600 hover:text-gray-700 flex items-center gap-1"
            >
              더보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <FeaturedExhibitions />
        </div>
      </section>
      {/* Ending Soon */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-playfair text-3xl font-bold">
              곧 종료되는 전시/공연
            </h2>
            <Link
              href="/ending-soon"
              className="text-gray-400 hover:text-gray-300 flex items-center gap-1"
            >
              더보기 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <Carousel itemsToShow={3} showArrows={true} showDots={true}>
            {[1, 2, 3, 4, 5].map((item) => (
              <Card
                key={item}
                className="bg-gray-800 border-gray-700 overflow-hidden h-full"
              >
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?key=p5zpj&height=400&width=600&query=art exhibition ending soon ${item}`}
                    alt={`Ending soon exhibition ${item}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                    D-{Math.floor(Math.random() * 7) + 1}
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>~2024.05.{10 + item}</span>
                    <MapPin className="h-4 w-4 ml-2" />
                    <span>서울시립미술관</span>
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-2 text-white">
                    다신 안 할지도 몰라요! 특별전 {item}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    이번이 마지막 기회일지도 모릅니다. 놓치지 마세요!
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-yellow-500 font-bold">
                        {(4 + Math.random()).toFixed(1)}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      className="text-orange-400 hover:text-orange-300 p-0"
                    >
                      자세히 보기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        </div>
      </section>

      {/* User Reviews */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold mb-4">
              사용자 후기
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              OnView 사용자들의 생생한 전시, 공연 감상을 확인해보세요
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={`/abstract-profile-avatar.png?height=100&width=100&query=profile avatar ${item}`}
                      alt="User avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">사용자{item}</h4>
                    <div className="flex items-center gap-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < 4
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                    </div>
                  </div>
                </div>
                <h3 className="font-playfair text-lg font-bold mb-2">
                  인상적인 전시회였습니다
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  정말 감동적인 전시였습니다. 특히 3관의 작품들이 인상적이었고,
                  작가의 의도가 잘 전달되었다고 생각합니다. 다음에 또 방문하고
                  싶어요.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>2024.04.{10 + item}</span>
                  <MapPin className="h-4 w-4 ml-3 mr-1" />
                  <span>국립현대미술관</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
