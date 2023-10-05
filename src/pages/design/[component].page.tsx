import { NextPageWithLayout } from "@/types";
import { useRouter } from "next/router";

const ComponentPreviewPage: NextPageWithLayout = () => {
  const router = useRouter();

  return <div>{router.query.component}</div>;
};

export default ComponentPreviewPage;
