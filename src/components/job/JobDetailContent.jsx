import * as JS from './jobStyle'

export function JobDetailContent({createAt,title,companyname,salary,recruitmentPersonNum,logoimage,recruitendperiod,managername,manageremail,content,workinfraimage}) {

  return (
    <JS.JobSubContent>
      <JS.RegistDate>
        <p>등록일: {createAt && createAt.split("T")[0]}</p>
      </JS.RegistDate>
      <JS.DetailInfoBody>
        <JS.DetailHead>
          <div>
            <p>{companyname}</p>
            <strong>{title}</strong>
          </div>
          <img src={logoimage} alt='logoImage'></img>
        </JS.DetailHead>
        <JS.DetailCondition>
          <JS.ConditionTable $type={"left"}>
            <div>
              <h3>모집조건</h3>
              <dl>
                <dt>모집직종</dt>
                <dd>?</dd>
              </dl>
              <dl>
                <dt>모집인원</dt>
                <dd>{recruitmentPersonNum}명</dd>
              </dl>
            </div>
            <div style={{border:"none"}}>
              <h3>근무조건</h3>
              <dl>
                <dt>급여</dt>
                <dd>시급 {salary}원</dd>
              </dl>
            </div>
          </JS.ConditionTable>
          <JS.ConditionTable $type={"right"}>
            <div>
              {/* <button>온라인지원</button> */}
              <h3>모집마감일</h3>
              <strong>{recruitendperiod &&recruitendperiod.split("T")[0]}</strong>
            </div>
            <div style={{border:"none"}}>
              <h3>채용담당자정보</h3>
              <dl>
                <dt>담당자명</dt>
                <dd>{managername}</dd>
              </dl>
              <dl>
                <dt>연락처</dt>
                <dd>
                  <p>{manageremail}</p>
                </dd>
              </dl>
            </div>
          </JS.ConditionTable>
        </JS.DetailCondition>
        <JS.DetailInfoContent>
          <img src={workinfraimage} alt='workinfraimage'></img>
          <p>{content}</p>
        </JS.DetailInfoContent>
      </JS.DetailInfoBody>
    </JS.JobSubContent>
  )
}