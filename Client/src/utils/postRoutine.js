import instance from '../apis/axios';
import getFormattedDate from './getFormattedDate';

// 투두 목록 생성 API
// export async function postRoutine(memberId = 1, todos, date) {
//   try {
//     const res = await axiosInstance.post(
//       '/api/todo',
//       { todos },
//       {
//         headers: { 'Member-Id': memberId },
//         params: { date },
//       },
//     );

//     if (res.status === 200) {
//       console.log('성공:', res.data.message);
//       return res.data;
//     }
//   } catch (err) {
//     console.error('API 호출 중 에러:', err);
//     throw err;
//   }
// }

export async function postRoutine(memberId = 6, todos) {
  const date = getFormattedDate();
  const res = await instance.post(
    '/api/todo',
    { todos },
    {
      headers: { 'Member-Id': memberId },
      params: { date },
    },
  );
  return res.data;
}
