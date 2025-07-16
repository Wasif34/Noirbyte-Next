import { BackgroundGradient } from "../ui/background-gradient";
import FaqsUi from "../ui/faqs";

export const Faqs = () => {
  return (
    <BackgroundGradient>
      <div className="w-full p-4 sm:p-10 bg-slate-900 h-full flex flex-col items-center justify-center">
        <FaqsUi />
      </div>
    </BackgroundGradient>
  );
};
export default Faqs;
