import { ArrowPathIcon } from '@heroicons/react/20/solid';

const Loading = () => {
  return (
    <div className="flex justify-center py-6">
      <ArrowPathIcon className="animate-spin h-6 text-orange-700 w-6" />
    </div>
  );
};

export default Loading;
