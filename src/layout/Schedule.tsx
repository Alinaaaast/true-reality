export default function Schedule() {
  return (
    <section id="schedule" className="pt-28">
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
                Лекція "Жива Матерія" (Олександр Хоменко)
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6">14:00 - 15:00</td>
              <td className="py-4 px-6">
                Сатсанг з книгою "Два життя". Духовні істини і буденність
                (Олександр Радука)
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6">15:00- 17:00</td>
              <td className="py-4 px-6">
                МК "Стосунки зі смертю (і життям)" (Саша Некіпелова)
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6">17:00- 18:00</td>
              <td className="py-4 px-6">Нетворкінг </td>
            </tr>
            <tr>
              <td className="py-4 px-6">18:00- 20:00</td>
              <td className="py-4 px-6">
                Тілесно-перформативний воркшоп (Ігар Мельник)
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
              <td className="py-4 px-6">12:00 - 13:30</td>
              <td className="py-4 px-6">Йога (Яна Мотицька)</td>
            </tr>
            <tr>
              <td className="py-4 px-6">12:00 - 14:00</td>
              <td className="py-4 px-6">МК з плетіння Лули (Аня Акіншина)</td>
            </tr>
            <tr>
              <td className="py-4 px-6">13:30 - 15:00</td>
              <td className="py-4 px-6">Чайна церемонія (Захар Литвиненко)</td>
            </tr>
            <tr>
              <td className="py-4 px-6">14:00 - 15:00</td>
              <td className="py-4 px-6">
                Експрес-консультації з хіромантії (Вікторія Стеблина)
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6">14:00 - 15:00</td>
              <td className="py-4 px-6">
                MK "Свічка на здійснення твого наміру" (Оля Білокриницька)
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6">15:00 - 17:00</td>
              <td className="py-4 px-6">
                Аромацеремонія (Альона Оксюта) - мк буде проходити в шатрі
                @wspace_kyiv
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6">17:00- 18:00</td>
              <td className="py-4 px-6">Нетворкінг </td>
            </tr>
            <tr>
              <td className="py-4 px-6">18:00 - 20:00</td>
              <td className="py-4 px-6">
                Трансформаційна гра "Фінансова свобода" (Дарʼя Стрельнікова)
              </td>
            </tr>

            <tr>
              <td className="py-4 px-6">20:00 - 21:00</td>
              <td className="py-4 px-6">
                Ecstatic Dance (Олександра Грінченко та Олександра Синиця)
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
              <td className="py-4 px-6">15:00 - 17:00</td>
              <td className="py-4 px-6">
                Мантра-джем (Богдан Яковенко та Альона Пашина)
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6">17:00- 18:00</td>
              <td className="py-4 px-6">Нетворкінг </td>
            </tr>
            <tr>
              <td className="py-4 px-6">18:00 - 20:00</td>
              <td className="py-4 px-6">
                Цвяхостояння на дошках Садху (Андрій Литвин та Валерія Созонік)
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6">12:00 - 20:00</td>
              <td className="py-4 px-6">Маркет</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
