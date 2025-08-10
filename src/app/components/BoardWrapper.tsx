type BoardWrapperProps = {
  children: React.ReactNode;
};
export default function BoardWrapper({ children }: BoardWrapperProps) {
  return <div className="p-2 aspect-square">{children}</div>;
}
