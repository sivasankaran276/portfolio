/**
 * Sorna A — Engineering Portfolio
 * Restrained Technical SVG Compositions for Project Cards
 *
 * Replaces generic stock photography with authentic, discipline-accurate
 * engineering diagrams and telemetry schematics.
 */

export function TremorIllustration() {
  return (
    <svg
      viewBox="0 0 540 180"
      className="project-schematic-svg"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="MPU9250 9-axis IMU tremor waveform and kinematic analysis schematic"
    >
      <defs>
        <pattern id="grid-tremor" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E3DA" strokeWidth="0.6" strokeDasharray="1 3" />
        </pattern>
      </defs>

      {/* Grid Background */}
      <rect width="100%" height="100%" fill="url(#grid-tremor)" opacity="0.65" />

      {/* Baseline Coordinate Axes */}
      <line x1="30" y1="90" x2="510" y2="90" stroke="#E5E3DA" strokeWidth="1" />
      <line x1="60" y1="20" x2="60" y2="160" stroke="#E5E3DA" strokeWidth="1" />

      {/* Time & Amplitude Markers */}
      <text x="65" y="32" fill="#77786F" fontSize="9" fontFamily="var(--font-mono)">+Amp (g / °/s)</text>
      <text x="65" y="152" fill="#77786F" fontSize="9" fontFamily="var(--font-mono)">-Amp</text>
      <text x="470" y="84" fill="#77786F" fontSize="9" fontFamily="var(--font-mono)">Time (t) →</text>

      {/* MPU9250 IMU Sensor Badge */}
      <rect x="75" y="40" width="130" height="28" rx="4" fill="#FAF9F5" stroke="#849477" strokeWidth="1" />
      <text x="140" y="58" textAnchor="middle" fill="#252820" fontSize="10" fontFamily="var(--font-mono)" fontWeight="500">
        MPU9250 [9-AXIS IMU]
      </text>

      {/* Tremor Waveform Trace (4–8 Hz physiological oscillation simulation) */}
      <path
        d="M 60 90 Q 90 90, 110 90 T 140 90 Q 155 45, 170 90 T 185 130 T 200 65 T 215 115 T 230 75 T 245 105 T 260 85 T 275 95 T 290 90 Q 310 90, 330 40 T 350 140 T 370 50 T 390 130 T 410 65 T 430 115 T 450 85 T 470 90 L 510 90"
        fill="none"
        stroke="#849477"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Envelope Dotted Lines */}
      <path
        d="M 140 90 Q 170 35, 200 55 T 260 80 T 330 30 T 370 45 T 450 80 L 470 90"
        fill="none"
        stroke="#95968C"
        strokeWidth="1"
        strokeDasharray="2 2"
      />

      {/* Spectral Peak Callout */}
      <circle cx="350" cy="140" r="3" fill="#849477" />
      <circle cx="370" cy="50" r="3" fill="#849477" />
      <rect x="345" y="15" width="145" height="22" rx="3" fill="#FAF9F5" stroke="#E5E3DA" strokeWidth="1" />
      <text x="417" y="30" textAnchor="middle" fill="#77786F" fontSize="9" fontFamily="var(--font-mono)">
        Tremor Band: 4–8 Hz Spectral Peak
      </text>

      {/* Bottom Technical Tag */}
      <rect x="75" y="130" width="180" height="22" rx="3" fill="#EFEEE6" stroke="#E5E3DA" strokeWidth="1" />
      <text x="165" y="145" textAnchor="middle" fill="#77786F" fontSize="9" fontFamily="var(--font-mono)">
        Wrist Brace Mounted · Inertial Telemetry
      </text>
    </svg>
  )
}

