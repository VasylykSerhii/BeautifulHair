export interface IServiceNumbers {
  title: string;
  desc: string;
}

export interface IInfoBlock {
  img: string;
  title: string;
  desc?: string;
  list?: string[];
}
export interface IServiceData {
  slug: string;
  icon: JSX.Element;
  title: string;
  desc: string;
  colors: {
    from: string;
    to: string;
  };
  images: string;
  numbers?: {
    title: string;
    desc: string;
    list: IServiceNumbers[];
  };
  infoBlock?: IInfoBlock;
  infoBlockReverse?: IInfoBlock;
}
