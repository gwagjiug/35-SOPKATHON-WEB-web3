import axiosInstance from './axiosInstance';

const fetchTodos = (date, memberId) => {
  axiosInstance
    .get('/api/todo', {
      params: {
        date: date,
      },
      headers: {
        memberId: memberId,
      },
    })
    .then((response) => {
      console.log('Success:', response.data);
      const { message, data } = response.data;
      console.log(message);
      console.log(data.todoList);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

const nowDate = localStorage.getItem('currentTime');

fetchTodos(nowDate, 1);
