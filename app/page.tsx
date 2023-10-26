// imports
import Dropzone from "@/components/dropzone";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FiChrome } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Converter
        </h1>
        <p className="text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Give me a media file and I'll convert it.
        </p>
      </div>

      {/* Upload Box */}
      <Dropzone />
      <div className={'flex justify-center items-center mt-2'}>
        <Link href="https://chrome.google.com/webstore/detail/minimc/mbnaeflecnnmflflfihjdhgbkofbmgod" target={'_blank'}>
          <Button
            variant="default"
            className="rounded-full w-fit bg-gradient-1 gap-2 items-center md:flex"
            size="lg"
          >
            <span>Add to Chrome</span>
            <span className="text-4xl">
            <FiChrome />
          </span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
