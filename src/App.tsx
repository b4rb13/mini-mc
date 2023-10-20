import Dropzone from '@/components/dropzone.tsx';
import { Toaster } from '@/components/ui/toaster.tsx';

function App() {
  return (
    <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
      <div className="space-y-16 pb-8">
        {/* Title + Desc */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-medium text-center">Converter</h1>
          <p className="text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
            Give me a media file and I'll convert it.
          </p>
        </div>
        {/* Upload Box */}
        <Dropzone />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