export function EnvironmentalIllustration() {
  return (
    <svg
      viewBox="0 0 540 180"
      className="project-schematic-svg"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Raspberry Pi Pico and sensor telemetry architecture schematic"
    >
      <defs>
        <pattern id="grid-env" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E3DA" strokeWidth="0.6" strokeDasharray="1 3" />
        </pattern>
      </defs>

      {/* Grid Background */}
      <rect width="100%" height="100%" fill="url(#grid-env)" opacity="0.65" />

      {/* Sensor Transducer Nodes (Left) */}
      <g transform="translate(30, 20)">
        <rect width="115" height="34" rx="4" fill="#FAF9F5" stroke="#E5E3DA" strokeWidth="1" />
        <circle cx="15" cy="17" r="4" fill="#849477" />
        <text x="28" y="16" fill="#252820" fontSize="9.5" fontFamily="var(--font-mono)" fontWeight="500">DHT11 SENSOR</text>
        <text x="28" y="27" fill="#77786F" fontSize="8" fontFamily="var(--font-mono)">Ambient Temp &amp; RH</text>
      </g>

      <g transform="translate(30, 72)">
        <rect width="115" height="34" rx="4" fill="#FAF9F5" stroke="#E5E3DA" strokeWidth="1" />
        <circle cx="15" cy="17" r="4" fill="#849477" />
        <text x="28" y="16" fill="#252820" fontSize="9.5" fontFamily="var(--font-mono)" fontWeight="500">MQ-2 DETECTOR</text>
        <text x="28" y="27" fill="#77786F" fontSize="8" fontFamily="var(--font-mono)">Combustible Gas / Smoke</text>
      </g>

      <g transform="translate(30, 124)">
        <rect width="115" height="34" rx="4" fill="#FAF9F5" stroke="#E5E3DA" strokeWidth="1" />
        <circle cx="15" cy="17" r="4" fill="#849477" />
        <text x="28" y="16" fill="#252820" fontSize="9.5" fontFamily="var(--font-mono)" fontWeight="500">RESISTIVE PROBE</text>
        <text x="28" y="27" fill="#77786F" fontSize="8" fontFamily="var(--font-mono)">Soil Moisture Content</text>
      </g>

      {/* Connecting Bus Traces */}
      <path d="M 145 37 L 185 37 L 205 75" fill="none" stroke="#849477" strokeWidth="1.2" />
      <path d="M 145 89 L 205 89" fill="none" stroke="#849477" strokeWidth="1.2" />
      <path d="M 145 141 L 185 141 L 205 103" fill="none" stroke="#849477" strokeWidth="1.2" />

      {/* Processing Core (Center: Raspberry Pi Pico) */}
      <g transform="translate(205, 50)">
        <rect width="125" height="78" rx="6" fill="#FAF9F5" stroke="#849477" strokeWidth="1.5" />
        <rect x="8" y="8" width="109" height="18" rx="3" fill="#EFEEE6" />
        <text x="62" y="21" textAnchor="middle" fill="#252820" fontSize="9.5" fontFamily="var(--font-mono)" fontWeight="600">
          RPi Pico (RP2040)
        </text>
        <text x="62" y="44" textAnchor="middle" fill="#77786F" fontSize="8.5" fontFamily="var(--font-mono)">
          Synchronous ADC
        </text>
        <text x="62" y="58" textAnchor="middle" fill="#77786F" fontSize="8.5" fontFamily="var(--font-mono)">
          GPIO Multichannel In
        </text>
      </g>

      {/* UART Link Trace */}
      <path d="M 330 89 L 365 89" fill="none" stroke="#849477" strokeWidth="1.2" strokeDasharray="3 2" />
      <text x="347" y="82" textAnchor="middle" fill="#95968C" fontSize="7.5" fontFamily="var(--font-mono)">UART</text>

      {/* ESP8266 Wi-Fi Module */}
      <g transform="translate(365, 58)">
        <rect width="65" height="62" rx="4" fill="#FAF9F5" stroke="#E5E3DA" strokeWidth="1" />
        <path d="M 45 15 A 8 8 0 0 1 55 25 M 48 10 A 14 14 0 0 1 60 25" fill="none" stroke="#849477" strokeWidth="1.2" />
        <text x="32" y="30" textAnchor="middle" fill="#252820" fontSize="9" fontFamily="var(--font-mono)" fontWeight="500">ESP8266</text>
        <text x="32" y="44" textAnchor="middle" fill="#77786F" fontSize="7.5" fontFamily="var(--font-mono)">Wi-Fi Link</text>
      </g>

      {/* Wireless Transmission Waves */}
      <path d="M 430 89 L 450 89" fill="none" stroke="#849477" strokeWidth="1.2" strokeDasharray="2 2" />

      {/* LabVIEW Interface Target (Right) */}
      <g transform="translate(450, 48)">
        <rect width="70" height="82" rx="4" fill="#EFEEE6" stroke="#849477" strokeWidth="1" strokeDasharray="2 2" />
        <text x="35" y="24" textAnchor="middle" fill="#252820" fontSize="9" fontFamily="var(--font-mono)" fontWeight="600">LabVIEW</text>
        <text x="35" y="38" textAnchor="middle" fill="#77786F" fontSize="7.5" fontFamily="var(--font-mono)">Virtual Inst.</text>
        <line x1="10" y1="46" x2="60" y2="46" stroke="#E5E3DA" strokeWidth="1" />
        <text x="35" y="59" textAnchor="middle" fill="#849477" fontSize="8" fontFamily="var(--font-mono)">CSV Logging</text>
        <text x="35" y="71" textAnchor="middle" fill="#849477" fontSize="8" fontFamily="var(--font-mono)">Alert Limits</text>
      </g>
    </svg>
  )
}

