import React, { useContext, useState, useEffect } from "react";
import {DataContext} from '../data/DataProvider';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from "react-bootstrap";

const LiveScore=()=>{
    const value = useContext(DataContext);
    const [navData] = value.metaValue[0];
    const allowedCountries = navData?.allowedCountries;
    const [filterCountries, setFilteredCountries] = useState([]);
    const [filterLeague, setFilteredLeague] = useState();

    const [countries, setCountries] = useState(allowedCountries);
    const [country, setCountry] = useState('England');
    const [league, setLeague] = useState([]);
    const [teamId, setTeamId] = useState(19);
    const [logo, setLogo] = useState(null);
    const [toggleLeftPanel, setToggleLeftPanel] = useState(false);
    const [toggleButton, setToggleButton] = useState(false);
    const [cards, setCards] = useState([]);
    const [season, setSeason] = useState(false);


    const searchHandler=(e)=>{
        let textValue = e.target.value;
        if(textValue !==''){
            setFilteredCountries(countries?.filter((item)=>
                item.name.toLowerCase().indexOf(textValue.toLowerCase()) >-1
            ))
        } else {
            setFilteredCountries(countries);
        }
    }
    
    const selectedCountry=(name, id)=>{
        setCountry(name);
        setTeamId(id);
        setToggleLeftPanel(prev=>!prev);
        setToggleButton(prev=>!prev);
    }

    const backHandler=()=>{
        setToggleLeftPanel(prev=>!prev);
        setToggleButton(prev=>!prev);
        setFilteredCountries(countries);
        setLeague(league);
    }
    const selectLeague=(leagueName)=>{
        // const filt = league.filter((item)=>item.competition_name === leagueName)
        // console.log('filt', filt);
        setFilteredLeague(league.filter((item)=>item.competition_name === leagueName));
    }

    useEffect(()=>{ 
        if(allowedCountries){
            fetch("https://livescore-api.com/api-client/countries/list.json?&key=n02wwRHuy7UxvTbE&secret=cPJ3DbgZhS5fUsahscOZ4vtDDoa8hmMu")
            .then(res=>res.json())
            .then(resp=>{
                setCountries(resp.data.country.filter((item)=>allowedCountries && allowedCountries.includes(item.name)));
            }); 
        }
    },[allowedCountries])



    useEffect(()=>{
        fetch("https://livescore-api.com/api-client/scores/live.json?&key=n02wwRHuy7UxvTbE&secret=cPJ3DbgZhS5fUsahscOZ4vtDDoa8hmMu")
        .then(res=>res.json())
        .then(resp=>setLeague(resp.data.match.filter((item)=>item.country?.name===country)))
    },[country])

    useEffect(()=>{
        fetch(`https://livescore-api.com/api-client/countries/flag.json?country_id=${teamId}&key=n02wwRHuy7UxvTbE&secret=cPJ3DbgZhS5fUsahscOZ4vtDDoa8hmMu`)
        .then(resp=>{
            setLogo(resp.url)
        })
    },[teamId])


    return(
        <div className="score">
            <div className="left-nav">
            {!toggleButton && 
            <Form>
                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" autocomplete="new-password" placeholder="Search..." onChange={searchHandler} />
                </Form.Group>
            </Form>
            }
            {toggleButton && 
            <Form>
                <Form.Group className="mb-1 button" controlId="exampleForm.ControlInput1" onClick={backHandler} >
                    <Button variant="secondary"> <span>{'<'} </span>{ country}</Button>{' '}
                </Form.Group>
            </Form>
            }
            
            {!toggleLeftPanel &&
            <div className="navBar">
                {filterCountries.length ? 
                    filterCountries?.map((item) => (
                        <Navbar bg="dark" key={item.id}>
                                <Navbar.Brand onClick={()=>selectedCountry(item.name, item.id)}>{item.name}</Navbar.Brand>
                            </Navbar>
                    )) : 
                    countries?.map((item)=>(
                        <Navbar bg="dark" key={item.id}>
                            <Navbar.Brand onClick={()=>selectedCountry(item.name, item.id)}>{item.name}</Navbar.Brand>
                        </Navbar>
                    ))
                }
            </div>
            }

            {toggleLeftPanel && 
            <div className="navBar">
                {league &&
                    [...new Set(league.map((item) => item.competition_name))].map((competitionName, index) => (
                        <Navbar bg="dark" key={index}>
                        <Navbar.Brand onClick={()=>selectLeague(competitionName)}>{competitionName}</Navbar.Brand>
                        </Navbar>
                ))}
            </div>
            }

            
            
            {/* {filterCountries.length ? 
                filterCountries?.map((item) => (
                    <Accordion key={item.id} onClick={()=>selectedCountry(item.name, item.id)}>
                        <Accordion.Header>{item.name}</Accordion.Header>
                        {league?.map((item) => (
                            <Accordion.Body key={item.id} onClick={()=>selectLeague(item.competition_name)}>
                                {item.competition_name}
                            </Accordion.Body>
                        ))}
                    </Accordion>
                )) : 
                countries?.map((item) => (
                    <Accordion key={item.id} onClick={()=>selectedCountry(item.name, item.id)}>
                        <Accordion.Header>{item.name}</Accordion.Header>
                        {league?.map((item) => (
                            <Accordion.Body key={item.id} onClick={()=>selectLeague(item.id)}>
                                {item.competition_name}
                            </Accordion.Body>
                        ))}
                    </Accordion>
                ))
                } */}
            </div>
                --{filterLeague && filterLeague.length ? 'filtered': 'no'}
            <div className="right-content">
                <Table hover>
                    {filterLeague?.length ? 
                    filterLeague?.map((item)=>(
                        <>
                        <thead>
                            <tr>
                                <th>
                                    <img src={logo} width={30}/>
                                </th>
                                <th>{item.competition_name}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={2}>{item.status}</td>
                                <td>{item.home_name}</td>
                                <td>{item.score.split('-')[0]}</td>
                            </tr>
                            <tr>
                                <td>{item.away_name}</td>
                                <td>{item.score.split('-')[1]}</td>
                            </tr>
                            {/* <tr>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            </tr> */}
                        </tbody>
                        </>
                    )) :
                    
                    league?.map((item)=>(
                        <>
                        <thead>
                            <tr>
                                <th>
                                    <img src={logo} width={30}/>
                                </th>
                                <th>{item.competition_name}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={2}>{item.status}</td>
                                <td>{item.home_name}</td>
                                <td>{item.score.split('-')[0]}</td>
                            </tr>
                            <tr>
                                <td>{item.away_name}</td>
                                <td>{item.score.split('-')[1]}</td>
                            </tr>
                            {/* <tr>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            </tr> */}
                        </tbody>
                        </>
                    ))}
                    
                    
                </Table>
                {/* {cards.map((item)=>(
                    <>
                    <Card style={{ width: '18rem' }}  key={item.country} >
                        <Card.Img variant="top" src={item.image} height={200}/>
                        <Card.Body>
                            <Card.Title>{item.country}</Card.Title>
                            <Card.Text>
                            League: {item.name}
                            </Card.Text>
                            <Button variant="primary" onClick={()=>setSeason(!season)}>Seasons</Button>
                        </Card.Body>
                    </Card>
                    { season && 
                        item.season.map((item)=>(
                            <Button variant="outline-primary" className="m-1">{item.year}</Button>
                        ))
                    }
                    </>
                ))} */}
            </div>

        </div>
    )
}

export default LiveScore;