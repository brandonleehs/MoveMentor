type BoardWrapperProps = {
  children: React.ReactNode;
};
export default function BoardWrapper({ children }: BoardWrapperProps) {
  return <div className="p-6 aspect-square">{children}</div>;
}
