import SignIn from "@/components/sign-in";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <Link href="/" className="inline-block">
            <Image
              src="/onview-logo.svg"
              alt="OnView Logo"
              width={120}
              height={60}
              className="mx-auto"
            />
          </Link>
          <h1 className="mt-6 font-playfair text-3xl font-bold tracking-tight text-gray-900">
            OnView에 오신 것을 환영합니다
          </h1>
          <p className="mt-2 text-gray-600">
            로그인하여 당신의 문화 경험을 기록하고 공유하세요
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center text-xl">로그인</CardTitle>
            <CardDescription className="text-center">
              소셜 계정으로 간편하게 로그인하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-3 h-12"
              >
                <FcGoogle className="h-5 w-5" />
                <SignIn />
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 border-t pt-4">
            <div className="text-center text-sm">
              계정이 없으신가요?{" "}
              <Link
                href="/register"
                className="font-medium text-orange-600 hover:text-orange-500"
              >
                회원가입
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
