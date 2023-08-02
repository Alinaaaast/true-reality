export default function Schedule() {
  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl font-bold mb-8">Розклад</h2>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left">КУПОЛ</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="py-4 px-6">13:00 - 14:00</td>
              <td className="py-4 px-6">
                Лекція "Карма грошей. Звідки насправді походить багатство"
                (Катерина Духовнікова)
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6">14:00 - 15:30</td>
              <td className="py-4 px-6">
                МК "Музика високих вібрацій" (Любов Макарова - Exidmusic)
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6">16:00- 18:00</td>
              <td className="py-4 px-6">
                МК "Інтеграція Тіні" (Олексій Ситянов та Енджі)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left">ПЛАТФОРМА</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="py-4 px-6">11:00 - 12:00</td>
              <td className="py-4 px-6">
                Знайомство. Взаємодія. Формування спільного поля на день.(Ілона
                Степаненко)
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6">12:00 - 14:00</td>
              <td className="py-4 px-6">Кундаліні йога (Юлія Вакар)</td>
            </tr>
            <tr>
              <td className="py-4 px-6">14:00 - 15:30</td>
              <td className="py-4 px-6">
                Лекція "Як зцілити проблеми зі здоровʼям за допомогою рослинного
                харчування?" (Марія Манч)
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6">16:00 - 18:00</td>
              <td className="py-4 px-6">
                Арт-терапія "Подорож до себе" (Оксана Бойко)
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6">16:00 - 18:00</td>
              <td className="py-4 px-6">
                Експрес-консультації з хіромантії (Вікторія Стеблина)
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6">18:00 - 20:00</td>
              <td className="py-4 px-6">
                Ecstatic Dance + sound healing (Богдан Яковенко та Альона
                Пашина)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-6 text-left">ГАЛЯВИНА</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="py-4 px-6">12:00 - 14:00</td>
              <td className="py-4 px-6">
                Трансформаційна гра "Опора на себе" (Рада)
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6">14:00 - 15:30</td>
              <td className="py-4 px-6">
                Суглобово-хвильова гімнастика та динамічний цигун" Три
                досконалості" (Олександр Радука)
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6">16:00 - 18:00</td>
              <td className="py-4 px-6">
                Цвяхостояння на дошках Садху (Андрій Литвин та Валерія Созонік)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
