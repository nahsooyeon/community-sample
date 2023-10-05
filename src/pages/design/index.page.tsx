import { useState } from "react";
import { SharedInternalLink, SharedPageLayout } from "@/components";

import { NextPageWithLayout } from "@/types";
import { ComponentStatusType } from "@/components/type";

const DesignPage: NextPageWithLayout = () => {
  const [currentTheme] = useState<ComponentStatusType>("PRIMARY");
  return (
    <SharedPageLayout>
      DesignPage
      <main>
        <div>
          {/* 링크 컴포넌트들 */}
          <SharedInternalLink text="Button" link="/" type="link" theme={currentTheme} />
          <SharedInternalLink text="Link" link="/" type="link" theme={currentTheme} />
          <SharedInternalLink text="Input" link="/" type="link" theme={currentTheme} />
          <SharedInternalLink text="Textarea" link="/" type="link" theme={currentTheme} />
          <SharedInternalLink text="Modal" link="/" type="link" theme={currentTheme} />
        </div>
      </main>
    </SharedPageLayout>
  );
};

export default DesignPage;
