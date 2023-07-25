import { useRouter } from "../../hooks/commen";
import {JobListSection, JobListLogo, JobListContent} from './homeStyle'

export function JobItem({id, companyname, title, location}) {
  const { onNavigate } = useRouter();

  return (
    <JobListSection onClick={onNavigate(`/job/${id}`)}>
      <JobListLogo><p>로고 이미지</p></JobListLogo>
      <JobListContent>
        <p>{companyname}</p>
        <storng>{title}</storng>
      </JobListContent>
      <p>{location}</p>
    </JobListSection>
  )
}