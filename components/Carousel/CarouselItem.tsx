import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  children?: ReactNode;
  classname?: any
}

export const CarouselItem = ({ children, classname }: Props) => {
  return (
    <div className={classname}>
      {children}
    </div>
  )
}