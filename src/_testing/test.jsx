// import JHV from '../assets/JH--V/data.json';



// console.log(JHV.routes.path)
// Array
// export const data = 
//     [{
//         a : 1,
//         b : 'b',
//         c : 'c'
//     },
//     {
//         a : 8,
//         c : 9,
//         v : 'coucou'
//     }
//     ]

// // type Object
// export const data_2 = {
//     a : {
//         a: 1,
//         b: '2',
//         c: '3'
//     },
//     b : {
//         a: 8,
//         c: 9,
//         v: 'coucou'
//     }
// }

// let result = JSON.stringify(DataProjet)

// console.log(result)

// function ArrayTesting(data){
//     console.log(data)
//     data.map((value) => console.log(value))
// }

// function ArrayTestingObject(data){
//     console.log(data)
//     for (const key in data) {
//         if (Object.hasOwnProperty.call(data, key)) {
//             const element = data[key];
//             console.log(element)
//         }
//     }
// }

// ArrayTesting(data)
// ArrayTestingObject(data_2);


// import React, {
//     useState
// } from 'react'

// // datas 
// import {
//     default as nameProject
// } from './data.js';

// import {
//     CreateImageGrid
// } from '../../scripts/CreateImageGrid';
// import Nav from '../../components/Navigation/Navigation';

// import {
//     useSelector
// } from 'react-redux';


// export default function Developement() {
//     const [DatasImgState] = useState(nameProject.img.content);

//     const ProjectsRoutes = useSelector(({
//         AllRoutesReducer
//     }) => ({
//         ...AllRoutesReducer.RoutesReducer.Projects
//     }));

//     return ( <
//         article className = {
//             `${nameProject.rep}__project_container`
//         } >
//         <
//         section className = {
//             `${nameProject.rep}__presentation`
//         } >
//         <
//         div className = {
//             `${nameProject.rep}__title`
//         } > < h1 > {
//             nameProject.name
//         } < /h1></div >
//         <
//         div className = {
//             `${nameProject.rep}__year`
//         } > < p > {
//             nameProject.year
//         } < /p></div >
//         <
//         div className = {
//             `${nameProject.rep}__type`
//         } > < p > < strong > {
//             nameProject.type
//         } < /strong></p > < /div> <
//         div className = {
//             `${nameProject.rep}__content`
//         } >
//         <
//         p > {
//             nameProject.content
//         } < /p></div >
//         <
//         /section> <
//         section className = {
//             `${nameProject.rep}__grid`
//         } > {
//             CreateImageGrid(DatasImgState, nameProject.rep)
//         } < /section> <
//         Nav rep = {
//             nameProject.rep
//         }
//         routes = {
//             ProjectsRoutes
//         }
//         /> <
//         /article>
//     )
// }