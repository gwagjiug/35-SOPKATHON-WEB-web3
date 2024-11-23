import axiosInstance from '../apis/axios';

// 투두 목록 생성 API
export async function postRoutine(memberId, todos, date) {
  try {
    const res = await axiosInstance.post(
      '/api/todo',
      { todos },
      {
        headers: {
          memberId,
        },
        params: {
          date,
        },
      },
    );

    if (res.status === 200) {
      console.log('성공:', res.data.message);
      return res.data;
    }
  } catch (err) {
    console.error('API 호출 중 에러:', err);
    throw err;
  }
}
