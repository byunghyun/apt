import Link from 'next/link';

const NotFound = async () => {
  return (
    <div className='flex justify-center items-center h-dvh flex-col gap-[25px] px-20'>
      <h2 className='text-slate-300'>찾을 수 없는 페이지입니다.</h2>
      <Link href='/'>
        <p className='text-slate-300 bg-orange-600 px-4 py-2 rounded-lg'>
          처음으로
        </p>
      </Link>
    </div>
  );
};

export default NotFound;
