function Button({
  children,
  href = "#",
  primary = true,
  download = false,
  target,
}) {
  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition duration-300 ${
        primary
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "border border-blue-600 text-blue-600 hover:bg-blue-50"
      }`}
    >
      {children}
    </a>
  );
}

export default Button;