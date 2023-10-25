// imports
import { FFmpeg } from '@ffmpeg/ffmpeg';

export default async function loadFfmpeg(): Promise<FFmpeg> {
  const ffmpeg = new FFmpeg();
  const baseURL = '';
  await ffmpeg.load({
    coreURL: `${baseURL}/lib/ffmpeg-core.js`,
    wasmURL: `${baseURL}/lib/ffmpeg-core.wasm`,
  });

  return ffmpeg;
}
