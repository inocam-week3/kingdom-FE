import React from "react";
import { TableContentTd, JobsSpan} from './jobStyle'

export function JobInfo({local, companyname, title, salary, createAt}) {
  const when = createAt.split("T");
  const getSalaryColor = (type) => {
    switch (type){
      case "시급" :
        return "#4c93ac";
      case "일급" :
        return "#59ab4b";
      case "월급" :
        return "#cb7c1b";
      case "연봉" :
        return "#8c6ae7";
      default :
        return "#ddd"
    }
  }
  return(
    <tr>
      <TableContentTd $type="local">
        <span>{local}</span></TableContentTd>
      <TableContentTd $type="title">
        <JobsSpan color="#0075ab" size="13px">{companyname}</JobsSpan>
        <JobsSpan size="17px">{title}</JobsSpan>
      </TableContentTd>
      <TableContentTd $type="salary">
        <JobsSpan color={getSalaryColor("시급")}>시급</JobsSpan> <br/>
        <JobsSpan>{salary}</JobsSpan>
      </TableContentTd>
      <TableContentTd $type="create">
        <JobsSpan>{when[0]}</JobsSpan> <br/>
        <JobsSpan>{when[1]}</JobsSpan>
      </TableContentTd>
    </tr>
  )
}