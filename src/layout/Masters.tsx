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

      <section id="masters" className="py-14">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <h2 className="text-4xl font-bold mb-8">Майстри</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            <div className="p-6 bg-white shadow-[9px_9px_11px_-6px_rgba(0,0,0,0.13)] flex flex-col items-center justify-start text-center">
              {/* 5px 9px 13px 1px rgba(0,0,0,0.13) */}
              <img
                src="../images/master_5.jpg"
                className="w-44 h-44 mr-1 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Катерина Духовнікова</h3>
              <p className="text-gray-700 text-start">
                <ul className="list-disc">
                  <li>
                    {' '}
                    практикую кармічний менеджмент вже рік та маю класні
                    результати
                  </li>
                  <li> сертифікований практик 1го ступеня йоги Леді Нігуми</li>
                  <li> практик та майбутній провідник у світ house healing</li>
                </ul>
              </p>
            </div>
            <div className="p-6 bg-white shadow-[9px_9px_11px_-6px_rgba(0,0,0,0.13)] flex flex-col items-center justify-start text-center">
              <img
                src="../images/master_6.jpg"
                className="w-44 h-44 mr-1 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Оксана Бойко</h3>
              <p className="text-gray-700 text-start">
                <ul className="list-disc">
                  <li>Арт-терапевт</li>
                  <li>інтерʼєрний декоратор</li>
                  <li>дослідниця теорії «Архетипи в інтерʼєрі»</li>
                </ul>
              </p>
            </div>
            <div className="p-6 bg-white shadow-[9px_9px_11px_-6px_rgba(0,0,0,0.13)] flex flex-col items-center justify-start text-center">
              <img
                src="../images/master_7.jpeg"
                className="w-44 h-44 mr-1 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">
                Альона Пашина та Богдан Яковенко
              </h3>
              <p className="text-gray-700 text-start">
                арт-терапевтка, ілюстраторка та дизайнерка <br></br>--<br></br>
                музикант, енергопрактик, психолог, звукотерапевт
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-[9px_9px_11px_-6px_rgba(0,0,0,0.13)] flex flex-col items-center justify-center text-center">
              <img
                src="../images/master_4.jpg"
                className="w-44 h-44 mr-1 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Рада</h3>
              <p className="text-gray-700 text-start">
                <ul className="list-disc">
                  <li>
                    більше 5 років пишу зцілюючі енергетичні казки по запиту,
                    які збуваються.
                  </li>
                  <li>
                    За цей рік створила 5 ігор, кожна гра розпаковує потрібну
                    грань
                  </li>
                  <li>
                    {' '}
                    ігри і проявлятися розпочала в окупації в Херсоні, це мене
                    розширило та вивело в свій дух
                  </li>
                  <li>моїм іграм можна навчитися та стати їх провідником</li>
                </ul>
              </p>
            </div>
            <div className="p-6 bg-white shadow-[9px_9px_11px_-6px_rgba(0,0,0,0.13)] flex flex-col items-center justify-start text-center">
              <img
                src="../images/master_1.jpg"
                className="w-44 h-44 mr-1 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">
                Олексій Ситянов та Енджі
              </h3>
              <p className="text-gray-700 text-start">
                гештальт та процесуальний терапевт <br></br>--<br></br>
                гештальт терапевт
              </p>
            </div>
            <div className="p-6 bg-white shadow-[9px_9px_11px_-6px_rgba(0,0,0,0.13)] flex flex-col items-center justify-start text-center">
              <img
                src="../images/master_3.jpg"
                className="w-44 h-44 mr-1 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Вікторія Стеблина</h3>
              <p className="text-gray-700 text-start">
                <ul className="list-disc">
                  <li>Хіромант</li>
                  <li>4 роки активної практики аналізування долонь</li>
                  <li>більше 1000 задоволених клієнтів</li>
                </ul>
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-[9px_9px_11px_-6px_rgba(0,0,0,0.13)] flex flex-col items-center justify-start text-center">
              <img
                src="../images/master_2.jpg"
                className="w-44 h-44 mr-1 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Андрій Литвин</h3>
              <p className="text-gray-700 text-start">
                провідник у світ цвяхостояння на дошках Садху
              </p>
            </div>
            <div className="p-6 bg-white shadow-[9px_9px_11px_-6px_rgba(0,0,0,0.13)] flex flex-col items-center justify-start text-center">
              <img
                src="../images/master_8.jpg"
                className="w-44 h-44 mr-1 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Валерія Созонік</h3>
              <p className="text-gray-700 text-start">
                гештальт-терапевтка, яка ставить на дошки Садху
              </p>
            </div>
            <div className="p-6 bg-white shadow-[9px_9px_11px_-6px_rgba(0,0,0,0.13)] flex flex-col items-center justify-start text-center">
              <img
                src="../images/master_9.jpeg"
                className="w-44 h-44 mr-1 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Олександр Радука</h3>
              <p className="text-gray-700 text-start">
                професійний мандрівник та гід, майстер цигун.<br></br> Почав
                свій шлях в 2012 зі слов'янських енергопрактик та
                характерницького спасу.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
