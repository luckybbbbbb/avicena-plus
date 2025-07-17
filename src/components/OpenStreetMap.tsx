import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom pharmacy icon
const pharmacyIcon = L.divIcon({
  className: 'custom-pharmacy-icon',
  html: `
    <div style="
      background: #10b981;
      border: 2px solid white;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 14px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    ">
      A+
    </div>
  `,
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -20]
});

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: string;
  lat: number;
  lng: number;
}

const OpenStreetMap: React.FC = () => {
  const locations: Location[] = [
    {
      id: 1,
      name: "Avicena Plus - Generala Živkovića",
      address: "Generala Živkovića 135, Novi Pazar",
      phone: "020 387343",
      hours: "07:30 - 22:00",
      lat: 43.128469,
      lng: 20.504902
    },
    {
      id: 2,
      name: "Avicena Plus - Mur",
      address: "Mur br. 279, Novi Pazar",
      phone: "020 382500",
      hours: "07:30 - 22:00",
      lat: 43.117686,
      lng: 20.492855
    }
  ];

  // Calculate center between both locations
  const centerLat = (43.128469 + 43.117686) / 2;
  const centerLng = (20.504902 + 20.492855) / 2;

  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={[centerLat, centerLng]}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        
        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={pharmacyIcon}
          >
            <Popup>
              <div className="p-2 max-w-xs">
                <h3 className="font-bold text-emerald-600 text-lg mb-2">
                  {location.name}
                </h3>
                <div className="space-y-1 text-sm text-gray-700">
                  <p><strong>Adresa:</strong> {location.address}</p>
                  <p><strong>Telefon:</strong> {location.phone}</p>
                  <p><strong>Radno vreme:</strong> {location.hours}</p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default OpenStreetMap; 