import { NextPageWithLayout } from "@/types/pageLayoutType";
import { SharedNavBar, SharedPageLayout } from "../components";

const Home: NextPageWithLayout = () => (
  <SharedPageLayout>
    <SharedNavBar />
    <main>메인 페이지</main>
  </SharedPageLayout>
);

export default Home;
