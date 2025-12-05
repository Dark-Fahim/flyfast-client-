import React, { useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const [error, setError] = useState("Enter valid address")
    const position = [23.777176, 90.399452]
    const serviceCenters = useLoaderData()
    const mapRef = useRef(null)
    console.log(serviceCenters);
    const handleSearch = e  => {
        e.preventDefault()
        const location = e.target.location.value;
        console.log(location);
        const district = serviceCenters.find(s => s.district.toLowerCase().includes(location.toLowerCase()));
        if(district){
            const coord = [district.latitude, district.longitude]
            console.log(coord);
            mapRef.current.flyTo(coord, 15)
            
        }
        if(!district){
            setError("No Result Found in this area")
        }

    }
    return (
        <div className='py-10 my-10 container mx-auto px-5 space-y-6'>
            <h2 className='text-[2.5rem] font-bold'>We are available in 64 districts</h2>
            <form onSubmit={handleSearch}  className="join">
                <div>
                    <label className="input validator join-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
                        <input type="text" placeholder="Search here" name='location' required />
                    </label>
                    <div className="validator-hint hidden">{error}</div>
                </div>
                <button className="btn bg-[#ff7a00] text-white join-item">Search</button>
            </form>

            <div className='w-full h-[500px]'>
                <MapContainer ref={mapRef} className='h-full w-full' center={position} zoom={7} scrollWheelZoom={false}>
                    <TileLayer

                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    >


                    </TileLayer>
                    {
                        serviceCenters.map((center, idx) =>
                            <Marker key={idx} position={[center.latitude, center.longitude]}>
                                <Popup>
                                    {center.district} || Service Area {center.covered_area.join(", ")}
                                </Popup>
                            </Marker>)
                    }
                </MapContainer>
            </div>

        </div>
    );
};

export default Coverage;