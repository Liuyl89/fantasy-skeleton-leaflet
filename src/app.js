import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import L from 'leaflet'
class MapComponent extends React.Component {
    componentDidMount() {
        this.map = L.map(this.dom).setView([51.505, -0.09], 13)

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map)

    }

    render() {
        return (
            <div className="jumbotron">
                <p>这是一个地图示例</p>
                <div style={{width: '100%', height: '400px'}} ref={(dom) => {
                    this.dom = dom
                }}/>
            </div>
        )
    }
}
const Home = () => {
    return (
        <div className="jumbotron">
            <h1>欢迎使用</h1>
            <p>fantasy-skeleton-leaflet 是一个开发骨架，集成了Leaflet、webpack、bootstrap和React，祝你好运~</p>
            <p><a className="btn btn-primary btn-lg" target="_blank"
                href="https://github.com/Liuyl89/fantasy-skeleton-leaflet" role="button">前往Github</a></p>
        </div>
    )
}

const ListItemLink = ({label, to, activeOnlyWhenExact}) => (
    <Route path={to} exact={activeOnlyWhenExact == 'true'} children={({match}) => (
        <li role="presentation" className={match ? 'active' : ''}>
            <Link to={to}>{label}</Link>
        </li>
    )}/>
)

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/fantasy-skeleton-leaflet">
                <div>
                    <ul className="nav nav-tabs">
                        <ListItemLink to="/" label="Home" activeOnlyWhenExact="true"/>
                        <ListItemLink to="/map" label="Map" activeOnlyWhenExact="true"/>
                    </ul>
                    <Route path='/' exact component={Home}/>
                    <Route path='/map' component={MapComponent}/>
                </div>
            </BrowserRouter>
        )

    }
}