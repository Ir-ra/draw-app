type ButtonType = {
  onClick: () => void;
};

export default function StartButton({ onClick }: ButtonType) {
  return (
    <button onClick={onClick} className='startButton'>
      Start
    </button>
  )
}
