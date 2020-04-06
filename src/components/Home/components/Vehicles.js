import React from 'react';
import { VehicleBox } from '../styles'

export default function Vehicles({id, marca, model, version, image, km, price, yearModel, yearFab, color, loading}) {

    if(loading){
        return <h1>Carregando veículos.</h1>
    }

    return (
        <VehicleBox>
            <div className="infosOfertas">
                <p>Marca: {marca}</p>
                <p>Modelo: {model}</p>
                <p>Versão: {version}</p>
                <p>Preço: R$ {price}</p>
                <p>Ano do modelo: {yearModel}</p>
            </div>
            <img src={image}/>
        </VehicleBox>
    );
}
