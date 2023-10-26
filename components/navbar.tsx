// imports
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';
import { DiCoffeescript } from 'react-icons/di';
import { GrMenu } from 'react-icons/gr';
import { FiChrome } from 'react-icons/fi';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Navbar({}): any {
  return (
    <nav className="w-full backdrop-blur-md bg-white bg-opacity-30 z-50 fixed h-24 flex justify-between items-center py-10 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/">
        <Image
          alt="logo"
          className="cursor-pointer w-10"
          src="/images/logo.svg"
          height={40}
          width={58}
        />
      </Link>
      <div className="gap-1 md:gap-2 lg:gap-4 hidden md:flex">
        <Button variant="ghost" className="font-semibold text-md">
          <Link href="/">Home</Link>
        </Button>
        <Link href="/about">
          <Button variant="ghost" className="font-semibold text-md">
            About
          </Button>
        </Link>
        <Link href="/privacy-policy">
          <Button variant="ghost" className="font-semibold text-md">
            Privacy Policy
          </Button>
        </Link>
      </div>
      <Link className={'hidden md:flex lg:flex xl:flex 2xl:flex'} href="https://www.buymeacoffee.com/minimc" target={'_blank'}>
        <Button
          variant="default"
          className="flex rounded-full w-fit bg-gradient-1 gap-2 items-center"
          size="lg"
        >
          <span>Buy me a Coffee</span>
          <span className="text-4xl">
            <DiCoffeescript />
          </span>
        </Button>
      </Link>
      <div>
        <Link className={'md:hidden lg:hidden xl:hidden sm:visible'} href="https://chrome.google.com/webstore/detail/minimc/mbnaeflecnnmflflfihjdhgbkofbmgod" target={'_blank'}>
          <Button
            variant="default"
            className="rounded-full w-fit bg-gradient-1 gap-2 items-center"
            size="lg"
          >
            <span>Add to Chrome</span>
            <span className="text-4xl">
            <FiChrome />
          </span>
          </Button>
        </Link>
      </div>

      {/* MOBILE NAV */}
      <Sheet>
        <SheetTrigger className="block md:hidden p-3">
          <span className="text-2xl">
            <GrMenu />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="w-full space-y-3">
                <Link href="/">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    Home
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    About
                  </Button>
                </Link>
                <Link href="/privacy-policy">
                  <Button
                    variant="link"
                    className="font-semibold text-md w-full"
                  >
                    Privacy Policy
                  </Button>
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
