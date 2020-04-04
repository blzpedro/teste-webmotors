import React from 'react';
import { TabsInline } from '../styles'
import { Icon } from 'react-icons-kit'
import {ic_directions_car} from 'react-icons-kit/md/ic_directions_car'
import {ic_motorcycle} from 'react-icons-kit/md/ic_motorcycle'

export default function Tabs({tabName, id, handleTab, activeTab}) {
    let tabIcon;
    if(tabName === 'carros'){
        tabIcon = ic_directions_car
    } else {
        tabIcon = ic_motorcycle
    }

    return (
        <TabsInline>
            <button id={id} onClick={handleTab} style={{borderBottom: activeTab}}>
                <Icon icon={tabIcon} size={48}/>
                <p>
                    COMPRAR<br/>
                    <span>{tabName}</span>
                </p>
            </button>
        </TabsInline>
    );
}
