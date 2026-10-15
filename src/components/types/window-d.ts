export {};

declare global {
  interface Window {
    openCalendlyModal?: () => void;
  }
}