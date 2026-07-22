import React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ReactIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    </svg>
  );
}

export function NextjsIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16.5 17L10.2 8.5H8.5V17H10V11.2L15 18C15.5 17.7 16 17.4 16.5 17Z" fill="currentColor" />
      <path d="M14.5 8.5H16V14H14.5V8.5Z" fill="currentColor" />
    </svg>
  );
}

export function TypescriptIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="4" fill="#3178C6" />
      <path d="M11 9H7V11H9V18H11V9Z" fill="white" />
      <path d="M17 11.5C16.5 10.8 15.5 10.5 14.5 10.5C13.2 10.5 12.5 11.2 12.5 12.2C12.5 14.2 17 13.5 17 16C17 17.3 15.8 18 14.2 18C12.8 18 12 17.2 11.5 16.2L13 15.2C13.3 16 13.7 16.6 14.4 16.6C15.1 16.6 15.5 16.2 15.5 15.6C15.5 13.8 11 14.4 11 11.9C11 10.5 12.2 9.2 14.4 9.2C15.6 9.2 16.6 9.8 17.2 10.7L17 11.5Z" fill="white" />
    </svg>
  );
}

export function JavascriptIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="4" fill="#F7DF1E" />
      <path d="M12.5 17.2C13.2 17.7 14 18 14.8 18C16 18 16.6 17.4 16.6 16.2V11.5H18V16.3C18 18.3 16.8 19.3 14.7 19.3C13.5 19.3 12.4 18.9 11.7 18.2L12.5 17.2Z" fill="#000000" />
      <path d="M6.5 17.2C7.2 17.7 8.2 18 9.1 18C10.4 18 11.2 17.3 11.2 16.3C11.2 14.5 7.6 15.1 7.6 13.1C7.6 12 8.6 11.2 10.2 11.2C11.1 11.2 12 11.5 12.6 12L11.8 13.1C11.3 12.7 10.7 12.4 10 12.4C9.3 12.4 8.9 12.8 8.9 13.3C8.9 15 12.5 14.4 12.5 16.4C12.5 18 11.2 19.3 9 19.3C7.9 19.3 6.8 18.9 6 18.2L6.5 17.2Z" fill="#000000" />
    </svg>
  );
}

export function NodejsIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2L20.6603 7V17L12 22L3.33975 17V7L12 2Z" stroke="#5FA04E" strokeWidth="1.5" fill="#5FA04E" fillOpacity="0.15" />
      <path d="M12 6.5L16.5 9.1V14.3L12 16.9L7.5 14.3V9.1L12 6.5Z" stroke="#5FA04E" strokeWidth="1.2" />
    </svg>
  );
}

export function PythonIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11.8 2C8.5 2 8.7 3.4 8.7 3.4V5H12V5.5H5.8C5.8 5.5 3 5.2 3 9.4C3 13.6 5.4 13.4 5.4 13.4H6.8V11.8C6.8 9.9 8.5 9.9 8.5 9.9H12.6C12.6 9.9 14.1 9.9 14.1 8.4V4.7C14.1 4.7 14.4 2 11.8 2ZM9.8 3.6C10.3 3.6 10.7 4 10.7 4.5C10.7 5 10.3 5.4 9.8 5.4C9.3 5.4 8.9 5 8.9 4.5C8.9 4 9.3 3.6 9.8 3.6Z" fill="#3776AB" />
      <path d="M12.2 22C15.5 22 15.3 20.6 15.3 20.6V19H12V18.5H18.2C18.2 18.5 21 18.8 21 14.6C21 10.4 18.6 10.6 18.6 10.6H17.2V12.2C17.2 14.1 15.5 14.1 15.5 14.1H11.4C11.4 14.1 9.9 14.1 9.9 15.6V19.3C9.9 19.3 9.6 22 12.2 22ZM14.2 20.4C13.7 20.4 13.3 20 13.3 19.5C13.3 19 13.7 18.6 14.2 18.6C14.7 18.6 15.1 19 15.1 19.5C15.1 20 14.7 20.4 14.2 20.4Z" fill="#FFD43B" />
    </svg>
  );
}

