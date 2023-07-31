// import Card from '../components/Card';
// const mastersJSON = [
//   {
//     name: 'Олександр',
//     photo: 'images/master1.jpeg',
//   },
//   { name: 'Олег', photo: '/images/master2.jpeg' },
//   { name: 'Катя', photo: '/images/master3.jpeg' },
// ];

export default function Masters() {
  return (
    <div className=" max-w-[200] flex items-center justify-center flex-col ">

      {/* <div className="flex flex-wrap gap-8 max-w-[900px] items-center justify-center py-8">
        {mastersJSON.map(({ name, photo }) => {
          return <Card masterName={name} masterPhoto={photo} key={name} />;
        })}
      </div> */}

       <section id="classes" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Майстри</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md flex flex-col items-center justify-center text-center">
                 <img
              src="../../public/images/master_4.jpeg"
              className="w-24 h-24 mr-1 rounded-full"
              alt="True Reality Logo"
            />
              <h3 className="text-xl font-bold my-2">Андрій Литвин та Валерія Созонік</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md flex flex-col items-center justify-center text-center">
                      <img
              src="../../public/images/master_1.jpeg"
              className="w-24 h-24 mr-1 rounded-full"
              alt="True Reality Logo"
            />
              <h3 className="text-xl font-bold my-2">Рада</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md flex flex-col items-center justify-center text-center">
                      <img
              src="../../public/images/master_2.jpeg"
              className="w-24 h-24 mr-1 rounded-full"
              alt="True Reality Logo"
            />
              <h3 className="text-xl font-bold my-2">Оксана Бойко</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          


            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md flex flex-col items-center justify-center text-center">
                 <img
              src="../../public/images/master_4.jpeg"
              className="w-24 h-24 mr-1 rounded-full"
              alt="True Reality Logo"
            />
              <h3 className="text-xl font-bold my-2">Андрій Литвин</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md flex flex-col items-center justify-center text-center">
                      <img
              src="../../public/images/master_5.jpeg"
              className="w-24 h-24 mr-1 rounded-full"
              alt="True Reality Logo"
            />
              <h3 className="text-xl font-bold my-2">Богдан Яковенко та Альона Пашина</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md flex flex-col items-center justify-center text-center">
                      <img
              src="../../public/images/master_6.jpeg"
              className="w-24 h-24 mr-1 rounded-full"
              alt="True Reality Logo"
            />
              <h3 className="text-xl font-bold my-2">Олексій Ситянов та Енджі</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>


        </div>
      </section>
    </div>
  );
}
