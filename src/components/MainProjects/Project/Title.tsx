interface TitleProps {
  text: string
}

export default function Title({ text }: TitleProps) {
  return (
    <h3 className="font-lexend font-bold text-base text-orange">
      {text}
    </h3>
  )
}
