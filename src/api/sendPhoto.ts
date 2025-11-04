import axios from 'axios';

export interface SendPhotoData {
    weight: number | null;
    height: number | null;
    photo: string | null;
}

export interface SendPhotoResponse {
  image: string;
}

export const sendPhoto = async (userMeasurements: SendPhotoData) => {
    console.log(userMeasurements.photo)
    const result = await axios.post<SendPhotoResponse>(`${import.meta.env.VITE_BACKEND_EXPRESS_URL}/edit-image`, userMeasurements)
    return result.data;
}

