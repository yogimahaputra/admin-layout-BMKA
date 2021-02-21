import React, {  useState } from "react"
import { Line } from 'react-chartjs-2';
const LineChart = (props) => {

    let positif = props.positif
    let positifs = positif.replace(",","")
    let positifr = positifs.replace(",","")
    let meninggal = props.meninggal
    let meninggals = meninggal.replace(",","")
    let meninggalr = meninggals.replace(",","")
    let sembuh = props.sembuh
    let sembuhs = sembuh.replace(",","")
    let sembuhr = sembuhs.replace(",","")

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
            <Line
                data={barData}
                width={100}
                height={200}
                base={10}
                options={{ 
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: {
                        onClick: (e) => e.stopPropagation()
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

export default LineChart