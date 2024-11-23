// api/list/getSuccessRateData.js

import axiosInstance from '../axios';

/**
 * 성공률 데이터 가져오기
 * @returns {Promise<Object>} 성공률 데이터 (all_percentage, num_completed, num_all)
 */
export const getSuccessRateData = async () => {
  try {
    const response = await axiosInstance.get('/api/todolist/all-percentage', {
      headers: {
        memberId: 1, // 항상 memberId를 1로 설정
      },
    });

    return response.data.data; // 성공률 관련 데이터 반환
  } catch (error) {
    console.error('성공률 데이터를 불러오는 중 오류 발생:', error);
    throw error; // 호출한 컴포넌트에서 에러를 처리하도록 throw
  }
};
