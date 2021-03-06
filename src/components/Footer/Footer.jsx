import React, { useRef} from 'react';

import { useSelector } from 'react-redux';
import { useLinksCreate } from '../../uselinksCreate';


export default function Footer() {

const LinkSocial = useSelector(state => ({
    ...state.AllRoutesReducer.RoutesReducer.Social
}));

const LinkLegals = useSelector(state => ({
    ...state.AllRoutesReducer.RoutesReducer.Legals
}));

const navSocial = useRef();


    return (
        <footer>
            <nav ref={navSocial} className= "NavSocial" >
            <div className="svg_box">
                <svg viewBox="0 0 192 192">
                    <path strokeWidth= "1.6249" d="M22.7143 35.7123C9.18109 52.1509 1 73.1006 1 95.9618"/>
                    <path strokeWidth= "1.6249" d="M90.4567 16.2153C75.0885 17.2858 60.9436 22.7143 49.1689 31.3542"/>
                    <path strokeWidth= "3.2497" d="M40.9114 28.5251C30.5895 36.9356 22.2555 47.6398 16.5975 59.8732"/>
                    <path strokeWidth= "1.6249" d="M154.223 170.968C167.756 160.493 178.308 146.425 184.654 130.215"/>
                    <path strokeWidth= "1.6249" d="M191 95.9618C191 79.4467 186.718 63.9256 179.149 50.3924"/>
                    <path strokeWidth= "1.6249" d="M145.813 15.2978C131.286 6.1992 114.235 1 95.9617 1"/>
                    <path strokeWidth= "1.6249" d="M8.79871 133.732C16.3681 151.165 28.9074 165.845 44.7343 176.014C59.4909 185.495 77.1528 191.076 96.0381 191.076"/>
                    <path strokeWidth= "3.2497" d="M166.763 45.1167C150.936 23.0201 125.093 8.72229 96.0382 8.72229"/>
                    <path strokeWidth= "3.2497" d="M171.732 138.779C179.149 126.163 183.354 111.559 183.354 96.0382"/>
                    <path strokeWidth= "3.2497" d="M95.9617 183.278C108.348 183.278 120.199 180.525 130.827 175.555"/>
                    <path strokeWidth= "3.2497" d="M16.4446 131.897C23.7846 148.03 35.8651 161.487 50.9275 170.662"/>
                    <path strokeWidth= "1.6249" d="M173.109 74.5533C167.986 56.2797 156.594 40.6056 141.302 30.1308"/>
                    <path strokeWidth= "1.6249" d="M145.966 158.429C155.141 151.089 162.71 141.684 167.909 131.056"/>
                    <path strokeWidth= "1.6249" d="M76.5413 173.491C82.7344 175.173 89.3099 176.014 95.9618 176.014C103.913 176.014 111.559 174.791 118.746 172.497" />
                    <path strokeWidth= "1.6249" d="M16.9034 108.119C19.2737 123.41 26.002 137.326 35.7888 148.489"/>
                    <path strokeWidth= "1.6249" d="M25.6961 58.1147C22.179 64.4608 19.503 71.3421 17.8973 78.6056"/>
                </svg>
            </div>
                <ul>
                    {useLinksCreate(LinkSocial)}
                </ul>
            </nav>
            <div className="copyright">
                ?? Design & D??veloppement - Tous droits r??serv??s - <strong> Sebastien Lamoureix </strong> /
                <ul>{useLinksCreate(LinkLegals)} </ul>
            </div>
        </footer>
    )
}
