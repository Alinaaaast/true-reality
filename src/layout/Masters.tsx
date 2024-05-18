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
                    На фестивалі проведу майстер клас з плетіння Лули. Лула - це
                    чарівна прикраса для волосся, яке плететься із вощеної
                    ниточки та натуральних камінчиків. Часто лулу плетуть в
                    якості оберегу, а також вплітають в волосся з наміром, або
                    загадують бажання.
                  </li>
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
              <h2 className="text-l font-bold my-4"> Мантра-джем </h2>

              <p className=" text-gray-700 text-start mx-8 mb-8">
                <ul className="list-disc">
                  <li>
                    Альона Пашина - арт-терапевтка, провідниця практик,
                    звукотерапевт, ілюстраторка та дизайнерка.
                  </li>
                  <li>
                    Богдан Яковенко - психолог, звукотерапевт, енергопрактик,
                    музикант, шаман нового часу.
                  </li>
                  <li>
                    Мантра-джем - один із видів активного саунд хілінгу. На
                    фестивалі ми створимо разом цілющий простір через
                    імпровізацію голосом та гру на музичних інструментах.  Також
                    поспіваємо мантри та сакральні пісні  з різних традицій.
                    Беріть з собою свої улюблені інструмети.
                  </li>
                </ul>
              </p>
            </div>
            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_14.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Вікторія Стеблина</h3>
              <h2 className="text-l font-bold my-4">
                Експрес консультації з хіромантії
              </h2>

              <p className=" text-gray-700 text-start mx-8 mb-8">
                <ul className="list-disc">
                  <li>
                    Я Вікторія, хіромант🖐🏻 Вже 5 років нагадую собі і іншим що
                    життя в наших руках. Дивлячись на знаки долоні, я досліджую
                    грані особистості, Бачу індивідуальність, унікальність
                    кожного.
                  </li>
                  <li>
                    На фестивалі проводитиму експрес-консультації, де зможу дати
                    рекомендації по проявленню | кар’єрі | фінансах | відносинах
                    | здоров’ю та інших індивідуально значимих аспектах життя -
                    кожному охочому.
                  </li>
                </ul>
              </p>
            </div>
            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_16.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Саша Некіпелова </h3>
              <h2 className="text-l font-bold my-4">
                МК "Стосунки зі смертю (і життям)"{' '}
              </h2>
              <p className=" text-gray-700 text-start mx-8 mb-8">
                <ul className="list-disc">
                  <li>
                    Сертифікована доула смерті. <br></br> Блогерка, займаюсь
                    просвітою у темі смерті, горя, підтримки. <br></br>• Знімаю
                    табу з тем, про які мовчать. <br></br>• Працюю з темами:
                    страх смерті, горювання, підтримка під час проживання втрат,
                    та інші.
                  </li>
                  <li>
                    На цьому майстер-класі я пропоную вам подивитись на своє
                    життя через призму смерті. Кому може бути цікавий та
                    корисний майстер-клас? <br></br>• тим, хто любить
                    досліджувати себе та своє життя, шукати і знаходити нові
                    сенси та цінності, <br></br>• тим, кому цікава тема смерті,{' '}
                    <br></br>• тим, в кого є страх смерті і
                    готовність/ресурс/бажання познайомитись із цим страхом
                    ближче, <br></br>• тим, хто відчуває конфронтацію із фактом
                    людської смертності.
                  </li>
                </ul>
              </p>
            </div>
            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_3.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Ігар Мельник</h3>
              <h2 className="text-l font-bold my-4">
                Тілесно-перформативний воркшоп{' '}
              </h2>
              <p className=" text-gray-700 text-start mx-8 mb-8">
                <ul className="list-disc">
                  <li>
                    Київський митець, артист, акціоніст. 3 2016 року активно
                    займається перформансом, фізичним театром та тілесними
                    практиками. Інтегрував набутий досвід у
                    тілесно-перформативний воркшоп, який зараз є саме тим
                    місцем, яке необхідне кожному і кожній.
                  </li>
                  <li>
                    Під час тілесно-перформативного воркшопу дослідимо місця у
                    тілі, психіці та памʼяті, на які нам у повсякденному житті
                    не вистачає уваги. Вправи з елементами сенсорної депривації,
                    дослідження потокового стану, рухові практики, вивільнення
                    голосу, тілесна взаємодія з іншими учасниками та безпечний
                    простір - це основне меню воркшопу.
                  </li>
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
              <h2 className="text-l font-bold my-4">Цвяхостояння</h2>
              <p className=" text-gray-700 text-start mx-8 mb-8">
                <ul className="list-disc">
                  <li>Провідник в світ цвяхостояння на дошках Садху</li>
                  <li>
                    Актор театру, кіно та імпровізації -масажист та кінезіолог
                  </li>
                  <li>Ведучий трансформаційної гри "Ліла"</li>
                </ul>
              </p>
            </div>
            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_8.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Валерія Созонік</h3>
              <h2 className="text-l font-bold my-4">Цвяхостояння</h2>
              <p className=" text-gray-700 text-start mx-8 mb-8">
                <ul className="list-disc">
                  <li>
                    Я психотерапевт. Моє призначення - поглиблене вивчення та
                    розуміння психічних процесів. Це не просто робота для мене,
                    але справжня пристрасть. Я знаходжу задоволення у допомозі
                    подолати внутрішні труднощі. З цвяхами працюю 3 рік.
                  </li>
                  <li>
                    Стояти на цвяхах - це мати контакт зі своїм болем. Не
                    ігнорувати його. Познайомитися з ним, він завжди щось
                    намагається сказати. Як результат: розслаблення.
                  </li>
                  <li>
                    Дошки -це ідеальний інструмент для індивідуальної та парної
                    практики. А групова практика - це окремий вид задоволення.
                    Як результат: відкриття нових ресурсів, нових можливостей.
                  </li>
                </ul>
              </p>
            </div>
            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_9.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Олександр Радука</h3>
              <h2 className="text-l font-bold my-4">
                Сатсанг з книгою “Два Життя”. Духовні істини і буденність.
              </h2>

              <p className=" text-gray-700 text-start mx-8 mb-8">
                <ul className="list-disc">
                  <li>
                    Провідник традиції “Спасу”. Майстер цигун. Співзасновник
                    AtmaStudio @atma.kyiv
                  </li>

                  <li>
                    Під час зустрічі ми розглянемо ці питання. За відповідями
                    звернемось до вчення переданого через “Два Життя”.
                  </li>
                </ul>
              </p>
            </div>
            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_23.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Яна Мотицька</h3>
              <h2 className="text-l font-bold my-4">Йога</h2>
              <p className=" text-gray-700 text-start mx-8 mb-8">
                <ul className="list-disc">
                  <li>
                    Сертифікований викладач з йоги і медитації, провідник
                    ретритів тиші, жіночих практик, цвяхотерапії, трансових
                    сесій і арттерапевт.
                  </li>
                  <li>
                    Про що взаємодія і зустрічі з Яною: <br></br>• як
                    поєднуються енергія, психіка і тіло (психосоматика, йога і
                    методи впливу) <br></br>• як функціонує енергія в єдиній
                    системі, як накопичувати і наповнювати ресурс <br></br>• як
                    зцілити всі сфери життя і вийти з обмежуючих упереджень{' '}
                    <br></br>• як відчувати себе присутньою і щасливою в моменті
                    зараз <br></br>• як бути цілісною вже зараз
                  </li>
                </ul>
              </p>
            </div>
            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_15.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Дар'я Стрельнікова</h3>
              <h2 className="text-l font-bold my-4">Йога</h2>

              <p className=" text-gray-700 text-start mx-8 mb-8">
                <ul className="list-disc">
                  <li>
                    Дарʼя Стельнікова - експерт з фінансового мислення,
                    ігропрактик, практикуючий інвестор
                  </li>
                  <li>
                    Через гру учасники мають змогу вирішити такі запити:{' '}
                    <br></br>• перестати жити в 0, мати заощадження <br></br>•
                    почати працювати менше, легше і з задоволенням <br></br>•
                    позбутись обмежень, що гальмують фінансове зростання{' '}
                    <br></br>• зрозуміти які саме дії потрібно зробити на шляху
                    до фінансової мети <br></br>• отримати мотивацію до дій і їх
                    перелік
                  </li>
                  <li>
                    Гра з коучинговим підходом і підійде усім, хто хоче перейти
                    на новий фінансовий рівень
                  </li>
                </ul>
              </p>
            </div>

            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_20.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Оля Білокриницька</h3>
              <h2 className="text-l font-bold my-4">
                МК "Свічка на здійснення твого наміру"
              </h2>

              <p className=" text-gray-700 text-start mx-8 mb-8">
                <ul className="list-disc">
                  <li>
                    Енергопрактик, провідник, цілитель, тілесний терапевт,
                    розстановник, містик, маю Дар яснознання та ясновідчуття.
                    Власниця бренду терапевтичних свічок з травами
                    "TVOYA_sacralcandle".
                  </li>
                  <li>
                    Мій майстер-клас не просто про свічку - він про взаємодію з
                    енергією вашого наміру.
                  </li>
                  <li>
                    Що отримаєте: - уповільнення та прислуховування -
                    перезагрузку тілесну та ментальну - відчуєте свій намір і що
                    його зупиняє - зробите своїми руками власну свічку з вощини
                    з травами. - дізнаєтесь як це - відчувати трави - підберете
                    і створите свічку, яка підходить саме вам для вашого наміру
                    на даний момент часу.
                  </li>
                </ul>
              </p>
            </div>

            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_21.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Альона Оксюта</h3>
              <h2 className="text-l font-bold my-4">Аромацеремонія </h2>

              <p className=" text-gray-700 text-start mx-8 mb-8">
                <ul className="list-disc">
                  <li>
                    Наставниця для жінок, майстер жіночих трансформацій,
                    провідник жіночих кіл, спеціаліст з ефірних олій та
                    натурального каміння.
                  </li>
                  <li>
                    Аромацеремонія - це авторський формат аромадослідження стану
                    за допомогою натуральних ефірних олій.
                  </li>
                  <li>
                    Це унікальний метод фізичного та емоційного оновлення за 1
                    сесію, це простий, але суперефективний спосіб роботи зі
                    своєю підсвідомістю, через взаємодію з ефірними оліями
                  </li>
                </ul>
              </p>
            </div>

            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_17.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">
                Олександра Грінченко та Олександра Синиця
              </h3>
              <h2 className="text-l font-bold my-4">Ecstatic Dance </h2>

              <p className=" text-gray-700 text-start mx-8 mb-8">
                <ul className="list-disc">
                  <li>
                    Я - Олександра Грінченко Музика — це мова моєї Душі. А Тіло
                    — мій інструмент проявлення своєї Суті. Моя суперздібність:
                    створюю довкола себе такий енергетичний простір, в якому
                    люди відчувають легкість і можливість проявити себе
                    справжніх.
                  </li>
                  <li>
                    Я — Олександра Синиця Захоплююсь музикою. З самого дитинства
                    відчуваю міцний звʼязок із нею. Моя суперздібність: створюю
                    ту музичну атмосферу, в якій легко проявляти свою суть.
                  </li>
                  <li>
                    Занурюючий шаманський сет, заплющені очі, вся увага в мову
                    свого тіла, дозвіл собі рухатись так, як хочеться у моменті…
                    Довірся своєму тілу! Дозволь проявитися тому, що давно має
                    бути проявленим!
                  </li>
                </ul>
              </p>
            </div>

            <div className="p-6 bg-white   flex flex-col items-center justify-start text-center corner-class">
              <img
                src="../images/master_18.jpeg"
                className="w-44 h-44 mr-1 mt-2 rounded-full"
                alt="True Reality Logo"
              />
              <h3 className="text-xl font-bold my-4">Олександр Хоменко </h3>
              <h2 className="text-l font-bold my-4">Лекція "Жива Матерія" </h2>

              <p className=" text-gray-700 text-start mx-8 mb-8">
                <ul className="list-disc">
                  <li>
                    Мене звати Олександр, я створюю інструменти сили - прикраси
                    із натуральних каменів та металу.
                  </li>
                  <li>
                    Я проведу лекцію на тему «Жива матерія», ми розглянемо
                    базові принципи світотворення та світосприйняття, та
                    спробуємо відчути і поспілкуватись із всесвітом через
                    прикраси сили.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

//  shadow-[9px_9px_11px_-6px_rgba(0,0,0,0.13)]
