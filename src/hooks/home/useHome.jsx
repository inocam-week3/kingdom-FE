import { useDispatch, useSelector } from "react-redux"
import * as redux from "../../redux"

export const useHome = () => {
  const selectHomeJobs = useSelector(redux.selectGetHomeJobs)
  const selectHomeStories = useSelector(redux.selectGetHomeStories)
  const dispatch = useDispatch()

  async function getJobInfo() {
    try{
      const res = await redux.instance.get(`/api/homejobs`)
      dispatch(redux.getHomeMorkDataJobs(res.data.info))
    }
    catch (error){
      alert("데이터를 불러오지 못함")
    }
  }
  async function getStoriesInfo() {
    try {
      const res = await redux.instance.get(`/api/homestories`)
      dispatch(redux.getHomeMorkDataStories(res.data.info))

    } catch (error) {
      alert("데이터를 불러오지 못했습니다")
    }
  }

  return { selectHomeJobs , selectHomeStories, getJobInfo, getStoriesInfo }
}