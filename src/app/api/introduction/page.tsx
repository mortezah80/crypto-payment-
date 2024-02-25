import ApiLayout from "@/components/layout/api";
import Biling from "@/components/pages/api/biling";

const IntroductionPage = () => {
  return (
    <div className="flex flex-col items-center">
      <ApiLayout code>
        <Biling />
      </ApiLayout>
    </div>
  );
};

export default IntroductionPage;
