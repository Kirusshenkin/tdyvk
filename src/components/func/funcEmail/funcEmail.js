import React from 'react'

export default Email = props => {
    let userData = this.state.newUser;
        userData.to = 'i_daktes_i@mail.ru'
        userData.body = `
        <table cellpadding="8px">
            <tr>
                <th align="left">Имя пользовотеля:</th>
                <td align="left">${userData.name_profile}</td>
            </tr>
            <tr>
                <th align="left">Имя:</th>
                <td align="left">${userData.full_name}</td>
            </tr>
            <tr>
                <th align="left">Возраст:</th>
                <td align="left">${userData.age}</td>
            </tr>
            <tr>
                <th align="left">Пол:</th>
                <td align="left">${userData.sex}</td>
            </tr>
            <tr>
                <th align="left">Профессия:</th>
                <td align="left">${userData.profession}</td>
            </tr>
            <tr>
                <th align="left">Организация:</th>
                <td align="left">${userData.organization}</td>
            </tr>
            <tr>
                <th align="left">Антогонист:</th>
                <td align="left">${userData.be_antagonist ? 'Да' : 'Нет'}</td>
            </tr>
            <tr>
                <th align="left">Откуда:</th>
                <td align="left">${userData.origins}</td>
            </tr>
            <tr>
                <th align="left">Преимущества:</th>
                <td align="left">${userData.advantages}</td>
            </tr>
            <tr>
                <th align="left">Недостатки:</th>
                <td align="left">${userData.disadvantages}</td>
            </tr>
            <tr>
                <th align="left">Параметры внешности:</th>
                <td align="left">${userData.appearance}</td>
            </tr>
            <tr>
                <th align="left">КБМ:</th>
                <td align="left">${userData.kbm}</td>
            </tr>
        </table>
    `;
    fetch('https://tdyvkback.herokuapp.com/mail/', {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    }).then(response => {
        response.json().then(data => {
            alert('Поздравляю Вы создали персонажа!')
        })
    })
}