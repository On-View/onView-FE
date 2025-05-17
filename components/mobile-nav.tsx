"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, PlusSquare, Bell, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    name: "홈",
    href: "/",
    icon: Home,
  },
  {
    name: "검색",
    href: "/search",
    icon: Search,
  },
  {
    name: "업로드",
    href: "/record",
    icon: PlusSquare,
  },
  {
    name: "소식",
    href: "/feed",
    icon: Bell,
  },
  {
    name: "프로필",
    href: "/profile",
    icon: User,
  },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white lg:hidden">
      <nav className="flex h-16 items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const IconComponent = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full",
                isActive
                  ? "text-orange-600"
                  : "text-gray-500 hover:text-gray-900"
              )}
            >
              <IconComponent
                className={cn(
                  "h-6 w-6 mb-1",
                  isActive ? "text-orange-600" : "text-gray-500"
                )}
              />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
