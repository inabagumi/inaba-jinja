declare const PRERENDER: boolean;

declare module '*.scss' {
  export function use(): void;
  export function unuse(): void;
}
