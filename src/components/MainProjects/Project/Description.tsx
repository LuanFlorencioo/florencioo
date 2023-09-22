interface DescriptionProps {
  text: string
}

export default function Description({ text }: DescriptionProps) {
  return (
    <p className="font-inter font-normal text-sm text-white">
      {text}
    </p>
  )
}
