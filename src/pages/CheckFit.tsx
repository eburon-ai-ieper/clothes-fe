import { Button } from "@/components/ui/button";
import { useMeasurements } from "@/store/store";
import Wrapper from "@/ui/wrapper";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  sendPhoto,
  type SendPhotoData,
  type SendPhotoResponse,
} from "@/api/sendPhoto";
import { useNavigate } from "react-router-dom";

const CheckFit = () => {
  const { id } = useParams();
  const { height, weight } = useMeasurements();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const navigate = useNavigate();

  // Start camera function
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  // Start camera on mount
  useEffect(() => {
    startCamera();

    // Cleanup on unmount
    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  // Countdown effect
  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      takePhoto();
      setCountdown(null);
      return;
    }

    const timer = setTimeout(
      () => setCountdown((prev) => (prev !== null ? prev - 1 : null)),
      1000
    );
    return () => clearTimeout(timer);
  }, [countdown]);

  // Take photo
  const takePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;

    const video = videoRef.current;
    const canvas = canvasRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.7);
      setPhoto(dataUrl);

      // Stop the video stream to save resources
      if (video.srcObject) {
        (video.srcObject as MediaStream)
          .getTracks()
          .forEach((track) => track.stop());
      }
    }
  };
  const queryClient = useQueryClient();

  const mutation = useMutation<SendPhotoResponse, Error, SendPhotoData>({
    mutationFn: sendPhoto,
    onSuccess: (data) => {
      queryClient.setQueryData(["measurementResult"], data);
      navigate(`/clothing/${id}/person`);
    },
  });

  // Start countdown on button click
  const handleStartMeasuring = () => setCountdown(5);

  const handleProceed = () => {
    mutation.mutate({ height, weight, photo });
  };

  // Restart: clear photo and restart camera
  const handleRestart = () => {
    setPhoto(null);
    startCamera();
  };

  return (
    <Wrapper>
      <div className="h-[70vh] mt-10 w-[70vw] rounded-2xl bg-[#d9d9d9] flex items-center justify-center relative">
        {!photo && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="h-full w-full object-cover rounded-2xl"
          />
        )}
        {photo && (
          <img
            src={photo}
            alt="Captured"
            className="h-full w-full object-cover rounded-2xl"
          />
        )}

        {/* Countdown overlay */}
        {countdown !== null && !photo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-6xl font-bold rounded-2xl">
            {countdown}
          </div>
        )}
      </div>

      <p className="text-gray-500 text-sm mt-2">
        Please, stay 1 meter from the screen
      </p>

      <div className="mt-4 flex flex-col items-center gap-2">
        <Button
          disabled={mutation.isPending}
          onClick={photo ? handleProceed : handleStartMeasuring}
        >
          {mutation.isPending
            ? "Loading..."
            : photo
            ? "Proceed With Measurements"
            : "Start Measuring"}
        </Button>
        <Button variant="outline" onClick={handleRestart}>
          Restart
        </Button>
      </div>

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </Wrapper>
  );
};

export default CheckFit;
