import React from 'react';
import './Latest.css'; // Optional: only if you're using external styling

function Latest() {
  return (
    <div className="latest-container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <img
        src="/rain.jpg"
        alt="Heavy rain and strong wind"
        style={{ width: '100%', borderRadius: '8px', marginBottom: '1rem' }}
      />
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
        Heavy rain, strong wind to lash upper North Island from Wednesday
      </h1>
      <p style={{ fontStyle: 'italic', marginBottom: '2rem' }}>
        By 1News Reporters – Mon, Apr 14
      </p>

      <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
        <p>Heavy rain and severe gales are expected to lash the upper North Island from Wednesday as a deep subtropical low approaches the country.</p>
        <p>MetService has issued a range of heavy rain and strong wind watches for Wednesday and Thursday in Northland, Auckland and the Coromandel Peninsula.</p>
        <p>Rain is expected to hit these regions from Wednesday morning (Northland) and midday (Auckland, Great Barrier, Coromandel Peninsula), while strong winds are forecast to begin from Wednesday afternoon (Northland) and evening (Auckland and Great Barrier).</p>
        <p>Streams and rivers could rise rapidly with surface flooding, slips, and difficult driving conditions possible in the rainfall, MetService said.</p>
        <p>For Auckland, amounts may approach warning criteria north of the Harbour Bridge and around the Hunua Ranges.</p>
        <p>The forecaster also said the strong easterly winds may damage trees, powerlines and unsecured structures.</p>
        <p>"Driving may be difficult, especially for high-sided vehicles and motorcycles."</p>
        <p>All watches, apart from a heavy rain watch for Auckland, have a high chance of being upgraded to a warning.</p>
        <p>MetService meteorologist Katie Hillyer said the system was "long-lived" and that rainfall accumulations were expected to be "impressive".</p>
        <p>"Try to take some time before the action starts to clear those gutters and drains and any surrounding leaves that could cause any blockages. With very few systems with this magnitude of northeast winds in the last year, trees could be particularly susceptible to damage, so trimming back branches and securing any loose objects is also a good idea."</p>
        <p>Residents are encouraged to stay up to date with the latest forecasts.</p>

        <p><strong>'Punchy' cold front moving up the South Island</strong></p>
        <p>A "punchy" cold front with a period of heavy rain moves up the South Island today, lowering snow to 900m and triggering a road snowfall warning for one alpine pass.</p>
        <p>Hillyer said maximum temperatures on Tuesday were expected to drop by 10°C compared to Monday.</p>
        <p>"It's a real cold snap," she said.</p>
        <p>Lindis Pass, which carries State Highway 8 over the Southern Alps, could see 1 to 2 cm of snow settling on the road near the summit on Tuesday morning.</p>

        <p><strong>Heavy rain watches</strong></p>
        <ul>
          <li>Northland - 33 hours from 6am Wednesday</li>
          <li>Auckland and Great Barrier Island - 39 hours from midday Wednesday</li>
          <li>Coromandel Peninsula - 48 hours from midday Wednesday</li>
        </ul>

        <p><strong>Strong wind watches</strong></p>
        <ul>
          <li>Northland - 27 hours from 3pm Wednesday</li>
          <li>Auckland and Great Barrier Island - 30 hours from 9pm Wednesday</li>
        </ul>
      </div>
    </div>
  );
}

export default Latest;
