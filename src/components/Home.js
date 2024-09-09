import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, Plugin } from 'chart.js';
import 'chart.js/auto';
import './styles.css'; // Ensure this file includes your updated styles

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

// Custom plugin to display percentage below the pie chart
const percentagePlugin = {
  id: 'percentagePlugin',
  afterDatasetsDraw(chart, args, options) {
    const { ctx, chartArea: { bottom, left, right, top, width, height } } = chart;
    const dataset = chart.data.datasets[0];
    const total = dataset.data.reduce((acc, val) => acc + val, 0);
    
    dataset.data.forEach((value, index) => {
      const percentage = ((value / total) * 100).toFixed(2) + '%';
      const meta = chart.getDatasetMeta(0);
      const arc = meta.data[index];
      const { x, y } = arc.getCenterPoint();
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#000000';
      ctx.font = '16px Arial';
      ctx.fillText(percentage, x, y + 20); // Adjust the position below the pie chart
      ctx.restore();
    });
  },
};

const Home = () => {
  const data = {
    labels: ['Cyber Crimes', 'Theft', 'Other Crimes', 'Robbery', 'Assault'],
    datasets: [
      {
        data: [40, 15, 15, 20, 10],
        backgroundColor: ['#ff6f61', '#ffa726', '#66bb6a', '#42a5f5', '#ab47bc'],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const percentage = tooltipItem.raw;
            return `${tooltipItem.label}: ${percentage}%`;
          },
        },
      },
    },
  };

  return (
    <div className="home-container">
      {/* Awareness Module */}
      <div className="awareness-module-card">
        <h4>Awareness</h4>
        <p>Be informed and prepared to stay safe in different situations. Learn self-defense techniques, understand local laws, and get important safety tips.</p>
        <button className="module-button">Learn More</button>
      </div>

      {/* User Profile Section */}
      <div className="user-profile">
        <img src={'/images/womenn.jpg'} className="profile-pic" />
        <h3>Avantika</h3>
      </div>

      <div className="layout-container">
        <div className="circular-layout">
          <div className="center-stat larger-pie-chart">
            <Pie data={data} options={options} plugins={[percentagePlugin]} />
          </div>
        </div>
      </div>

      <div className="law-chatbot">
        <h4>Law Chatbot</h4>
        <button className="module-button">Activate</button>
      </div>
    </div>
  );
};

export default Home;
