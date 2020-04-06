import React, { useEffect, useState } from 'react';
import Tabs from './components/Tabs'
import { api } from '../../utils/request'
import { Box, EndButton, Ofertas } from './styles'
import Content from './components/Content';
import Vehicles from './components/Vehicles';

export default function Home() {
    const [marcas, setMarcas ] = useState([])
    const [marca, setMarca] = useState('')
    const [modelos, setModelos] = useState([])
    const [modelo, setModelo] = useState('')
    const [versoes, setVersoes] = useState([])
    const [versao, setVersao] = useState('')
    const [vehicles, setVehicles] = useState([])
    const [vehiclesFilter, setVehiclesFilter] = useState([])
    //eslint-disable-next-line
    const [preco, setPreco] = useState('')
    const [selectedTab, setSelectedTab] = useState(1)
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
        getVehicles(1)
        getVehicles(2)
        getVehicles(3)
    },[])

    useEffect(()=> {
        getModelos()
        // eslint-disable-next-line
    },[marca])

    useEffect(()=> {
        getVersions()
        // eslint-disable-next-line
    },[modelo])
    

    /////////////////////////////////////////////////// REQUESTS
    function getMarcas(){
        let url = 'api/OnlineChallenge/Make'

        api.get(url)
        .then(({data}) => {
            setMarcas(data)
        })
        .catch(err => console.log('Erro get marcas', err))
    }
    
    function getModelos(){
        let url = `api/OnlineChallenge/Model?MakeID=${marca.split('-')[0]}`

        api.get(url)
        .then(({data}) => {
            setModelos(data)
        })
        .catch(err => console.log('Erro get modelos', err))
    }
    
    function getVersions(){
        let url = `api/OnlineChallenge/Version?ModelID=${modelo.split('-')[0]}`

        api.get(url)
        .then(({data}) => {
            setVersoes(data)
        })
        .catch(err => console.log('Erro get versões', err))
    }

    function getVehicles(page){
        let url = `api/OnlineChallenge/Vehicles?Page=${page}`

        api.get(url)
        .then(({data}) => {
            setVehicles((prevState) => [...prevState, ...data])
        })
        .catch(err => console.log('Erro get vehicles', err))
    }
    
    /////////////////////////////////////////////////// EVENTS
    function selectTab(id){        
        setSelectedTab(id)
    }

    function clearInput(id){
        document.getElementById(id).value = '';
    }

    const chooseMarca = event => {
        setMarca(event.target.value);
        setModelo('');
    }

    const chooseModelo = event => {
        setModelo(event.target.value);
        setVersao('');
    }

    const chooseVersao = event => {
        setVersao(event.target.value);
    }

    const choosePreco = event => {
        setPreco(event.target.value);
    }

    let filter = [];
    function filterByValue() {
        document.getElementById('displayOfertas').style.display = 'block'
        if(marca.length > 0 && modelo.length > 0 && versao.length){
            filter = vehicles.filter(function (data) {
                return JSON.stringify(data).toLowerCase().indexOf(
                    marca.split('-')[1].toLowerCase() && 
                    modelo.split('-')[1].toLowerCase() && 
                    versao.split('-')[1].toLowerCase()) !== -1;
            })
        } else if(marca.length > 0 && modelo.length > 0){
            filter = vehicles.filter(function (data) {
                return JSON.stringify(data).toLowerCase().indexOf(
                    marca.split('-')[1].toLowerCase() && 
                    modelo.split('-')[1].toLowerCase()) !== -1;
            })
        } else if(marca.length > 0){
            filter = vehicles.filter(function (data) {
                return JSON.stringify(data).toLowerCase().indexOf(marca.split('-')[1].toLowerCase()) !== -1
            })
        } 
        if(filter.length > 0){
            setVehiclesFilter(filter)
        } else {
            alert('Opção escolhida não possui ofertas... \nMostrando todas ofertas atuais.')
            setVehiclesFilter(vehicles)
        }
    }    


    /////////////////////////////////////////////////// CREATORS
    let optionsMarcas = [<option value='' disabled selected>Todas</option>];
    marcas.map(marca => (
        optionsMarcas.push(
            <option value={`${marca.ID}-${marca.Name}`}>{marca.Name}</option>
        )
    ))

    let optionsModelos = [<option value='' disabled selected>Todos</option>];
    modelos.map(modelo => (
        optionsModelos.push(
            <option value={`${modelo.ID}-${modelo.Name}`}>{modelo.Name}</option>
        )
    ))

    let optionsVersoes = [<option value='' disabled selected>Todas</option>];
    versoes.map(versao => (
        optionsVersoes.push(
            <option value={`${versao.ID}-${versao.Name}`}>{versao.Name}</option>
        )
    ))

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
                clearInput={value => clearInput(value)}
                optionsMarcas={optionsMarcas}
                chooseMarca={chooseMarca}
                optionsModelos={optionsModelos}
                chooseModelo={chooseModelo}
                optionsVersoes={optionsVersoes}
                chooseVersao={chooseVersao}
                choosePreco={choosePreco}
                verOfertas={() => filterByValue()}
            />
            <Ofertas id="displayOfertas">
                <h2>
                    Ofertas
                </h2>
                {vehiclesFilter.map(vehicle => (
                    <Vehicles
                        id={vehicle.id}
                        marca={vehicle.Make}
                        model={vehicle.Model}
                        version={vehicle.Version}
                        image={vehicle.Image}
                        km={vehicle.KM}
                        price={vehicle.Price}
                        yearModel={vehicle.YearModel}
                        yearFab={vehicle.YearFab}
                        color={vehicle.Color}
                    />
                ))}
            </Ofertas>
        </Box>
    );
}
