import { SharedNavBar, SharedPageLayout } from "@/components";
import { DiaryCard } from "./index";
import { NextPageWithLayout } from "@/types";

const Home: NextPageWithLayout = () => (
  <SharedPageLayout>
    <SharedNavBar />
    <main>
      메인 페이지
      <section>
        <DiaryCard id={0} />
      </section>
    </main>
  </SharedPageLayout>
);

export default Home;
