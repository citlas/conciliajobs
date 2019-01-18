import React, { Component } from 'react';
import Head from '../Head/'
import Listado from '../Listado/'
import firebase from 'firebase';
import db from '../FirestoreConfig'



class Home extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            items:[]
        }
        this.loadData = this.loadData.bind(this);
        this.getJobDate = this.getJobDate.bind(this);

      }

      

    componentDidMount() {
        this.loadData()
        console.log('comp did mount ', this.state.items)
      }
      componentDidUpdate() {
        // can use any refs here
        //console.log(this.state.items[0].Ciudad)
        console.log('comp did update ', this.state.items)
        //console.log('comp did update un dato', this.state.items[0].ciudad)
        var fechaok = this.state.items[0].fecha.seconds
        console.log('fechaok ', fechaok)
        var date = new Date(fechaok*1000);
        console.log('fecha es', new Date(this.state.items[0].fecha.seconds*1000))
      }

      loadData(){
        db.collection('puestos').onSnapshot(snapshot=>{
            const items = []
            snapshot.forEach(item => {
                //items[item.id] = item.data()
                items.push({id: item.id, 
                            ciudad: item.data().Ciudad,
                            descripcion: item.data().descripcion,
                            fecha: item.data().Fecha,
                            titulo: item.data().titulo
                            })
            })
            return this.setState({items})
            /*this.setState({
                items: snapshot.docs.map( doc =>{
                    console.log(doc.data())
                    return {id: doc.id, data: doc.data()}
                })
            })*/
        }, error => {
             console.log(error)
        });  
      }
      getJobDate(key){
        var fechaok = this.state.items[key].fecha.seconds
        console.log('fechaok ', fechaok)
        var date = new Date(fechaok*1000);
        var day =date.getDate();
        var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var month = months_arr[date.getMonth()]
        var dayMonth = day + ' ' + month
        return dayMonth
        //console.log('fecha es', new Date(this.state.items[item].fecha.seconds*1000))
      }
  
  render() {
      const {items} = this.state;
      

    return (
        <div className="home">
          
           <Head />
           <p>Estas buscando un trabajo que te deje tiempo para ti y los tuyos? Mira lo que hemos encontrado para ti!</p>
           <Listado />
           <table>
               <thead>
               <tr>
                   <th>Ciudad</th>
                   <th>Descripción</th>
                   <th>Fecha</th>
                   <th>Titulo</th>
               </tr>
               </thead>
               <tbody>
                   
                   {items && items !== undefined ? items.map((item, key) => (
                       <tr key={key}>
                       <td>{this.state.items[key].ciudad}</td>  
                       <td>{this.state.items[key].descripcion}</td>
                       <td>{this.getJobDate(key)}</td>
                       <td>{this.state.items[key].titulo}</td>

                       </tr>
                   )) : null } 
               </tbody>
           </table>
        </div>

        
    
    );
  }
}

export default Home;