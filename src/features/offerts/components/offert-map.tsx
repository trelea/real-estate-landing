"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

export default function OffertMap({
  apiKey,
  lat,
  lng,
}: {
  apiKey: string;
  lat: number;
  lng: number;
}) {
  return (
    <APIProvider apiKey={apiKey}>
      <Map
        className="w-full h-96 rounded-2xl"
        defaultCenter={{ lat, lng }}
        defaultZoom={15}
        style={{ borderRadius: "20px" }}
        // gestureHandling={"greedy"}
        // disableDefaultUI={true}
      >
        <Marker position={{ lat, lng }} />
      </Map>
    </APIProvider>
  );
}
