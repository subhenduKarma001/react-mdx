import React from "react"
import { LogoIcon, MoonIcon, SunIcon } from "./assets/Icons"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-screen h-14 bg-content shadow z-10">
      <div className="mx-6 flex items-center justify-between h-full md:max-w-4xl md:mx-auto">
        <div className="space-x-2 flex items-center">
          <LogoIcon className="w-8 h-8 inline-block" />
          <span>JS Snippets</span>
        </div>
        <button>
          <MoonIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  )
}

export default Header
