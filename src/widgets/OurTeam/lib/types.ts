interface IPerson {
  src: string;
  link: string;
  title: string;
  subtitle: string;
  description: string;
  duty: string;
  index: number;
  slideAnimation: {
    hidden: {
      y: number;
      opacity: number;
    };
    visible: (custom: number) => {
      y: number;
      opacity: number;
      transition: {
        delay: number;
      };
    };
  };
}

export type { IPerson };
