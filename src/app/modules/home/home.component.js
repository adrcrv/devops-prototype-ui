import React from 'react';
import Image from 'next/image';
import { string } from 'prop-types';
import styles from './home.module.css';

function HomeComponent({ uptime, lastUpdate }) {
  return (
    <div>
      <FaceComponent uptime={uptime} lastUpdate={lastUpdate} />
      <ShockingPhraseComponent />
    </div>
  );
}

function FaceComponent({ uptime, lastUpdate }) {
  return (
    <div className={styles.faceWrapper}>
      <div>
        <div style={{ textAlign: 'center' }}>
          <h2>Welcome to DevOps TCC</h2>
        </div>
        <div className={styles.faceCardWrapper}>
          <div className={styles.faceCard}>
            <h4>Last Update</h4>
            <p>{lastUpdate}</p>
          </div>
          <div className={styles.faceCard}>
            <h4>Uptime</h4>
            <p>{uptime}</p>
          </div>
          <div className={styles.faceCard}>
            <h4>Random Content</h4>
            <p style={{ fontSize: 24 }}>🤖</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShockingPhraseComponent() {
  return (
    <div className={styles.shockingPhraseWrapper}>
      <div>
        <h2>
          &ldquo;DevOps does deal with automation,
          <br />
          &nbsp;&nbsp;but that’s not its only function.&ldquo;
        </h2>
      </div>
      <div>
        <Image src="/robot.svg" alt="robot" width="400px" height="200px" />
      </div>
    </div>
  );
}

HomeComponent.propTypes = {
  lastUpdate: string.isRequired,
  uptime: string.isRequired,
};

FaceComponent.propTypes = {
  lastUpdate: string.isRequired,
  uptime: string.isRequired,
};

export default HomeComponent;
