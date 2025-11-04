import type { SendPhotoResponse } from "@/api/sendPhoto";
import { Badge } from "@/components/ui/badge";
import Wrapper from "@/ui/wrapper";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import QR from "@/public/GwXFgi.svg";

const UserAvatar = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<SendPhotoResponse>([
    "measurementResult",
  ]);
  const navigate = useNavigate();
  console.log(data);
  if (!data) {
    toast.error("No avatar data provided");
    navigate("/");
  }

  return (
    <Wrapper>
      <div className="flex flex-col gap-4 items-center w-full">
        <div className="flex justify-center items-center">
          {data?.image ? (
            <img
              className="rounded-2xl w-auto object-contain"
              src={data.image}
              alt="User Avatar"
            />
          ) : (
            <div className="rounded-2xl bg-gray-300 h-[60vh] w-full"></div>
          )}
        </div>

        <div>
          <div className="text-center mb-2">
            <p className="text-sm text-center text-gray-500">Costumes</p>
            <h3 className="text-lg font-bold ">Hugo Boss Costume</h3>
            <p className="text-sm text-center text-gray-500">
              Avant-garde Hugo Boss costume featuring deconstructed design and
              refined, modern tailoring.
            </p>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            <Badge>XL</Badge> <Badge>Male</Badge> <Badge>In Stock</Badge>{" "}
            <Badge variant="destructive">Not In Stock</Badge>
          </div>
        </div>
      </div>
      <img src={QR} alt="Qr code" />
    </Wrapper>
  );
};

export default UserAvatar;
