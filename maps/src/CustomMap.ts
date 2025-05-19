// Instructions to every othrt class
// on how yhey can be an argument to 'addMarker'

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}


export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
      mapId: 'YOUR_MAP_ID' // Required for advanced markers
    });
  }

  async addMarker(mappable: Mappable): Promise<void> {
    // Load required libraries
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;
    const { InfoWindow } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    
    const marker = new AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('gmp-click', () => {
      const infoWindow = new InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open({
        map: this.googleMap,
        anchor: marker
      });
    });
  }
}