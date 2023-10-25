import Dropzone from '@/components/dropzone.tsx';
import { Toaster } from '@/components/ui/toaster.tsx';
import { Button } from '@/components/ui/button.tsx';
import { DiCoffeescript } from 'react-icons/di';

function App() {
  return (
    <div className="w-[400px] h-auto pb-8 pt-8 lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
      <Toaster />
      <div className="space-y-8 pb-8">
        {/* Title + Desc */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-5xl font-medium text-center text-[#6ABC46]">Mini Media Converter</h1>
          <p className="text-gray-400 text-lg md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
            Give me a media file and I'll convert it.
          </p>
        </div>
        {/* Upload Box */}
        <Dropzone />
      </div>
      <div className={'flex justify-center items-center'}>
        <Button
          onClick={() => window.open('https://www.buymeacoffee.com/minimc', '_blank')}
          variant="default"
          className="rounded-full w-fit bg-gradient-1 gap-2 items-center md:flex"
          size="lg"
        >
          <span>Buy me a Coffee</span>
          <span className="text-4xl">
            <DiCoffeescript />
          </span>
        </Button>
      </div>
    </div>
  );
}

export default App;
