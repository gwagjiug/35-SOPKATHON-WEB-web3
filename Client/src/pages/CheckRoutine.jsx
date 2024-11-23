import MobileLayout from '../components/common/MobileLayout';
import Header from '../components/check/Header';
import { useEffect } from 'react';

const CheckRoutine = () => {
  useEffect(() => {
    const nowDate = new Date();
    const dateOnly = nowDate.toISOString().split('T')[0];
    console.log(dateOnly);
    localStorage.setItem('currentTime', dateOnly);
  }, []);

  return (
    <MobileLayout>
      <Header />
    </MobileLayout>
  );
};

export default CheckRoutine;
