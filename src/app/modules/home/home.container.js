import React, { useEffect, useState } from 'react';
import { getUptime } from '../../services/health';
import HomeComponent from './home.component';

function HomeContainer() {
  const initialLastDeploy = new Date(process.env.NEXT_PUBLIC_LAST_UPDATE).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });
  const [lastDeploy] = useState(initialLastDeploy);
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
    <HomeComponent lastDeploy={lastDeploy} uptime={uptime} />
  );
}

export default HomeContainer;
