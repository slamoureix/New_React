import React from 'react';

import Links from './components/Link/Links';

export function useLinksCreate(ArrLinks) {
        let arrLinks = []
        
        for (let name of Object.keys(ArrLinks)) {
        let L = ArrLinks[name];
        let link = 
        <Links 

        key = {L.name}
        path={L.path} 
        name={L.name} 
        type={L.type}
        typeofLink = {L.typeofLink}
        

        target={L.target} 
        anchor={L.anchor} 

        rep={L.rep}
        cover={L.cover}
        />
        arrLinks.push(link)
        }
        
        return arrLinks
}

