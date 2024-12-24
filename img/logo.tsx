export default function Logo() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="200" height="200" fill="white" />
      <path
        d="M100 40C67.9086 40 42 65.9086 42 98C42 130.091 67.9086 156 100 156C132.091 156 158 130.091 158 98"
        stroke="black"
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M158 98V40H100"
        stroke="black"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70 98L90 118L110 98"
        stroke="black"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}