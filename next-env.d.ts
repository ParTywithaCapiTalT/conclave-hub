/// <reference types="next" />
/// <reference types="next/image-types/global" />

// This explicitly tells TypeScript how to handle global CSS module side-effects
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