export function TailwindIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 6C9.33333 6 7.66667 7.33333 7 10C8 8.66667 9.16667 8.16667 10.5 8.5C11.261 8.69025 11.8055 9.2435 12.4086 9.85667C13.3911 10.8557 14.5126 12 17 12C19.6667 12 21.3333 10.6667 22 8C21 9.33333 19.8333 9.83333 18.5 9.5C17.739 9.30975 17.1945 8.7565 16.5914 8.14333C15.6089 7.14433 14.4874 6 12 6ZM7 12C4.33333 12 2.66667 13.3333 2 16C3 14.6667 4.16667 14.1667 5.5 14.5C6.261 14.6903 6.8055 15.2435 7.40863 15.8567C8.3911 16.8557 9.5126 18 12 18C14.6667 18 16.3333 16.6667 17 14C16 15.3333 14.8333 15.8333 13.5 15.5C12.739 15.3097 12.1945 14.7565 11.5914 14.1433C10.6089 13.1443 9.4874 12 7 12Z" fill="#38BDF8" />
    </svg>
  );
}

export function ThreejsIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2L3 7V17L12 22L21 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 22V12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21 7L12 12L3 7" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="#F59E0B" />
    </svg>
  );
}

export function MysqlIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M4 6C4 4.34315 7.58172 3 12 3C16.4183 3 20 4.34315 20 6V18C20 19.6569 16.4183 21 12 21C7.58172 21 4 19.6569 4 18V6Z" stroke="#00758F" strokeWidth="1.5" fill="#00758F" fillOpacity="0.15" />
      <path d="M4 12C4 13.6569 7.58172 15 12 15C16.4183 15 20 13.6569 20 12" stroke="#00758F" strokeWidth="1.5" />
      <path d="M4 6C4 7.65685 7.58172 9 12 9C16.4183 9 20 7.65685 20 6" stroke="#00758F" strokeWidth="1.5" />
    </svg>
  );
}

export function RedisIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3 8L12 3.5L21 8L12 12.5L3 8Z" fill="#D82C20" />
      <path d="M3 12L12 16.5L21 12" stroke="#D82C20" strokeWidth="1.5" />
      <path d="M3 16L12 20.5L21 16" stroke="#D82C20" strokeWidth="1.5" />
    </svg>
  );
}

export function DockerIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13 8H16V11H13V8ZM9 8H12V11H9V8ZM5 8H8V11H5V8ZM13 4.5H16V7.5H13V4.5ZM9 4.5H12V7.5H9V4.5ZM5 4.5H8V7.5H5V4.5ZM17 8H20V11H17V8Z" fill="#2496ED" />
      <path d="M2.5 13C2.5 13 3.5 12 6.5 12C9.5 12 11 13.5 14 13.5C17 13.5 19 12.5 21.5 14C22.5 14.6 22 17.5 19 18.5C15 19.8 7 19.8 4 18.5C2.5 17.9 2 15.5 2.5 13Z" fill="#2496ED" />
    </svg>
  );
}

export function BrandIcon({ name, size = 18 }: { name: string; size?: number }) {
  const normalized = name.toLowerCase();
  if (normalized.includes("react native") || normalized === "react native") return <ReactIcon size={size} />;
  if (normalized.includes("react")) return <ReactIcon size={size} />;
  if (normalized.includes("next")) return <NextjsIcon size={size} />;
  if (normalized.includes("typescript") || normalized === "ts") return <TypescriptIcon size={size} />;
  if (normalized.includes("javascript") || normalized === "js") return <JavascriptIcon size={size} />;
  if (normalized.includes("node")) return <NodejsIcon size={size} />;
  if (normalized.includes("python")) return <PythonIcon size={size} />;
  if (normalized.includes("tailwind")) return <TailwindIcon size={size} />;
  if (normalized.includes("three")) return <ThreejsIcon size={size} />;
  if (normalized.includes("mysql")) return <MysqlIcon size={size} />;
  if (normalized.includes("redis")) return <RedisIcon size={size} />;
  if (normalized.includes("docker")) return <DockerIcon size={size} />;
  return null;
}
