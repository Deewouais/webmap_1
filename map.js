'use strict'
console.log('Loaded map.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVld291YWlzIiwiYSI6ImNqbmV0MHJzbTEzZHEzcXBsNnZxOWVkZWcifQ.-wRmzpdODmgv_hlFfwn6zQ'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [4.421521, 51.217187 ],
    zoom: 13
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})


map.addControl(navigation, 'top-left')


let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})

map.addControl(scale, 'bottom-right')
let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})

map.addControl(geolocate, 'top-left')

// this is an event handler
geolocate.on('geolocate', function(event) {

    // create new variables to store the attributes we're interested in from the event
    let lng = event.coords.longitude
    let lat = event.coords.latitude

    // debug
    console.log('geolocated:', lng, lat)

    // format lng lat values and display them on our 'info' element
    document.getElementById('info').innerHTML = lng.toFixed(5) + "," + lat.toFixed(5)

})

let data = [
    {
        location: [4.403070, 51.221219 ],
        content: ' "I still remember the uncertainty of my footsteps as I walked all round the inner city, down Jeruzalemstraat, Nachtegaalstraat, « Pelikaanstraat, Paradijsstraat, Immerseelstraat, and many other streets and alleyways, until at last, plagued by a headache and my uneasy thoughts, I took refuge in the zoo by the Astridplein, next to the Centraal Station, waiting for the pain to subside."'
    },
    {
        location: [4.424105, 51.223583],
        content: ' "I still remember the uncertainty of my footsteps as I walked all round the inner city, down Jeruzalemstraat, Nachtegaalstraat, « Pelikaanstraat, Paradijsstraat, Immerseelstraat, and many other streets and alleyways, until at last, plagued by a headache and my uneasy thoughts, I took refuge in the zoo by the Astridplein, next to the Centraal Station, waiting for the pain to subside."'
    },
    {
        location: [4.420393, 51.215343 ],
        content: '"I still remember the uncertainty of my footsteps as I walked all round the inner city, down Jeruzalemstraat, Nachtegaalstraat, « Pelikaanstraat, Paradijsstraat, Immerseelstraat, and many other streets and alleyways, until at last, plagued by a headache and my uneasy thoughts, I took refuge in the zoo by the Astridplein, next to the Centraal Station, waiting for the pain to subside."'
    },
    { 
    	location: [4.412467, 51.221987 ],
        content: ' "I still remember the uncertainty of my footsteps as I walked all round the inner city, down Jeruzalemstraat, Nachtegaalstraat, « Pelikaanstraat, Paradijsstraat, Immerseelstraat, and many other streets and alleyways, until at last, plagued by a headache and my uneasy thoughts, I took refuge in the zoo by the Astridplein, next to the Centraal Station, waiting for the pain to subside."'
    },
    { 
    	location: [4.423290, 51.211777 ],
        content: ' "I still remember the uncertainty of my footsteps as I walked all round the inner city, down Jeruzalemstraat, Nachtegaalstraat, « Pelikaanstraat, Paradijsstraat, Immerseelstraat, and many other streets and alleyways, until at last, plagued by a headache and my uneasy thoughts, I took refuge in the zoo by the Astridplein, next to the Centraal Station, waiting for the pain to subside."'
    },

    { 
    	location: [4.423539,51.216370 ],
        content: ' "I cannot now recall exactly what creatures I saw on that visit to the Antwerp Nocturama, but there were probably bats and jerboas from Egypt and the Gobi Desert, native European hedgehogs and owls, Australian opossums, pine martens, dormice, and lemurs, leaping from branch to branch, darting back and forth over the grayish-yellow sandy ground, or disappearing into a bamboo thicket. The only animal which has remained lingering in my memory is the raccoon. I watched it for a long time as it sat beside a little stream with a serious expression on its face, washing the same piece of apple over and over again, as if it hoped that all this washing, which went far beyond any reasonable thoroughness, would help it to escape the unreal world in which it had arrived" <br /> <img src="https://desanciensetdesmodernes.files.wordpress.com/2011/02/scan0003.jpg" /> '
       },
    ]

      data.forEach(function(d) {

    let marker = new mapboxgl.Marker()    
    marker.setLngLat(d.location)
    marker.addTo(map)  

    let popup = new mapboxgl.Popup()
    popup.setHTML(d.content)
    marker.setPopup(popup)

})
