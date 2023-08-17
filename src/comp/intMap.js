import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useRef, useEffect } from 'react';

const IntMap = ({ onMarkerClick, tickets = [], GiveCurrentTicket }) => {
    const mapRef = useRef(null);
    const mapInstance = useRef(null); // store map instance in a ref

    useEffect(() => {



        if (mapRef.current && !mapInstance.current) {
            mapInstance.current = L.map(mapRef.current, { scrollWheelZoom: false }).setView(
                [24.4686, 39.6142], // Coordinates for Madinah
                13
            );

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(mapInstance.current);

            // Define marker icon
            const icon = L.icon({
                iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                iconSize: [25, 41], // size of the icon
                shadowSize: [41, 41], // size of the shadow
                iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
                shadowAnchor: [14, 41], // the same for the shadow
                popupAnchor: [0, -41], // point from which the popup should open relative to the iconAnchor
            });

            mapInstance.current.on('click', (event) => {
                const { lat, lng } = event.latlng;
                const redIcon = L.icon({
                    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
                    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                    iconSize: [25, 41], // size of the icon
                    shadowSize: [41, 41], // size of the shadow
                    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
                    shadowAnchor: [14, 41], // the same for the shadow
                    popupAnchor: [0, -41], // point from which the popup should open relative to the iconAnchor
                });

                const redMarker = L.marker([lat, lng], { icon: redIcon }).addTo(mapInstance.current);
                redMarker.bindPopup(`Coordinates: ${lat.toFixed(6)}, ${lng.toFixed(6)}`).openPopup();

                onMarkerClick(lat, lng);
            });

            L.marker([24.4686, 39.6142], { icon: icon })
                .addTo(mapInstance.current)
                .on('click', onMarkerClick)
                .bindPopup('Madinah, Saudi Arabia')
                .openPopup();
        }
    }, []);

    useEffect(() => {
        if (mapInstance.current && tickets.length > 0) {
            // Add or update markers based on the tickets array
            const blueIcon = L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
                iconSize: [25, 41], // size of the icon
                shadowSize: [41, 41], // size of the shadow
                iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
                shadowAnchor: [14, 41], // the same for the shadow
                popupAnchor: [0, -41], // point from which the popup should open relative to the iconAnchor
            });
            tickets.forEach((ticket) => {
                const marker = L.marker([ticket.lat, ticket.lng], { icon: blueIcon }).addTo(mapInstance.current);
                marker.bindPopup(ticket.id);
                marker.on('click', () => {onMarkerClick(ticket.lat, ticket.lng, ticket); GiveCurrentTicket(ticket)});
            });
        }
    }, [tickets]);

    return <div ref={mapRef} style={{ height: '500px', width: '100%' }} />;
};

export default IntMap;
