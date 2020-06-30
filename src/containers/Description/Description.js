import React, {Component} from 'react'
import './Description.css'
import Table from 'react-bootstrap/Table'
class Description extends Component {
  render() {
    return (
        <section>
            <div className="container">
                <div className="description">
                    <div className="organization">
                        <h3>Организации</h3>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th>Организации</th>
                                    <th>Преимущество</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Нано Трайзен (NT)</td>
                                    <td>+1 к СПД Правительство Солнечной Системы (SolGov): +1 к СПД и КЗ Преимущество «Важность»</td>
                                </tr>
                                <tr>
                                    <td>Zeng-Hu Pharmaceuticals (ZHP)</td>
                                    <td>+1 к Фармакологии, Хирургии и Врачебному делу</td>
                                </tr>
                                <tr>
                                    <td>Второй Красный Крест (SRC)</td>
                                    <td> +1 к Первой помощи, Врачебному делу и Хирургии</td>
                                </tr>
                                <tr>
                                    <td>Вей Мед (VM)</td>
                                    <td>+1 к Биоинженерии и Врачебному делу</td>
                                </tr>
                                <tr>
                                    <td>BioTech Solutions (BTS)</td>
                                    <td>+1 к Робототехнике и Программированию</td>
                                </tr>
                                <tr>
                                    <td>Гибсонский Инженерный Союз (GIU)</td>
                                    <td>+1 к Инженерии; Недостаток «Расходник»</td>
                                </tr>
                                <tr>
                                    <td>Gilthari Exports (GEX)</td>
                                    <td>+1 к Ксеноархеиологии</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="origin">
                        <h3>Происхождение</h3>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th>Происхождение</th>
                                    <th>плюсы</th>
                                    <th>минусы</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Земля</td>
                                    <td>+1 к Интеллекту, +1 от сотрудников SolGov</td>
                                    <td>-2 к Здоровью</td>
                                </tr>
                                <tr>
                                    <td>Марс</td>
                                    <td>+1 к Силе, +1 от сотрудников SolGov</td>
                                    <td>-1 к Здоровью</td>
                                </tr>
                                <tr>
                                    <td>Венера</td>
                                    <td>+1 от сотрудников SolGov</td>
                                    <td>-1 к Робототехнике</td>
                                </tr>
                                <tr>
                                    <td>Бимна</td>
                                    <td>ничего не меняется</td>
                                    <td>ничего не меняется</td>
                                </tr>
                                <tr>
                                    <td>Новый Гибсон</td>
                                    <td>+1 к Силе и Инженерии</td>
                                    <td>-1 к реакции на сотрудников NT, SolGov и GIU, уроженцев Марса и Венеры</td>
                                </tr>
                                <tr>
                                    <td>Рождённый на КС</td>
                                    <td> +1 к Космонавт</td>
                                    <td>Нету</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="advantages-disadvantage">
                        <h3>Описание преимуществ</h3>
                        <ul>
                            <li>Огнестрельная подготовка‘ – Вы обретаете навык обращения с огнестрельным оружием (или получаете +2, если уже им обладали)</li>
                            <li>Курсы рукопашного боя‘ – Вы обретаете навык рукопашного боя (или получаете +2, если уже им обладали)</li>
                            <li>Боевые рефлексы‘* – Вас практически невозможно застать в врасплох</li>
                            <li>Выброс адреналина* – Вы получаете +1 ко всем атрибутам на второй секунде боя </li>
                            <li>Крепкий* – Вы получаете +3 HP</li>
                            <li>Сильный‘* – Вы получаете +2 к Силе </li>
                            <li>Компетентный‘ – Вы получаете +1 ко всем навыкам профессии </li>
                            <li>Эрудированный‘* – Вы получаете +1 к Интеллекту</li>
                            <li>Высокий болевой порог* – Боль оказывает на Вас меньший негативный эффект </li>
                            <li>Здоровый‘* – Вы получаете +2 к Здоровью</li>
                            <li>Ловкий‘* – Вы получаете +1 к Ловкости</li>
                            <li>Психопат* – Вам безразличны чувства других. Вы не знаете что такое обще-приемлемая мораль.  No Gods, no Masters</li>
                            <li>Работник месяца‘ – Вы получаете +1 реакции от представителей ЦК и Вашего начальства</li>
                            <li>Важность‘ – Вы крайне важны ЦК. За Вашу жизнь будут бороться и Вас точно не бросят</li>
                            <li>Исчерпывающий опыт‘ – Вы получаете +2 к одному выбранному практическому навыку, которым Вы уже обладаете, таких как Использование электроники, Скафандр, RIG, Первая помощь, Огнестрельное оружие или к подобному</li>
                            <li>Высокая квалификация‘ – Вы владеете всеми необходимыми навыками для повышения</li>
                            <li>Подготовленный‘ – Перед отправкой на КС вы прошли подготовку, дающую +1 к общим навыкам, таких как Космонавт, Первая помощь, Право (СПД), Скафандры и Использование компьютера </li>
                            <li>Глубинное понимание‘ – Вы получаете +2 к одному выбранному теоретическому навыку, которым Вы уже обладаете, таких как Право, Инженерия, Космонавт или подобному</li>
                            <li>Вторая специальность‘ – Вы обретаете навык и знание ещё одной, выбранной Вами должности.</li>
                            <li>Третий глаз‘* – Вы имеете необычную интуицию, улавливающую тонкие нити истинности данного мира. </li>
                            <li>Лицензия‘ – Вы имеете документ с печатью ЦК, позволяющий иметь при себе, пользоваться, что-либо делать. Без него у Вас могли быть проблемы с СБ и командованием. </li>
                        </ul>
                        <h3>Описание недостатков</h3>
                        <ul>
                            <li>Адвентизм‘* – Вы не можете брать какое-либо оружие в руки или использовать предметы в качестве оружия</li>
                            <li>Пацифизм‘* – Вы не можете причинять прямой вред живым, разумным существам, если Вы не были свидетелем того, как они приносят вред</li>
                            <li>Заторможенность‘* – Инициатива вечно не за Вами</li>
                            <li>Апатичность‘* – В бою вы получаете -1 к Ловкости и Интеллекту</li>
                            <li>Хрупкий* – Вы получаете -3 HP</li>
                            <li>Слабый‘* – Вы получаете -2 к Силе</li>
                            <li>Некомпетентный‘ – Вы получаете -1 ко всем навыкам профессии</li>
                            <li>Глупый‘* – Вы получаете -1 к Интеллекту</li>
                            <li>Низкий болевой порог* – Боль оказывает на Вас больший негативный эффект</li>
                            <li>Хилый‘* – Вы получаете -2 к Здоровью</li>
                            <li>Неуклюжий‘* – Вы получаете -1 к Ловкости</li>
                            <li>Альтруист‘* – Вы чувствуете обязанность помогать если Вас об этом просят, даже когда это не входит в Ваши полномочия или сферу компетенции</li>
                            <li>Предвзятость‘ – Вы получаете -1 реакции от представителей ЦК и Вашего начальства</li>
                            <li>Расходник‘ – ЦК безразлична Ваша участь. Возможно ЦК не против если Вы не вернётесь </li>
                            <li>Недостаток опыта‘ – Вы получаете -2 к одному выбранному практическому навыку, которым Вы уже обладаете, таких как Использование электроники, Скафандр, RIG, Первая помощь, Огнестрельное оружие или к подобному </li>
                            <li>Низкая квалификация‘ – Вы не владеете навыками, требуемыми для занимаемой должности, Вас стоило бы понизить</li>
                            <li>Неготовый‘ – Перед отправкой на КС вы не прошли подготовку из-за чего у Вас -1 к общим навыкам, таких как Космонавт, Первая помощь, Право (СПД), Скафандры и Использование компьютера</li>
                            <li>Глубинное непонимание‘ – Вы получаете -2 к одному выбранному теоретическому навыку, которым Вы уже обладаете, таких как Право, Инженерия, Космонавт или подобному</li>
                            <li>Срочный перевод‘ – Вас перевели с прошлого места работы в срочном порядке. У Вас нет общих навыков, таких как Космонавт, Первая помощь, Право (СПД), Скафандры и Использование компьютера, только если они не включены в компетенцию Вашей должности</li>
                            <li>Бегство‘ – Вы здесь, так как убеждены, что в космосе Вас никто не найдёт. </li>
                            <li>Ментальное оглушение‘* – Ваша интуиция почти всегда молчит.</li>
                            <li>Специальное постановление‘ – ЦК отправило на борт специальное постановление, содержащее какой-либо запрет, действующий только в Вашем отношении.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}

export default Description;