import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import { useState, useEffect } from 'react';

const AnalyticsChart = () => {
  const generateRandomData = () => {
    return Array.from({ length: 12 }, (_, i) => {
      const baseValue = 1000 + i * 300;
      const randomVariation = Math.random() * 500 - 250;
      return Math.round(baseValue + randomVariation);
    });
  };

  const [series, setSeries] = useState([
    {
      name: 'Views',
      data: generateRandomData(),
    },
    {
      name: 'Clicks',
      data: generateRandomData().map((val) => Math.round(val * 0.6)),
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeries([
        {
          name: 'Views',
          data: generateRandomData(),
        },
        {
          name: 'Clicks',
          data: generateRandomData().map((val) => Math.round(val * 0.6)),
        },
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const options: ApexOptions = {
    chart: {
      type: 'line',
      toolbar: {
        show: false,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
      background: 'transparent',
    },
    stroke: {
      curve: 'monotoneCubic',
      width: 2,
    },
    colors: ['#3B82F6', '#10B981'],
    grid: {
      show: false,
    },
    xaxis: {
      categories: Array.from({ length: 12 }, (_, i) => i + 1),
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#6B7280',
        },
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: 'dark',
      x: {
        show: false,
      },
    },
    markers: {
      size: 0,
      hover: {
        size: 5,
      },
    },
  };

  return (
    <div className="w-full bg-black rounded-lg">
      <div className="relative">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height={450}
        />
      </div>
    </div>
  );
};

export default AnalyticsChart;
