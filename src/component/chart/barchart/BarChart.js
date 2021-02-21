import React, { useContext, useState } from "react"
import { DataContext } from "../../../context/DataContext"
import { Bar } from 'react-chartjs-2';

const BarChart = (props) => {
    let positif = props.positif
    let positifs = positif.replace(",","")
    let positifr = positifs.replace(",","")
    let meninggal = props.meninggal
    let meninggals = meninggal.replace(",","")
    let meninggalr = meninggals.replace(",","")
    let sembuh = props.sembuh
    let sembuhs = sembuh.replace(",","")
    let sembuhr = sembuhs.replace(",","")

    const [data, ] = useContext(DataContext)
    console.log(data)

    const [barData, ] = useState({
        labels: [ 'Positif', 'meninggal', 'sembuh'],
        datasets: [

            {
                label: 'Data Covid',
                data: [
                    positifr,
                    meninggalr,
                    sembuhr,
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderWidth: 1
            },
        ]
    });
    return(
        <>
            <div>
            <Bar
                data={barData}
                width={50}
                height={200}
                base={10}
                options={{
                    layout: {
                        margin: {
                            left: 50,
                            right: 0,
                            top: 0,
                            bottom: 500
                        }
                    },
                    title: {
                        display: true,
                        text: 'Data Orgranized In Bars',
                        fontSize: 10
                    }, 
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        onClick: (e) => e.stopPropagation(),
                        
                    },
                    scales:{
                        yAxes:[{
                          ticks:{
                            suggestedMin:1,
                            beginAtZero:true,
                            userCallback: function(value, index, values) {
                                value = value.toString();
                                value = value.split(/(?=(?:...)*$)/);
                                value = value.join(',');
                                return value;
                            }
                          }
                        }]
                      },  
                    skipNull: true
                }}
            />
            </div>
        </>
    )
}

export default BarChart