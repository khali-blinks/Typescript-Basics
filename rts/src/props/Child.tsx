interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
  };

export const Child = ({ color, onClick }: ChildProps) => {    
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export const Child2: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}