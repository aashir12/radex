export default function Logo({ className = '', height = 40 }) {
  // Maintain the logo's natural aspect ratio (1179 x 760 ≈ 1.55:1)
  const width = (1179 / 760) * height;

  return (
    <img
      src="../src/assets/footer-logo.png"
      alt="Radex Objektmanagement GmbH"
      className={className}
      width={Math.round(width)}
      height={height}
      style={{ height: `${height}px`, width: "auto", display: "block" }}
    />
  );
}
