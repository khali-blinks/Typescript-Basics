import { User } from './Users';
import { Company } from './Company';


export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1,
      center: { lat: 0, lng: 0 },
      mapId: 'YOUR_MAP_ID' // Required for advanced markers
    });
  }

  async addUserMarker(user: User): Promise<void> {
    // Load the marker library
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as typeof google.maps.marker;
    
    new AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lng
      }
    });
  }

  async addCompanyMarker(company: Company): Promise<void> {
    // Load the marker library
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as typeof google.maps.marker;
    new AdvancedMarkerElement({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }
    })
  }
}