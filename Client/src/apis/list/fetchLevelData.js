import axiosInstance from '../axios';

/**
 * 캐릭터 레벨 데이터 가져오기
 * @returns {Promise<number>} 캐릭터의 현재 레벨
 */
export const getLevelData = async () => {
  try {
    const response = await axiosInstance.get('/api/member/level', {
      headers: {
        'Member-Id': 1, // 항상 memberId를 1로 설정
      },
    });

    return response.data.data; // 캐릭터 레벨 데이터 반환
  } catch (error) {
    console.error('레벨 데이터를 불러오는 중 오류 발생:', error);
    throw error;
  }
};
