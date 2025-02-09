'use client'

import { Menu, Search,  User,  } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Navbar() {
  return (
    <header className="sticky top-0 w-full z-50">
      <div className="h-0.5 bg-gradient-to-r from-[#E5D5CA] via-[#2F5649] to-[#E5D5CA]" />
      <div className="flex h-16 w-full items-center px-4 bg-green-900 text-white shadow-lg">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:text-[#E5D5CA] hover:bg-white/5"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#2F5649] text-white border-r-0">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <img src="/img/logo.png" alt="Nexus Clinic" className="h-8 w-auto" />
            </Link>
            <div className="grid gap-1">
              {['Aesthetic Clinic', 'The Face', 'The Body', 'Fat & Weight Loss', 'Hair Loss Treatment', 'Female Only', 'Male Only', 'Medi Spa'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="flex items-center py-2 px-3 text-sm font-medium hover:bg-white/5 rounded-md"
                >
                  {item}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-4 hidden lg:flex">
          <img src="/img/logo.png" alt="Nexus Clinic" className="h-8 w-auto" />
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-0.5">
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-8 items-center justify-center rounded-md px-3 text-xs font-medium hover:bg-white/5"
              >
                Aesthetic Clinic
              </Link>
            </NavigationMenuLink>
            {['The Face', 'The Body', 'Fat & Weight Loss', 'Hair Loss Treatment', 'Female Only', 'Male Only', 'Medi Spa'].map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuTrigger className="h-8 px-3 text-xs text-white bg-transparent hover:bg-white/5 data-[state=open]:bg-white/10">
                  {item}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[300px] p-2 bg-[#2F5649] text-white">
                    <NavigationMenuLink asChild>
                      <Link
                        href="#"
                        className="block select-none space-y-1 rounded-md p-2 text-xs leading-none no-underline outline-none hover:bg-white/5"
                      >
                        <div className="font-medium">Treatment 1</div>
                        <p className="line-clamp-2 text-xs text-white/70">
                          Treatment description
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-8 items-center justify-center rounded-md px-3 text-xs font-medium hover:bg-white/5"
              >
                Cart
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side Icons */}
        <div className="ml-auto flex items-center gap-2">
          <button className="text-white p-1.5 rounded-md hover:bg-white/5">
            <Search className="h-4 w-4" />
          </button>

          <Button className="bg-[#E5D5CA] text-[#2F5649] hover:bg-[#E5D5CA]/90 h-7 px-3 text-xs font-medium">
            Book Now
          </Button>

          <div className="relative group">
            <button className="text-white p-1.5 rounded-md hover:bg-white/5">
              <User className="h-4 w-4" />
            </button>
            <div className="absolute right-0 mt-1 w-40 bg-[#2F5649] text-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible">
              {['Profile', 'Settings', 'Logout'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block px-3 py-1.5 text-xs hover:bg-white/5"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}