import MobileLayout from '../components/common/MobileLayout';
import ListHeader from '../components/list/ListHeader';

const List = () => {
  const handleBack = () => {
    console.log('뒤로가기 버튼 클릭');
  };

  return (
    <MobileLayout>
      <ListHeader title="돌아가기" onBack={handleBack} />
    </MobileLayout>
  );
};

export default List;
