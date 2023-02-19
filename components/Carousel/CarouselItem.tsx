import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  children?: ReactNode;
  className?: any;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void
}

export const CarouselItem = ({ children, className, onMouseEnter, onMouseLeave }: Props) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={className}>
      {children}
    </div>
  )
}