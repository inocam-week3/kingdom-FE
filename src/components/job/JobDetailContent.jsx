import * as JS from './jobStyle'

export function JobDetailContent({createAt,title,companyname,salary}) {

  return (
    <JS.JobSubContent>
      <JS.RegistDate>
        <p>등록일: {createAt}</p>
      </JS.RegistDate>
      <JS.DetailInfoBody>
        <JS.DetailHead>
          <p>{companyname}</p>
          <strong>{title}</strong>
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
                <dd>recruitmentPersonNum</dd>
              </dl>
            </div>
            <div>
              <h3>근무조건</h3>
              <dl>
                <dt>급여</dt>
                <dd>{salary}</dd>
              </dl>
            </div>
          </JS.ConditionTable>
          <JS.ConditionTable $type={"right"}>
            <div>
              <button>온라인지원</button>
              <h3>모집마감일</h3>
              <strong>recruitmentStartPeriod ~ recruitmentEndPeriod</strong>
            </div>
            <div>
              <h3>채용담당자정보</h3>
              <dl>
                <dt>담당자명</dt>
                <dd>?</dd>
              </dl>
              <dl>
                <dt>연락처</dt>
                <dd>
                  <p>메일</p>
                </dd>
              </dl>
            </div>
          </JS.ConditionTable>
        </JS.DetailCondition>
          <div>냐호</div>
      </JS.DetailInfoBody>
    </JS.JobSubContent>
  )
}