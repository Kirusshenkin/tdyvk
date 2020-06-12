import React from 'react'

const Profession = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.title}</label>
            <select 
                name={props.name}
                value={props.value}
                onChange={props.handleChange}
            >
                <option value="" disabled>{props.placeholder}</option>
                {ListProfession.map(function(title, k) {
                    return (
                        <optgroup key={k} label={title.name}>
                            {title.professions.map(function(name, i) {
                                return (
                                    <option key={i} value={name.name} label={name.name}>
                                        {name.name}
                                    </option>
                                )
                            })}
                        </optgroup>
                    )
                })}
            </select>
        </div>
    )
}

const ListProfession = [{
    name: 'Управление',
    professions: [{
        value: 'Капитан',
        name: 'Капитан'
    }, {
        value: 'Глава Персонала',
        name: 'Глава Персонала'
    }, {
        value: 'Главый Инженер',
        name: 'Главый Инженер'
    }, {
        value: 'Директор Отдела Исследования',
        name: 'Директор Отдела Исследования'
    }, {
        value: 'Агент Внутренних Дел',
        name: 'Агент Внутренних Дел'
    }]
}, {
    name: 'Служба Безопасности',
    professions: [{
        value: 'Смотритель',
        name: 'Смотритель'
    }, {
        value: 'Детектив',
        name: 'Детектив'
    }, {
        value: 'Офицер СБ',
        name: 'Офицер СБ'
    }, {
        value: 'Криминалист',
        name: 'Криминалист'
    }, {
        value: 'Кадет СБ',
        name: 'Кадет СБ'
    }, {
        value: 'Агент Внутренних Дел',
        name: 'Агент Внутренних Дел'
    }]
}, {
    name: 'Научные сотрудники',
    professions: [{
        value: 'Учёный',
        name: 'Учёный'
    }, {
        value: 'Робототехник',
        name: 'Робототехник'
    }, {
        value: 'Ксеноархеолог',
        name: 'Ксеноархеолог'
    }, {
        value: 'Ксенобиолог',
        name: 'Ксенобиолог'
    }, {
        value: 'Лаборант',
        name: 'Лаборант'
    }]
}, {
    name: 'Медицинский персонал',
    professions: [{
        value: 'Генетик',
        name: 'Генетик'
    }, {
        value: 'Врач',
        name: 'Врач'
    }, {
        value: 'Химик',
        name: 'Химик'
    }, {
        value: 'Вирусолог',
        name: 'Вирусолог'
    }, {
        value: 'Интерн',
        name: 'Интерн'
    }, {
        value: 'Психиатр',
        name: 'Психиатр'
    }]
}, {
    name: 'Техническое обсуживание',
    professions: [{
        value: 'Инженер',
        name: 'Инженер'
    }, {
        value: 'Атмосферный техник',
        name: 'Атмосферный техник'
    }, {
        value: 'Технический ассистент',
        name: 'Технический ассистент'
    }]
}, {
    name: 'Доставка и снабжение',
    professions: [{
        value: 'Квартирмейстер',
        name: 'Квартирмейстер'
    }, {
        value: 'Грузчик',
        name: 'Грузчик'
    }, {
        value: 'Шахтёр',
        name: 'Шахтёр'
    }, {
        value: 'Переработчик',
        name: 'Переработчик'
    }]
}, {
    name: 'Гражданский персонал',
    professions: [{
        value: 'Бармен',
        name: 'Бармен'
    }, {
        value: 'Повар',
        name: 'Повар'
    }, {
        value: 'Ботаник',
        name: 'Ботаник'
    }, {
        value: 'Уборщик',
        name: 'Уборщик'
    }, {
        value: 'Библиотекарь',
        name: 'Библиотекарь'
    }, {
        value: 'Священник',
        name: 'Священник'
    }, {
        value: 'Ассистент',
        name: 'Ассистент'
    }, {
        value: 'Мим',
        name: 'Мим'
    }, {
        value: 'Клоун',
        name: 'Клоун'
    }]
}, {
    name: 'Синтетический разум',
    professions: [{
        value: 'Искусственный интеллект',
        name: 'Искусственный интеллект'
    }, {
        value: 'Киборг',
        name: 'Киборг'
    }, {
        value: 'Персональный ИИ',
        name: 'Персональный ИИ'
    }]
}]

export default Profession