export function PumpIllustration() {
  return (
    <svg
      viewBox="0 0 540 180"
      className="project-schematic-svg"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="IntelliPump digital-twin pump monitoring telemetry and anomaly scoring schematic"
    >
      <defs>
        <pattern id="grid-pump" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E3DA" strokeWidth="0.6" strokeDasharray="1 3" />
        </pattern>
      </defs>

      {/* Grid Background */}
      <rect width="100%" height="100%" fill="url(#grid-pump)" opacity="0.65" />

      {/* Industrial Pump Silhouette Representation */}
      <g transform="translate(40, 40)">
        <rect x="0" y="30" width="100" height="45" rx="4" fill="#EFEEE6" stroke="#849477" strokeWidth="1.2" />
        <circle cx="50" cy="52" r="16" fill="#FAF9F5" stroke="#849477" strokeWidth="1.2" />
        <circle cx="50" cy="52" r="6" fill="#849477" />
        <line x1="50" y1="15" x2="50" y2="30" stroke="#849477" strokeWidth="2" />
        <rect x="35" y="5" width="30" height="10" fill="#FAF9F5" stroke="#E5E3DA" strokeWidth="1" />
        <text x="50" y="92" textAnchor="middle" fill="#252820" fontSize="9" fontFamily="var(--font-mono)" fontWeight="500">
          Centrifugal Pump
        </text>
      </g>

      {/* Sensor Telemetry Callouts */}
      <g transform="translate(160, 20)">
        <rect width="90" height="26" rx="3" fill="#FAF9F5" stroke="#E5E3DA" strokeWidth="1" />
        <text x="45" y="17" textAnchor="middle" fill="#77786F" fontSize="8.5" fontFamily="var(--font-mono)">
          Vibration (RMS)
        </text>
      </g>
      <g transform="translate(160, 54)">
        <rect width="90" height="26" rx="3" fill="#FAF9F5" stroke="#E5E3DA" strokeWidth="1" />
        <text x="45" y="17" textAnchor="middle" fill="#77786F" fontSize="8.5" fontFamily="var(--font-mono)">
          Casing Temp (°C)
        </text>
      </g>
      <g transform="translate(160, 88)">
        <rect width="90" height="26" rx="3" fill="#FAF9F5" stroke="#E5E3DA" strokeWidth="1" />
        <text x="45" y="17" textAnchor="middle" fill="#77786F" fontSize="8.5" fontFamily="var(--font-mono)">
          Line Voltage (V)
        </text>
      </g>
      <g transform="translate(160, 122)">
        <rect width="90" height="26" rx="3" fill="#FAF9F5" stroke="#E5E3DA" strokeWidth="1" />
        <text x="45" y="17" textAnchor="middle" fill="#77786F" fontSize="8.5" fontFamily="var(--font-mono)">
          Phase Current (I)
        </text>
      </g>

      {/* Connectors to Digital Twin ML Engine */}
      <path d="M 250 33 L 285 70" fill="none" stroke="#849477" strokeWidth="1" />
      <path d="M 250 67 L 285 75" fill="none" stroke="#849477" strokeWidth="1" />
      <path d="M 250 101 L 285 85" fill="none" stroke="#849477" strokeWidth="1" />
      <path d="M 250 135 L 285 90" fill="none" stroke="#849477" strokeWidth="1" />

      {/* Digital Twin ML Engine (Center-Right) */}
      <g transform="translate(285, 45)">
        <rect width="115" height="70" rx="5" fill="#FAF9F5" stroke="#849477" strokeWidth="1.5" />
        <text x="57" y="20" textAnchor="middle" fill="#252820" fontSize="9.5" fontFamily="var(--font-mono)" fontWeight="600">
          DIGITAL TWIN
        </text>
        <line x1="10" y1="28" x2="105" y2="28" stroke="#E5E3DA" strokeWidth="1" />
        <text x="57" y="42" textAnchor="middle" fill="#77786F" fontSize="8" fontFamily="var(--font-mono)">
          ML Health Classifier
        </text>
        <text x="57" y="56" textAnchor="middle" fill="#849477" fontSize="8" fontFamily="var(--font-mono)">
          Anomaly Thresholding
        </text>
      </g>

      {/* Predictive Status Dashboard (Far Right) */}
      <g transform="translate(420, 35)">
        <rect width="95" height="90" rx="4" fill="#EFEEE6" stroke="#E5E3DA" strokeWidth="1" />
        <text x="47" y="20" textAnchor="middle" fill="#252820" fontSize="9" fontFamily="var(--font-mono)" fontWeight="500">
          DIAGNOSTICS
        </text>
        <line x1="8" y1="27" x2="87" y2="27" stroke="#E5E3DA" strokeWidth="1" />
        
        {/* State Indicators */}
        <rect x="12" y="36" width="71" height="16" rx="2" fill="#FAF9F5" stroke="#849477" strokeWidth="0.8" />
        <text x="47" y="47" textAnchor="middle" fill="#849477" fontSize="8" fontFamily="var(--font-mono)">
          State: Nominal
        </text>

        <rect x="12" y="58" width="71" height="16" rx="2" fill="#FAF9F5" stroke="#E5E3DA" strokeWidth="0.8" />
        <text x="47" y="69" textAnchor="middle" fill="#77786F" fontSize="8" fontFamily="var(--font-mono)">
          Degradation: 2.1%
        </text>

        <text x="47" y="87" textAnchor="middle" fill="#95968C" fontSize="7" fontFamily="var(--font-mono)">
          *Hardware In Progress
        </text>
      </g>
    </svg>
  )
}

