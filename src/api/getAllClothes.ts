import type { Clothing } from '@/types/clothing'
import axios from 'axios'

export const getAllClothes = async () => {
    const response = await axios.get<Clothing[]>(`${import.meta.env.VITE_BACKEND_EXPRESS_URL}/api/Clothing`)
    return response
}