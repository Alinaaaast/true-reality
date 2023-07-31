import Card from '../components/Card';
const mastersJSON = [
  {
    name: 'Олександр',
    photo: 'images/master1.jpeg',
  },
  { name: 'Олег', photo: '/images/master2.jpeg' },
  { name: 'Катя', photo: '/images/master3.jpeg' },
];

export default function Masters() {
  return (
    <div className=" max-w-[200] flex items-center justify-center flex-col ">
      <h2 className="text-black">Masters</h2>
      <div className="flex flex-wrap gap-8 max-w-[900px] items-center justify-center py-8">
        {mastersJSON.map(({ name, photo }) => {
          return <Card masterName={name} masterPhoto={photo} key={name} />;
        })}
      </div>
    </div>
  );
}
