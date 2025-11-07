import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { fadeInUp } from "@/lib/utils";
import Suit from "@/public/suit.png";
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

const ClothingCard = () => {
  const { height, weight, setHeight, setWeight, dropMeasurements } =
    useMeasurements();
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div className="flex-none flex flex-col items-center gap-2 cursor-pointer duration-150 hover:scale-105 border rounded-3xl p-4 border-gray-100">
            <motion.img
              {...fadeInUp(0.3)}
              className="relative w-[270px] rounded-3xl bg-gray-100 p-2"
              src={Suit}
              alt="suit"
            />
            <motion.h4
              {...fadeInUp(0.45)}
              className="relative text-md text-gray-600"
            >
              Claude Bonucci Suit
            </motion.h4>
            <motion.div
              {...fadeInUp(0.6)}
              className="relative text-lg font-semibold p-2 px-3 border rounded-2xl cursor-pointer"
            >
              Try it on
            </motion.div>
          </div>
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
              <Button variant="outline" onClick={() => dropMeasurements()}>
                Cancel
              </Button>
            </DialogClose>
            <Link to={`/clothing/1/fit`} className="w-full">
              <Button className="w-full" type="submit">
                Proceed
              </Button>
            </Link>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default ClothingCard;
