declare global {
  interface Window {
    fastspring?: {
      builder?: {
        add: (productPath: string) => void;
      };
    };
  }
};

export {};