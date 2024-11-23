import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getTodoData } from '../../../apis/list/getSuccessRateData';

const PercentageContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  margin-top: 3.5rem;
`;

const Percentage = styled.span`
  ${({ theme }) => theme.font.title_sb_56}
  color: ${({ theme }) => theme.main.main01};
`;

const SubtitleContainer = styled.div`
  margin-top: 1rem;
`;

const SubtitleText = styled.span`
  ${({ theme }) => theme.font.caption_m_12}
  color: ${({ theme }) => theme.color.gray06};
`;

const Highlight = styled.span`
  ${({ theme }) => theme.font.caption_m_12}
  color: ${({ theme }) => theme.color.gray06};
  margin-left: 1.2rem;
`;

const PercentageDisplay = () => {
  const [percentage, setPercentage] = useState(0); // 전체 퍼센트
  const [total, setTotal] = useState(0); // 총 할 일 개수
  const [success, setSuccess] = useState(0); // 완료된 할 일 개수

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = new Date().toISOString().split('T')[0]; // 현재 날짜 (yyyy-MM-dd 형식)
        const data = await getTodoData(today); // API 호출 시 date 쿼리 파라미터 전달

        // 백엔드 응답 데이터에 맞게 매핑
        setPercentage(data.allPercentage); // 전체 성공률
        setTotal(data.numAll); // 전체 할 일 개수
        setSuccess(data.numCompleted); // 완료된 할 일 개수
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <PercentageContainer>
      <Percentage>{percentage}%</Percentage>
      <SubtitleContainer>
        <SubtitleText>전체 성공률</SubtitleText>
        <Highlight>
          {total}개 중 {success}개
        </Highlight>
      </SubtitleContainer>
    </PercentageContainer>
  );
};

export default PercentageDisplay;
