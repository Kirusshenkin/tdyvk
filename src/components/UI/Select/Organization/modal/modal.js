import React from 'react'
import './modal.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <span className="btn-modal" onClick={() => this.setState({isOpen:true})}>Подсказка</span>
                {this.state.isOpen && (
                    <div className="modal">
                        <div className="modal-body">
                            <h3>Организации</h3>
                            <table>
                                <tr>
                                    <th>Название организации</th>
                                    <th>Изменение навыков</th>
                                    <th>Изменение мнения остальных</th>
                                    <th>Изменение мнения об остальных</th>
                                </tr>
                                <tr>
                                    <td>Центральное Командованиие NT (ЦК)</td>
                                    <td>Игроки не могут быть сотрудниками ЦК</td>
                                    <td>Мнение остальных никак не влияет на представителей ЦК</td>
                                    <td>-1 на сотрудников ZHP<br/>+1 на сотрудников NT, SolGov и GEX</td>
                                </tr>
                                <tr>
                                    <td>Нано Трайзен (NT)</td>
                                    <td>+1 к СПД</td>
                                    <td>+1 от ЦК от сотрудников GIU -1 от всех уроженцев Нового Гибсона, кто не является сотрудником NT или SolGov<br/> +1 от ЦК</td>
                                    <td>-1 на сотрудников ZHP <br/> +1 на сотрудников SolGov, BTS и GEX и уроженцев Марса</td>
                                </tr>
                                <tr>
                                    <td>Правительство Солнечной Системы(SolGov)</td>
                                    <td>+1 к СПД и КЗ; Преимущество "Важность"</td>
                                    <td>-1 от всех уроженцев Нового Гибсона, кто не является сотрудником NT или SolGov<br/>+1 от ЦК</td>
                                    <td>-1 на сотрудников ZHP, VM +1 на сотрудников SRC</td>
                                </tr>
                                <tr>
                                    <td>Zeng-Hu Pharmaceuticals(ZHP)</td>
                                    <td>+1 к Фармакология, Химия и Врачебное дело</td>
                                    <td>-1 от сотрудников NT, SolGov, SRC, VM и ЦК</td>
                                    <td>-2 на сотрудников VM</td>
                                </tr>
                                <tr>
                                    <td>Второй Красный Крест(SRC)</td>
                                    <td>+1 к Первой помощи, врачебному делу и Хирургии</td>
                                    <td>+1 от сотрудников SolGov</td>
                                    <td>-1 на сотрудников ZHP<br/>+1 от всех уроженцев<br/>Солнечной Системы</td>
                                </tr>
                                <tr>
                                    <td>Вей Мед (VM)</td>
                                    <td>+1 к Биоинженерии и врачебному делу</td>
                                    <td>-1 от сотрудников SolGov, SRC<br/>-2 от сотрудников ZHP</td>
                                    <td>-1 на сотрудников ZHP<br/>+1 на сотрудников GEX</td>
                                </tr>
                                <tr>
                                    <td>BioTech Solutions(BTS)</td>
                                    <td>+1 к Робототехнике и Программированию</td>
                                    <td>+1 от сотрудников NT</td>
                                    <td>+1 на сотрудников GEX</td>
                                </tr>
                                <tr>
                                    <td>Гисонский Инженерный союз (GIU)</td>
                                    <td>+1 к Инженерии (станционные конструкции)<br/>Недостаток "Расходник"</td>
                                    <td>-1 от всех уроженцев Нового Гибсона не являющимися сотрудниками NT, SolGov и GIU<br/>+3 от сотрудников GIU</td>
                                    <td>+3 на сотрудников GIU<br/>+1 на сотрудников NT</td>
                                </tr>
                                <tr>
                                    <td>Gilthari Exports (GEX)</td>
                                    <td>+1 к Ксеноархеилогии</td>
                                    <td>+1 от NT, ZHP, VM, BTS, и ЦК</td>
                                    <td>Без Изменений</td>
                                </tr>
                            </table>
                            <button onClick={() => this.setState({isOpen:false})}>x</button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}
