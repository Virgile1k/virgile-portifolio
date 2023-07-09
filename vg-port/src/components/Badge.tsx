interface BadgeProps {
    text: string;
  }
  
  export const Badge = ({ text }: BadgeProps) => {
    return (
      <div className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">  
        {text}
      </div>
    );
  };