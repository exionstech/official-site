import { cn } from '@/lib/utils';
import './main-button.css'

interface MainButtonProps {
  text: string;
  className?: string;
}

const MainButton = ({text, className}:MainButtonProps) => {
  return (
    <a  className={cn("button",className,"text-background")} href="#">
         {text}
      <span className="button__icon-wrapper bg-background">
        <svg width={10} height={10} className="button__icon-svg text-text" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
          <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
        </svg>
        <svg className="button__icon-svg button__icon-svg--copy text-text" xmlns="http://www.w3.org/2000/svg" width={10} height={10} fill="none" viewBox="0 0 14 15">
          <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
        </svg>
      </span>
     
    </a>
  );
}

export default MainButton;
