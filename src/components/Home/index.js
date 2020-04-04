import React, { useEffect, useState } from 'react';
import Tabs from './components/Tabs'
import { api } from '../../utils/request'
import { Box } from './styles'
import Content from './components/Content';

export default function Home() {
    let activeTab;
    const [marcas, setMarcas ] = useState([])
    const [selectedTab, setSelectedTab] = useState('')
    const TABS = [
        {
            id: '1',
            tabName: 'carros',
            tabIcon: 'ic_directions_car'
        },
        {
            id: '2',
            tabName: 'motos',
            tabIcon: 'ic_motorcycle'
        }
    ]

    useEffect(()=> {
        getMarcas()
    },[])
    
    function getMarcas(){
        let url = '/api/OnlineChallenge/Make'

        api.get(url)
        .then(({data}) => {
            setMarcas(data)
            console.log(data)
        })
        .catch(err => console.log('Erro get marcas', err))
    }

    const selectTab = event => {
        let show = event.target.id
        setSelectedTab(show)
    }

    return (
        <Box>
            {TABS.map(tab => (
                <Tabs
                    tabName={tab.tabName}
                    tabIcon={tab.tabIcon}
                    id={tab.id}
                    selectTab={selectTab}
                    activeTab={activeTab}
                />     
            ))}
            <Content
                selected={selectedTab}
            />
        </Box>
    );
}
