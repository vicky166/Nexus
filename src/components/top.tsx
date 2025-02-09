"use client"

import { Button } from "@/components/ui/button"

export function Top() {
  return (
    <div className="w-full">
      <div className="w-full bg-[#00FF7F] py-2 px-4 text-center">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <span>Need advice? Chat with the doctor now!</span>
          <Button variant="default" className="bg-black text-white hover:bg-gray-800">
            Chat Now!
          </Button>
        </div>
      </div>
    </div> 
  )
}