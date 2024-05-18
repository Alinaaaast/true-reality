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

      <section id="masters" className=" pt-28 ">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <h2 className="text-4xl font-bold mb-8">Майстри</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            <div className=" bg-white  flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_12.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Аня Акіншина</h3>
              <h2 className="text-l font-bold my-4">МК з плетіння Лули</h2>
              <p className=" text-gray-700 text-start mx-8 mb-8">
                <ul className="list-disc">
                  <li>
                    Я Аня - творча шаманка. Взаємодію із кристалами, вивчаю
                    поглиблено створення амулетів, оберегів. Духовний провідник.
                    Провідник у трансформаційній грі Ліла. Люблю творити красу
                    та бути музою.
                  </li>
                  <li>
                    {' '}
                    На фестивалі проведу майстер клас з плетіння Лули. Лула - це
                    чарівна прикраса для волосся, яке плететься із вощеної
                    ниточки та натуральних камінчиків. Часто лулу плетуть в
                    якості оберегу, а також вплітають в волосся з наміром, або
                    загадують бажання.
                  </li>
                  <li> </li>
                </ul>
              </p>
            </div>
            <div className="p-6 bg-white  flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_13.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Захар Литвиненко</h3>
              <h2 className="text-l font-bold my-4"> Чайна церемонія</h2>
              <p className=" text-gray-700 text-start mx-8 mb-8">
                <ul className="list-disc">
                  <li>Чайний майстер</li>
                  <li>Тілесний терапевт</li>
                  <li>Майстер масажу</li>
                  <li>Майстер хірургічного вакуумного масажу (хіджама)</li>
                  <li>Провідник у практиці цвяхостояння</li>
                  <li>
                    Провідник у психологічній грі за Еріком Берном «Ланцюг
                    протиріччя»
                  </li>
                  <li>
                    Організатор подій з йоги, саундхілінгу та екстатік денсу
                  </li>
                  <li>
                    Провідник у ритуал ініпі (церемоніальна індіанська парова
                    лазня)
                  </li>
                  <li>
                    Чай — це символ мудрості та духовного прозріння; він вчить
                    нас бути зосередженими та уважними, він навчає нас слухати
                    та чути один одного. А чайна церемонія — це час для
                    затишного і вдумливого спілкування, відпочинку та
                    релаксації.
                  </li>
                </ul>
              </p>
            </div>
            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_7.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">
                Альона Пашина та Богдан Яковенко
              </h3>
              <p className=" text-gray-700 text-start mx-8 mb-8">
                арт-терапевтка, ілюстраторка та дизайнерка <br></br>--<br></br>
                музикант, енергопрактик, психолог, звукотерапевт
              </p>
            </div>
            <div className="p-6 bg-white   flex flex-col items-center justify-center text-center corner-class">
              <img
                src="../images/master_4.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Рада</h3>
              <p className=" text-gray-700 text-start mx-8 mb-8">
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
            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_1.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">
                Олексій Ситянов та Енджі
              </h3>
              <p className=" text-gray-700 text-start mx-8 mb-8">
                гештальт та процесуальний терапевт <br></br>--<br></br>
                гештальт терапевт
              </p>
            </div>
            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_3.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Вікторія Стеблина</h3>
              <p className=" text-gray-700 text-start mx-8 mb-8">
                <ul className="list-disc">
                  <li>Хіромант</li>
                  <li>4 роки активної практики аналізування долонь</li>
                  <li>більше 1000 задоволених клієнтів</li>
                </ul>
              </p>
            </div>
            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_2.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Андрій Литвин</h3>
              <p className=" text-gray-700 text-start mx-8 mb-8">
                провідник у світ цвяхостояння на дошках Садху
              </p>
            </div>
            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_8.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Валерія Созонік</h3>
              <p className=" text-gray-700 text-start mx-8 mb-8">
                гештальт-терапевтка, яка ставить на дошки Садху
              </p>
            </div>
            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_9.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Олександр Радука</h3>
              <p className=" text-gray-700 text-start mx-8 mb-8">
                професійний мандрівник та гід, майстер цигун.<br></br> Почав
                свій шлях в 2012 зі слов'янських енергопрактик та
                характерницького спасу.
              </p>
            </div>
            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_10.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Олег Лего</h3>
              <p className=" text-gray-700 text-start mx-8 mb-8">
                <ul className="list-disc">
                  <li>Сертифікований викладач хатха-йоги.</li>
                  <li>
                    Особиста практика йоги більше 10 років, практика викладання
                    більше 3 років.
                  </li>
                  <li>
                    Провідник в практиках цвяхостояння, провідник в світ
                    звукових, музичних медитацій, саундхілінгу і чайних
                    церемоній.
                  </li>
                </ul>
              </p>
            </div>
            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_11.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Любов Макарова</h3>
              <p className=" text-gray-700 text-start mx-8 mb-8">
                Макарова Любов - присвятила добру половину свого життя вивченню
                законів музики, властивості звуку, має вищу музичну освіту
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

//  shadow-[9px_9px_11px_-6px_rgba(0,0,0,0.13)]
