export function Arrow({ direction = "up-right" }) {
  return (
    <svg
      className="arrow-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={
          direction === "down"
            ? "M12 4v16m-6-6 6 6 6-6"
            : "M6 18 18 6M6 6h12v12"
        }
      />
    </svg>
  );
}
