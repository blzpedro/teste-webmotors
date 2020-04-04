import React, { useEffect, useState } from 'react';
import Tabs from './components/Tabs'
import { api } from '../../utils/request'
import { Box, EndButton } from './styles'
import Content from './components/Content';

export default function Home() {
    const [marcas, setMarcas ] = useState([])
    const [selectedTab, setSelectedTab] = useState('')
    // const [activeTab, setActiveTab] = useState(false)
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

    function selectTab(id){        
        setSelectedTab(id)
        console.log(id)
    }

    return (
        <Box>
            <div style={{display: 'flex'}}>
                {TABS.map(tab => (
                    <Tabs
                    tabName={tab.tabName}
                    tabIcon={tab.tabIcon}
                    id={tab.id}
                    handleTab={() => selectTab(tab.id)}
                    activeTab={selectedTab === tab.id ? '2px solid red' : '2px solid transparent'}
                    />     
                ))}
                <EndButton>
                    <button>
                        Vender meu carro
                    </button>
                </EndButton>
            </div>
            <Content
                selected={selectedTab}
            />
        </Box>
    );
}
