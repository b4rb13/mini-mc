// imports
import Dropzone from "@/components/dropzone";

export default function Home() {
  return (
    <div className="space-y-16 pb-8">
      {/* Title + Desc */}
      <div className="space-y-6">
        <h1 className="text-3xl md:text-5xl font-medium text-center">
          Free Unlimited File Converter
        </h1>
        <p className="text-gray-400 text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          asperiores pariatur dolore eaque est facere maxime placeat odio
          aliquam ullam. Laboriosam, assumenda corporis doloribus omnis numquam
          aliquid velit magnam ullam iusto. Laboriosam delectus eius quam
          incidunt reprehenderit quidem doloremque dolor?
        </p>
      </div>

      {/* Upload Box */}
      <Dropzone />
    </div>
  );
}
