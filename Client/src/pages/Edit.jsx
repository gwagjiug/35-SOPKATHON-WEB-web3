import PostRoutine from '../components/postRoutine/PostRoutine';
import MobileLayout from '../components/common/MobileLayout';

const Edit = () => {
  return (
    <MobileLayout>
      <main>
        <PostRoutine isEditMode="true" />
      </main>
    </MobileLayout>
  );
};

export default Edit;
