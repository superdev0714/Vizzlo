import React from 'react';
import { Bar, Pie, ChartComponentProps } from 'react-chartjs-2';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'chartjs-plugin-datalabels';

export interface TestDriveProps {
}

export interface TestDriveState {
  chartData: ChartComponentProps
}


export default class TestDrive extends React.Component<TestDriveProps, TestDriveState> {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        data: {
          labels: ['Plane ticket', 'Hotel', 'Rental car', 'Dinner', 'Postcards'],
          datasets: [
            {
              label: 'Test Chart',
              backgroundColor: [
                  'rgba(206,79,64,1)',
                  'rgba(91,152,217,1)',
                  'rgba(115,202,116,1)',
                  'rgba(231,195,44,1)',
                  'rgba(141,92,178,1)',
              ],
              data: [268, 199, 49, 112, 3]
            }
          ],
        },
        options: {
          plugins: {
            datalabels: {
              display: true,
              color: 'black',
              align: 'end',
              anchor: 'end',
              offset: 10,
              font: {
                  size: 14,
                  weight: 600
              },
              formatter: function(value, context) {
                  return '€ ' + value;
              }
            }
          }
        }
      }      
    };
  }

  onAdd = () => {
    const { chartData } = this.state
    this.state.chartData.data['labels'].push('testing');
    this.state.chartData.data['datasets'][0]['data'].push(Math.floor(Math.random() * 255));
    this.state.chartData.data['datasets'][0]['backgroundColor'].push(`rgba(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},1)`);
    this.setState({ chartData: this.state.chartData });
  }

  onRemove = () => {
    const { chartData } = this.state
    this.state.chartData.data['labels'].pop();
    this.state.chartData.data['datasets'][0]['data'].pop();
    this.state.chartData.data['datasets'][0]['backgroundColor'].pop();
    this.setState({ chartData: this.state.chartData });
  }

	render() {
		return (
      <div>
        <button onClick={this.onAdd}>Add</button>
        <button onClick={this.onRemove}>Remove</button>
        <Tabs>
          <TabList>
            <Tab>Bar Chart</Tab>
            <Tab>Pie Chart</Tab>
          </TabList>
      
          <TabPanel>
            <Bar key={Math.random()} {...this.state.chartData} />
          </TabPanel>
          <TabPanel>
            <Pie key={Math.random()} {...this.state.chartData} />
          </TabPanel>
        </Tabs>
      </div>
    )
	}
}
