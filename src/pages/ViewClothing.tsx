import Wrapper from "@/ui/wrapper";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useMeasurements } from "@/store/store";
import { Separator } from "@/components/ui/separator";

const ViewClothing = () => {
  const { height, weight, setHeight, setWeight, dropMeasurements } =
    useMeasurements();

  const { id } = useParams();
  return (
    <Wrapper className="px-2">
      <h3 className="font-bold text-4xl">Jo</h3>
      <div className="w-full flex justify-center gap-8 md:gap-12 lg:gap-16 mt-10">
        <img
          className="w-[200px] rounded-2xl bg-gray-200"
          src="https://cdn.suitsupply.com/image/upload/b_rgb:efefef,bo_300px_solid_rgb:efefef,c_pad,w_2600/b_rgb:efefef,c_pad,dpr_1,w_850,h_1530,f_auto,q_auto,fl_progressive/products/suits/default/Winter/P6912_1.jpg"
          alt="avatar"
        />
        <div className="flex flex-col text-right">
          <h3 className="font-semibold text-lg">Hugo Boss</h3>
          <p>Classic suit</p>
          <Separator className="my-2" />
          <p>Sizes:</p>
          <p>XL | L | M | S</p>
          <p className="font-semibold">200€</p>
          <div className="mt-2">
            <Dialog>
              <form>
                <DialogTrigger asChild>
                  <Button variant="outline">Start Measurements</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Start AI-Measurements</DialogTitle>
                    <DialogDescription>
                      Enter your height and weight to increase AI accuracy.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input
                        id="height"
                        name="height"
                        placeholder="190"
                        type="number"
                        value={height ?? ""}
                        onChange={(e) => setHeight(Number(e.target.value))}
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="weight">Body Weight (kg)</Label>
                      <Input
                        id="weight"
                        name="weight"
                        placeholder="80"
                        type="number"
                        value={weight ?? ""}
                        onChange={(e) => setWeight(Number(e.target.value))}
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button
                        variant="outline"
                        onClick={() => dropMeasurements()}
                      >
                        Cancel
                      </Button>
                    </DialogClose>
                    <Link to={`/clothing/${id}/fit`} className="w-full">
                      <Button className="w-full" type="submit">
                        Proceed
                      </Button>
                    </Link>
                  </DialogFooter>
                </DialogContent>
              </form>
            </Dialog>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ViewClothing;
