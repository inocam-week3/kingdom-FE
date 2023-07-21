import { useNavigate, useParams } from "react-router-dom"

export const useRoter = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  return {navigate, id}
}