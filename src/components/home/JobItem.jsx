import { useRouter } from "../../hooks/commen";
import {JobListSection, JobListLogo} from './homeStyle'

export function JobItem({id, companyname, title}) {
  const { onNavigate } = useRouter();

  return (
    <JobListSection onClick={onNavigate(`/job/${id}`)}>
      <JobListLogo>로고 이미지</JobListLogo>
      <div>
        <p>{companyname}</p>
        <storng>{title}</storng>
      </div>
    </JobListSection>
  )
}