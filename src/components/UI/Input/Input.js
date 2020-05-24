// import React from 'react'
// // import classes from './Input.css'

// function isInvalid({valid, touched, shouldValidate}) {
//     return !valid && shouldValidate && touched
// }
// // может этот компонент и не нужен вообще
// const Input = props => {
//     const inputType = props.type || 'text' || 'number'
//     const htmlFor = `${inputType}-${Math.random()}`

//     if (isInvalid(props)) {
//     }

//     return (
//         <div>
//             <label htmlFor={htmlFor}>{props.label}</label>
//             <input
//                 type={inputType}
//                 id={htmlFor}
//                 // value={props.value}
//                 // onChange={props.onChange}
//             />

//     {
//         isInvalid(props)
//         ? <span>{props.errorMessage || 'Введите значение'}</span>
//         : null
//     }
//         </div>
//     )
// }

// export default Input