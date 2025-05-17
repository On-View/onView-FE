import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Star,
  Settings,
  Edit,
  Grid,
  List,
  BookOpen,
} from "lucide-react";

// Mock user data
const user = {
  name: "김문화",
  username: "@culture_kim",
  bio: "전시와 공연을 사랑하는 문화생활 애호가입니다. 주로 현대미술과 클래식 음악에 관심이 많습니다.",
  profileImage:
    "/placeholder.svg?height=200&width=200&query=profile portrait asian woman",
  followers: 128,
  following: 87,
  records: 42,
  exhibitions: [
    {
      id: 1,
      title: "현대미술의 새로운 시선",
      venue: "국립현대미술관",
      date: "2024.04.10",
      rating: 4.8,
      tags: ["현대미술", "회화"],
      image: "/placeholder.svg?key=znmy6",
    },
    {
      id: 2,
      title: "빛과 그림자의 대화",
      venue: "서울시립미술관",
      date: "2024.03.15",
      rating: 4.6,
      tags: ["미디어아트", "빛"],
      image: "/placeholder.svg?key=t38nd",
    },
    {
      id: 3,
      title: "자연과 인간의 공존",
      venue: "디뮤지엄",
      date: "2024.02.20",
      rating: 4.7,
      tags: ["자연", "사진"],
      image: "/placeholder.svg?key=utkua",
    },
  ],
  performances: [
    {
      id: 1,
      title: "오페라의 유령",
      venue: "블루스퀘어",
      date: "2024.03.25",
      rating: 4.9,
      tags: ["뮤지컬", "클래식"],
      image:
        "/placeholder.svg?height=400&width=600&query=phantom of the opera musical",
    },
    {
      id: 2,
      title: "현대무용: 움직임의 시",
      venue: "예술의전당",
      date: "2024.02.15",
      rating: 4.7,
      tags: ["무용", "현대"],
      image:
        "/placeholder.svg?height=400&width=600&query=contemporary dance performance",
    },
  ],
};

export default function ProfilePage() {
  return (
    <div className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto md:mx-0">
            <Image
              src={user.profileImage || "/placeholder.svg"}
              alt={user.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h1 className="font-playfair text-3xl font-bold">
                  {user.name}
                </h1>
                <p className="text-gray-500">{user.username}</p>
              </div>
              <div className="mt-4 md:mt-0 flex gap-3 justify-center md:justify-start">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  팔로우
                </Button>
                <Button variant="outline" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Link href="/record">
                    <Edit className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <p className="text-gray-700 mb-6 max-w-2xl">{user.bio}</p>

            <div className="flex justify-center md:justify-start gap-8 text-center">
              <div>
                <p className="font-bold text-xl">{user.records}</p>
                <p className="text-gray-500">기록</p>
              </div>
              <div>
                <p className="font-bold text-xl">{user.followers}</p>
                <p className="text-gray-500">팔로워</p>
              </div>
              <div>
                <p className="font-bold text-xl">{user.following}</p>
                <p className="text-gray-500">팔로잉</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="all">
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="all">전체</TabsTrigger>
              <TabsTrigger value="exhibitions">전시</TabsTrigger>
              <TabsTrigger value="performances">공연</TabsTrigger>
              <TabsTrigger value="saved">저장됨</TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="all" className="mt-6">
            <div className="mb-8">
              <h2 className="font-playfair text-2xl font-bold mb-6">
                최근 전시 기록
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {user.exhibitions.map((exhibition) => (
                  <Link
                    href={`/exhibitions/${exhibition.id}`}
                    key={exhibition.id}
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
                        <h3 className="font-playfair text-lg font-bold mb-2">
                          {exhibition.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                          <MapPin className="h-4 w-4" />
                          <span>{exhibition.venue}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {exhibition.tags.map((tag) => (
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
              </div>
            </div>

            <div>
              <h2 className="font-playfair text-2xl font-bold mb-6">
                최근 공연 기록
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {user.performances.map((performance) => (
                  <Link
                    href={`/performances/${performance.id}`}
                    key={performance.id}
                  >
                    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <div className="relative h-48">
                        <Image
                          src={performance.image || "/placeholder.svg"}
                          alt={performance.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>{performance.date}</span>
                        </div>
                        <h3 className="font-playfair text-lg font-bold mb-2">
                          {performance.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                          <MapPin className="h-4 w-4" />
                          <span>{performance.venue}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {performance.tags.map((tag) => (
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
                          <span className="font-bold">
                            {performance.rating}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="exhibitions" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-playfair text-2xl font-bold">전시 기록</h2>
              <Button className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />새 기록 작성
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.exhibitions.map((exhibition) => (
                <Link
                  href={`/exhibitions/${exhibition.id}`}
                  key={exhibition.id}
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
                      <h3 className="font-playfair text-lg font-bold mb-2">
                        {exhibition.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <MapPin className="h-4 w-4" />
                        <span>{exhibition.venue}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exhibition.tags.map((tag) => (
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
            </div>
          </TabsContent>

          <TabsContent value="performances" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-playfair text-2xl font-bold">공연 기록</h2>
              <Button className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />새 기록 작성
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {user.performances.map((performance) => (
                <Link
                  href={`/performances/${performance.id}`}
                  key={performance.id}
                >
                  <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div className="relative h-48">
                      <Image
                        src={performance.image || "/placeholder.svg"}
                        alt={performance.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{performance.date}</span>
                      </div>
                      <h3 className="font-playfair text-lg font-bold mb-2">
                        {performance.title}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                        <MapPin className="h-4 w-4" />
                        <span>{performance.venue}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {performance.tags.map((tag) => (
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
                        <span className="font-bold">{performance.rating}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="saved" className="mt-6">
            <div className="text-center py-12">
              <BookOpen className="h-12 w-12 mx-auto text-gray-300 mb-4" />
              <h3 className="font-playfair text-xl font-bold mb-2">
                저장된 항목이 없습니다
              </h3>
              <p className="text-gray-500 mb-6">
                관심 있는 전시나 공연을 저장해보세요
              </p>
              <Button>둘러보기</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
