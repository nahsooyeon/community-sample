import { SharedNavBar, SharedPageLayout } from "@/components";
import { NextPageWithLayout } from "@/types";
import { useRouter } from "next/router";

export const DiaryPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <SharedPageLayout>
      <SharedNavBar />
      <main>
        <div>Diary {`${id}`}</div>
      </main>
    </SharedPageLayout>
  );
};
export default DiaryPage;
