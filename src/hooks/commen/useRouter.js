import { useNavigate, useParams } from "react-router-dom"

export const useRouter = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const onNavigate = (path) => () => {
    navigate(path)
  }


  return { id, onNavigate }
}