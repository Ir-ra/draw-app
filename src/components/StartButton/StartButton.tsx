type ButtonType = {
  onClickHandle: () => void;
};

export default function StartButton({ onClickHandle }: ButtonType) {
  return (
    <button onClick={onClickHandle} className='startButton'>
      Start
    </button>
  )
}
