import {
  GoogleMap,
  InfoWindow,
  Marker,
  useGoogleMap,
  useLoadScript,
} from "@react-google-maps/api"
import { useState } from "react"

const GMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBsxNs-7FJw0v7RJMdu9it6LDdkKWIKuUk",
  })
  const [mapRef, setMapRef] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const [infoWindowData, setInfoWindowData] = useState()
  const markers = [
    { address: "Address1", lat: 18.5204, lng: 73.8567 },
    { address: "Address2", lat: 18.5314, lng: 73.8446 },
    { address: "Address3", lat: 18.5642, lng: 73.7769 },
  ]

  const onMapLoad = (map) => {
    setMapRef(map)
    const bounds = new window.google.maps.LatLngBounds()
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }))
    map.fitBounds(bounds)
  }

  const handleMarkerClick = (id, lat, lng, address) => {
    mapRef?.panTo({ lat, lng })
    setInfoWindowData({ id, address })
    setIsOpen(true)
  }

  return (
    <div className="h-[60vh] w-[35vw]">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container h-full w-full"
          onLoad={onMapLoad}
          onClick={() => setIsOpen(false)}
        >
          {markers.map(({ address, lat, lng }, ind) => (
            <Marker
              key={ind}
              position={{ lat, lng }}
              onClick={() => {
                handleMarkerClick(ind, lat, lng, address)
              }}
            >
              {isOpen && infoWindowData?.id === ind && (
                <InfoWindow
                  onCloseClick={() => {
                    setIsOpen(false)
                  }}
                >
                  <h3>{infoWindowData.address}</h3>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      )}
    </div>
  )
}

export default GMap
