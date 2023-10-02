import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import SampleThumbnail from "@/public/sample.png";

interface DiaryCardProps {
  id: number;
}

export const DiaryCard: FunctionComponent<DiaryCardProps> = (props) => (
  <Link href={`/diary/${props.id}`}>
    <div className="h-332 w-236 shadow-GREY_60 drop-shadow-lg">
      <Image src={SampleThumbnail} alt="" />
      <p>일기 내용 일부</p>
    </div>
  </Link>
);
