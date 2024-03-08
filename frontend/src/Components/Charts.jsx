import React, { useEffect } from 'react';
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

const Charts = () => {
  useEffect(() => {
    // Initialize the Charts Embed SDK
    const sdk = new ChartsEmbedSDK({
      baseUrl: 'https://charts.mongodb.com/charts-project-0-pevxc',
    });

    // Embed a chart
    const chart = sdk.createChart({
      chartId: '65d19453-abaa-423e-8942-c6ee8818233d',
    });

    // Render the chart into a container
    chart.render(document.getElementById('chart')).catch(() => window.alert('Chart failed to initialize'));

    // Embed a dashboard
    const dashboard = sdk.createDashboard({
      dashboardId: '61d02578-6148-4c87-9cad-1fbaef50a0d3',
    });

    // Render the dashboard into a container
    dashboard.render(document.getElementById('dashboard')).catch(() => window.alert('Dashboard failed to initialize'));
  }, []);

  return (
    <div>
    
    {/* MongoDB Charts embedded using iframe */}
    <iframe
      style={{
        background: '#21313C',
        border: 'none',
        borderRadius: '2px',
        boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
      }}
      width="640"
      height="480"
      src="https://charts.mongodb.com/charts-project-0-pevxc/embed/charts?id=65d19453-abaa-423e-8942-c6ee8818233d&maxDataAge=3600&theme=dark&autoRefresh=true"
    ></iframe>
  </div>
  );
};

export default Charts;
