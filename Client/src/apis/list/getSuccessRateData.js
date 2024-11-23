import axiosInstance from '../axios';

const memberId = 1; // 고정된 memberId 설정

/**
 * 할 일 목록과 캐릭터 레벨 데이터 가져오기
 * @param {string} date - 요청 날짜 (yyyy-MM-dd 형식)
 * @returns {Promise<Object>} 할 일 목록 및 캐릭터 레벨 데이터
 */
export const getTodoData = async (date) => {
  try {
    const response = await axiosInstance.get('/api/todolist/all-percentage', {
      headers: {
        'Member-Id': memberId, // 고정된 memberId 사용
      },
      params: {
        date, // 요청 날짜
      },
    });

    return response.data.data; // API 응답 데이터 반환
  } catch (error) {
    console.error('할 일 데이터를 불러오는 중 오류 발생:', error);
    throw error;
  }
};
