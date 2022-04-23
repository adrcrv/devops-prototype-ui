import React, { useEffect, useState } from 'react';
import { getUptime } from '../../services/health';
import HomeComponent from './home.component';

function HomeContainer() {
  const initialLastUpdate = new Date(process.env.NEXT_PUBLIC_LAST_UPDATE).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  const [lastUpdate] = useState(initialLastUpdate);
  const [uptime, setUptime] = useState('Loading...');

  const liveUptimeHandler = () => {
    const newUptime = getUptime();
    setUptime(newUptime);
  };

  useEffect(() => {
    const interval = setInterval(liveUptimeHandler, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <HomeComponent lastUpdate={lastUpdate} uptime={uptime} />
  );
}

export default HomeContainer;