export function SlamIllustration() {
  return (
    <svg
      viewBox="0 0 540 180"
      className="project-schematic-svg"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="MASt3R-SLAM dense 3D visual odometry and A-Star path planning trajectory schematic"
    >
      <defs>
        <pattern id="grid-slam" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E3DA" strokeWidth="0.6" strokeDasharray="1 3" />
        </pattern>
      </defs>

      {/* Grid Background */}
      <rect width="100%" height="100%" fill="url(#grid-slam)" opacity="0.65" />

      {/* Isometric 3D Space Mesh Lines */}
      <g stroke="#E5E3DA" strokeWidth="0.8" opacity="0.8">
        <line x1="60" y1="130" x2="220" y2="50" />
        <line x1="120" y1="150" x2="280" y2="70" />
        <line x1="180" y1="170" x2="340" y2="90" />

        <line x1="60" y1="130" x2="300" y2="150" />
        <line x1="140" y1="90" x2="380" y2="110" />
        <line x1="220" y1="50" x2="460" y2="70" />
      </g>

      {/* Dense 3D Point Cloud Features (Scattered Spatial Nodes) */}
      <circle cx="150" cy="85" r="2" fill="#849477" opacity="0.8" />
      <circle cx="170" cy="72" r="2" fill="#849477" opacity="0.7" />
      <circle cx="195" cy="95" r="2.5" fill="#849477" />
      <circle cx="215" cy="65" r="2" fill="#849477" opacity="0.9" />
      <circle cx="240" cy="80" r="2" fill="#849477" opacity="0.6" />
      <circle cx="280" cy="60" r="2.5" fill="#849477" />
      <circle cx="310" cy="75" r="2" fill="#849477" opacity="0.8" />
      <circle cx="350" cy="65" r="2" fill="#849477" opacity="0.7" />
      <circle cx="380" cy="90" r="2" fill="#849477" opacity="0.9" />

      {/* Obstacle Avoidance Boundary Box */}
      <rect x="220" y="85" width="45" height="40" rx="3" fill="#EFEEE6" stroke="#C8C5B8" strokeWidth="1" strokeDasharray="2 2" />
      <text x="242" y="108" textAnchor="middle" fill="#77786F" fontSize="7.5" fontFamily="var(--font-mono)">Obstacle</text>

      {/* Camera Frustum Pose Keyframes (Visual Odometry) */}
      <g transform="translate(70, 105)">
        <polygon points="0,5 12,0 12,10" fill="#FAF9F5" stroke="#849477" strokeWidth="1" />
        <text x="6" y="20" textAnchor="middle" fill="#77786F" fontSize="7.5" fontFamily="var(--font-mono)">C0</text>
      </g>
      <g transform="translate(160, 65)">
        <polygon points="0,5 12,0 12,10" fill="#FAF9F5" stroke="#849477" strokeWidth="1" />
        <text x="6" y="20" textAnchor="middle" fill="#77786F" fontSize="7.5" fontFamily="var(--font-mono)">C1</text>
      </g>
      <g transform="translate(320, 50)">
        <polygon points="0,5 12,0 12,10" fill="#FAF9F5" stroke="#849477" strokeWidth="1" />
        <text x="6" y="20" textAnchor="middle" fill="#77786F" fontSize="7.5" fontFamily="var(--font-mono)">C2</text>
      </g>

      {/* A* Computed Path Trajectory (Spline Vector) */}
      <path
        d="M 80 110 C 120 100, 150 70, 180 65 S 220 50, 280 55 S 340 70, 390 60 S 440 65, 470 55"
        fill="none"
        stroke="#849477"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Path Waypoint Nodes */}
      <circle cx="80" cy="110" r="4" fill="#252820" />
      <circle cx="180" cy="65" r="3" fill="#849477" />
      <circle cx="280" cy="55" r="3" fill="#849477" />
      <circle cx="390" cy="60" r="3" fill="#849477" />
      <circle cx="470" cy="55" r="4" fill="#849477" />

      {/* Start and Goal Waypoint Flags */}
      <rect x="55" y="125" width="50" height="18" rx="2" fill="#FAF9F5" stroke="#E5E3DA" strokeWidth="1" />
      <text x="80" y="137" textAnchor="middle" fill="#252820" fontSize="8" fontFamily="var(--font-mono)" fontWeight="600">START (S)</text>

      <rect x="445" y="28" width="50" height="18" rx="2" fill="#FAF9F5" stroke="#849477" strokeWidth="1" />
      <text x="470" y="40" textAnchor="middle" fill="#849477" fontSize="8" fontFamily="var(--font-mono)" fontWeight="600">GOAL (G)</text>

      {/* Framework Meta Label */}
      <rect x="290" y="135" width="200" height="22" rx="3" fill="#FAF9F5" stroke="#E5E3DA" strokeWidth="1" />
      <text x="390" y="149" textAnchor="middle" fill="#77786F" fontSize="8.5" fontFamily="var(--font-mono)">
        MASt3R-SLAM · Visual Odometry · A* Search
      </text>
    </svg>
  )
}
