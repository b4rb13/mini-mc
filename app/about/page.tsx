import Link from 'next/link';

export default function About() {
  return (
    <div className="space-y-12 text-md md:text-lg text-gray-500 pb-4 md:pb-8">
      <article className="prose lg:prose-xl">
        <h1>About Mini Media Converter (Mini-MC)</h1>
        <p>Mini Media Converter, affectionately known as Mini-MC, is a versatile and robust software designed to empower users with seamless multimedia conversion capabilities. MiniMC excels at transforming various media formats, catering to a wide range of needs for image, video, and audio files. This open-source gem effortlessly handles the conversion of images, videos, and audio files with utmost efficiency.</p>
        <h2>Key Features:</h2>
        <ul>
          <li>
            <strong>Image Conversion: </strong>
            Mini-MC is your reliable companion for converting a myriad of image formats, including JPG, JPEG, PNG, GIF, BMP, WebP, ICO, TIF, TIFF, SVG, RAW, TGA, and more. No matter the source format, MiniMC ensures your images are easily tailored to your preferences.
          </li>
          <li>
            <strong>Video Conversion: </strong>
            Whether you're dealing with MP4, M4V, MP4V, 3GP, AVI, MOV, WMV, MKV, FLV, OGV, WebM, H.264, or H.265 video files, MiniMC effortlessly transcodes them into your desired format, enabling compatibility with various devices and platforms.
          </li>
          <li>
            <strong>Audio Conversion: </strong>
            Enjoy the freedom to convert your audio files, including MP3, WAV, OGG, AAC, WMA, FLAC, and M4A. MiniMC allows you to modify audio formats with ease, ensuring your music and sound files are compatible with your preferred media players and devices.
          </li>
          <li>
            <strong>Offline Conversion: </strong>
            One of Mini-MC's standout features is its complete offline functionality. No internet connection is required, as all conversions take place on the client side. Your files remain secure and private, with no data sent to external servers, guaranteeing your data's confidentiality and safety.
          </li>
          <li>
            <strong>Open Source:</strong>
            Mini-MC is proudly open source, meaning it is a community-driven project that welcomes contributions from developers and enthusiasts. Its open nature promotes transparency and customization, allowing users to tailor the software to their specific needs.
          </li>
        </ul>
        <p>With Mini-MC, you have a powerful, user-friendly, and privacy-conscious media converter at your disposal. Whether you need to adapt your media for different devices or simply want to enjoy your content in a preferred format, Mini Media Converter is your trusted solution, offered to you completely free of charge.</p>
        <p>You can also Download Mini-MC for Google Chrome as an extension today and experience the freedom to convert your media files effortlessly and securely. It's your go-to tool for all your multimedia conversion needs.</p>
        <div className="flex flex-col mb-12">
          <h3>Authors:</h3>
          <div className="flex items-center gap-2">
            <span>Derenik Khachatryan</span>
            <Link href="https://github.com/b4rb13" target="_blank" className="text-[#53a63f]">
              GitHub
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span>Andrey Arakelyan</span>
            <Link href="https://github.com/andryush" target="_blank" className="text-[#53a63f]">
              GitHub
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <Link href="https://github.com/b4rb13/mini-mc/tree/main" target="_blank" className="text-[#53a63f]">
            Web version source code on GitHub
          </Link>
          <Link href="https://github.com/b4rb13/mini-mc/tree/extension" target="_blank" className="text-[#53a63f]">
            Google Chrome Extension version source code on GitHub
          </Link>
        </div>
      </article>
    </div>
  );
}
