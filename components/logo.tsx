import Image from "next/image";
import React from "react";

type IProps = {
  width?: number;
  height?: number;
};

export default function Logo(props: IProps) {
  const { width = 50, height = 50 } = props;
  return (
    <div>
      <Image src={"/logo.svg"} alt="ola-logo" height={height} width={width} />
    </div>
  );
}
