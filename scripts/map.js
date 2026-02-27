function markerStyles(isActive) {
  return {
    radius: isActive ? 10 : 8,
    color: isActive ? "#0e3f2a" : "#22303d",
    weight: 2,
    fillColor: isActive ? "#e68e13" : "#2f5465",
    fillOpacity: 0.95
  };
}

function buildPopup(workshop) {
  return `<strong>${workshop.name}</strong><br>${workshop.city}`;
}

export function initWorkshopMap({ mapElementId, workshops, onSelect, initialId }) {
  const mapElement = document.getElementById(mapElementId);
  if (!mapElement || !Array.isArray(workshops) || workshops.length === 0 || typeof L === "undefined") {
    return {
      map: null,
      selectWorkshop: () => {}
    };
  }

  const map = L.map(mapElement, {
    scrollWheelZoom: false
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const bounds = L.latLngBounds(workshops.map((w) => [w.lat, w.lng]));
  map.fitBounds(bounds.pad(0.22));

  let activeId = null;
  const markers = new Map();

  function selectWorkshop(nextId, centerMap = false) {
    if (!nextId) {
      return;
    }

    activeId = nextId;
    const selectedWorkshop = workshops.find((workshop) => workshop.id === nextId) || workshops[0];

    markers.forEach((marker, markerId) => {
      marker.setStyle(markerStyles(markerId === selectedWorkshop.id));
    });

    if (centerMap) {
      map.flyTo([selectedWorkshop.lat, selectedWorkshop.lng], Math.max(map.getZoom(), 11), {
        duration: 0.35
      });
    }

    if (typeof onSelect === "function") {
      onSelect(selectedWorkshop);
    }
  }

  workshops.forEach((workshop) => {
    const marker = L.circleMarker([workshop.lat, workshop.lng], markerStyles(false)).addTo(map);
    marker.bindPopup(buildPopup(workshop));
    marker.on("click", () => {
      selectWorkshop(workshop.id, true);
    });
    markers.set(workshop.id, marker);
  });

  selectWorkshop(initialId || workshops[0].id, false);

  return {
    map,
    selectWorkshop
  };
}
