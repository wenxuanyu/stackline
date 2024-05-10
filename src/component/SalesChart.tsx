import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useSelector } from 'react-redux';

interface SalesData {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

interface State {
  data: {
    data: { sales: SalesData[] }[];
  };
}

const SalesChart: React.FC = () => {
  const salesData = useSelector((state: State) => state.data.data[0].sales);

  const retailSalesData = salesData.map(data => ({
    x: Date.parse(data.weekEnding),
    y: data.retailSales
  }));

  const wholesaleSales = salesData.map(data => ({
    x: Date.parse(data.weekEnding),
    y: data.wholesaleSales
  }));

  const unitsSoldData = salesData.map(data => ({
    x: Date.parse(data.weekEnding),
    y: data.unitsSold
  }));

  const retailerMarginData = salesData.map(data => ({
    x: Date.parse(data.weekEnding),
    y: data.retailerMargin
  }));

  const options: Highcharts.Options = {
    title: {
      text: 'Sales Data'
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Date'
      }
    },
    yAxis: [{
      title: {
        text: 'Retail Sales'
      }
    }, {
      title: {
        text: 'Wholesale Sales'
      },
      opposite: true
    }, {
      title: {
        text: 'Units Sold'
      }
    }, {
      title: {
        text: 'Retailer Margin',
      }
    }],
    series: [{
      name: 'Retail Sales',
      data: retailSalesData,
      type: 'line',
      yAxis: 0
    }, {
      name: 'Wholesale Sales',
      data: wholesaleSales,
      type: 'line',
      yAxis: 1
    }, {
      name: 'Units Sold',
      data: unitsSoldData,
      type: 'line',
      yAxis: 2
    }, {
      name: 'Retailer Margin',
      data: retailerMarginData,
      type: 'line',
      yAxis: 3
    }],
    credits: {
      enabled: false
    }
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default SalesChart;
