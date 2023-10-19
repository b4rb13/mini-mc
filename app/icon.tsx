import { ImageResponse } from "next/server";
import Image from "next/image";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 979.76 1018.97"
        >
          <ellipse
            className="cls-1 text-[#e6e7e8]"
            cx="442.65"
            cy="987.08"
            rx="432.28"
            ry="31.89"
          />
          <path
            className="cls-2 text-[#259146]"
            d="M404.93,675.11S228.79,864.45,163.86,859.74s-55.2,43.76-35.19,41.83,35.65,3.12,15.2,18.43-42.16,29.51-30.45,49,44.51,5.85,55.39-18.4,26.26-2.62,15.37,14.54,5.53,36.36,19.49,32,27.91-8.62,25-40.39-13.29-48.46,1.42-60.75,202.69-165.66,207-216.76Z"
            transform="translate(-110.12 -90.52)"
          />
          <path
            className="cls-2 text-[#259146]"
            d="M738.49,750.8S953.41,607,959.07,542.13,1011,494.58,1006,514s-2.58,35.7,15.79,17.94,35.82-36.93,53.19-22.28-1.3,44.87-27,51.77-6.75,25.51,11.91,17.48,35,11.23,28.56,24.33-13,26.2-43.86,18.27-45.73-20.82-60.2-8.25S788.62,787.08,737.49,783.22Z"
            transform="translate(-110.12 -90.52)"
          />
          <path
            className="cls-3 text-[#6abc47]"
            d="M222.86,721S73.77,504.35,256.25,289.81C415,103.24,644.08,140.17,779.37,251.87s153.39,316.52,86.38,443.4-198.17,132.94-184.38,217,99.67,123.52-35.88,138.93-30.07-112.72-67.35-133.9S442.69,890,471.45,947.64s75.31,95.74,37.42,117.33-155.85,42.36-138.41-9.25,40.34-107.33.82-163.89S281.49,813.25,222.86,721Z"
            transform="translate(-110.12 -90.52)"
          />
          <circle
            className="cls-4 text-[#5aa545]"
            cx="528.45"
            cy="487.56"
            r="227.42"
            transform="translate(-300.1 425.95) rotate(-45)"
          />
          <circle
            className="cls-5 text-[#fff]"
            cx="535.61"
            cy="464.64"
            r="213.37"
            transform="translate(-281.8 424.31) rotate(-45)"
          />
          <circle
            className="cls-6 text-[#262c15]"
            cx="416.99"
            cy="384.04"
            r="99.1"
          />
          <circle
            className="cls-5 text-[#fff]"
            cx="551.86"
            cy="431.3"
            r="43.16"
            transform="translate(-101.66 782.69) rotate(-77.13)"
          />
          <circle
            className="cls-5 text-[#fff]"
            cx="356.82"
            cy="415.64"
            r="18.19"
          />
          <path
            className="cls-7 text-[#484a21]"
            d="M381.89,783.17S510.43,897,636.9,794.22C636.9,794.22,509.45,815.82,381.89,783.17Z"
            transform="translate(-110.12 -90.52)"
          />
          <path
            className="cls-3 text-[#6abc47]"
            d="M335.83,240.3s-4.73-86.22-73.23-99.21c0,0-18.9,42.25-50.79,21.12s13-70.73,36.62-64.82,19.86,28.34,19.86,28.34,69.9,11.81,78.17,107.48Z"
            transform="translate(-110.12 -90.52)"
          />
          <path
            className="cls-3 text-[#6abc47]"
            d="M673.54,233.91s4.72-86.22,73.23-99.21c0,0,18.89,42.25,50.78,21.13s-13-70.74-36.61-64.83-19.87,28.35-19.87,28.35-69.89,11.81-78.16,107.47Z"
            transform="translate(-110.12 -90.52)"
          />
          <path
            className="cls-8 text-[#428c41]"
            d="M386.52,1084.87s-1.09-8.37,9.25-13.68S412,1085.84,412,1088C412,1088,396.61,1089.63,386.52,1084.87Z"
            transform="translate(-110.12 -90.52)"
          />
          <path
            className="cls-8 text-[#428c41]"
            d="M432,1086.75a15.1,15.1,0,0,1,4.87-17.17c8.85-7.26,21.47,14.41,20,12C456.93,1081.6,443,1088.74,432,1086.75Z"
            transform="translate(-110.12 -90.52)"
          />
          <path
            className="cls-8 text-[#428c41]"
            d="M482.48,1075a15.1,15.1,0,0,1,2-17.73c7.56-8.6,23.52,10.74,21.7,8.62C506.2,1065.93,493.63,1075.23,482.48,1075Z"
            transform="translate(-110.12 -90.52)"
          />
          <path
            className="cls-8 text-[#428c41]"
            d="M610.65,1051.65s3.32-20.91,18.08-18,12.59,18,12.59,18S623.87,1053.08,610.65,1051.65Z"
            transform="translate(-110.12 -90.52)"
          />
          <path
            className="cls-8 text-[#428c41]"
            d="M661.81,1049.09s-2.66-18.65,13.28-17.76,11.49,12.93,12,12.8S679.24,1048.83,661.81,1049.09Z"
            transform="translate(-110.12 -90.52)"
          />
          <path
            className="cls-8 text-[#428c41]"
            d="M705.16,1037.72s-7.63-12.59-3.2-18.2,18.73,0,18.73,0S723.25,1031.32,705.16,1037.72Z"
            transform="translate(-110.12 -90.52)"
          />
          <path
            className="cls-9 text-[#e184b2]"
            d="M463.23,827.63s64-25.35,98.09,5C561.32,832.65,509.81,848.21,463.23,827.63Z"
            transform="translate(-110.12 -90.52)"
          />
          <path
            className="cls-10 text-[#f1f1f2]"
            d="M535.66,827.63S509.4,762,550,754.59c43.3-7.93,45.34,66.09,45.34,66.09s-17.25,11-52,15.21c-1.35.16-5.15.56-5.15.56Z"
            transform="translate(-110.12 -90.52)"
          />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  );
}
