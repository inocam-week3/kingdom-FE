import { useRouter } from "../../hooks/commen";
import {JobListSection, JobListLogo, JobListContent} from './homeStyle'

export function JobItem({id, companyname, title, location, salary, logoImage}) {
  const { onNavigate } = useRouter();

  return (
    <JobListSection onClick={onNavigate(`/job/${id}`)}>
      {logoImage&& <JobListLogo><img src={logoImage} alt="logoImage"/></JobListLogo>}
      <JobListContent>
        <p>{companyname}</p>
        <strong>{title}</strong>
      </JobListContent>
      <section>
        <p>{location}</p>
        <p>시급 {salary}원</p>
      </section>
    </JobListSection>
  );
}
