import { AllClothes } from "@/modules/AllClothes";
import Greeting from "@/modules/AllClothes/components/Greeting";
import Wrapper from "@/ui/wrapper";

function MainPage() {
  return (
    <>
      <Wrapper>
        <Greeting />
        <AllClothes />
      </Wrapper>
    </>
  );
}

export default MainPage;
