type FlorenciooLogoProps = {
  style?: 'light' | 'dark';
  role?: 'main' | 'just_text';
}

export default function FlorenciooLogo({ style = 'dark', role }: FlorenciooLogoProps) {
  return role === 'main'
    ? (
      <h1 className='font-bold text-xl md:text-2xl select-none text-brand-100 data-[style=light]:text-brand-500'
        data-style={style}
      >
        Florencioo
      </h1>
    )
    : (
      <p className='font-bold text-xl md:text-2xl select-none text-brand-100 data-[style=light]:text-brand-500'
        data-style={style}
      >
        Florencioo
      </p>
    )
}
