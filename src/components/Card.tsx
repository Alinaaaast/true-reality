export default function Card({ masterName, masterPhoto }) {
  return (
    <div className="m-w-[300px] min-w-[140px] bg-gray-50 border border-solid border-red-400 flex flex-col items-center justify-center gap-8">
      <img src={masterPhoto} width={60} height={60} alt={masterName} />
      {masterName}
    </div>
  );
}
