import HeaderTitle from './HeaderTitle';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className='w-full px-4 py-3 fixed top-0 left-0 z-50 bg-brand-500 border-b border-[#00000010] animate-header opacity-0'>
      <div className='max-w-default mx-auto flex justify-between items-center select-none'>
        <HeaderTitle>
          Florencioo
        </HeaderTitle>

        <Navbar />
      </div>
    </header>
  )
}
