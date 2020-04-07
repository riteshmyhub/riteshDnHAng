function startglobe() {

}
$(function() {
     // Gen random data
     const N = 50;
     const gData = [...Array(N).keys()].map(() => ({
       lat: (Math.random() - 0.5) * 180,
       lng: (Math.random() - 0.5) * 360,
       size: Math.random() * 1,
       color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
     }));
    
     const imgurl ="https://summerstrucking.com/wp-content/uploads/2014/05/world-digital-map.png"
    
     
     const Globe = new ThreeGlobe()
       .globeImageUrl(imgurl)
       .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
       .labelsData(gData)
       .labelText(
         (d) =>
           `(${Math.round(d.lat * 1e2) / 1e2}, ${
             Math.round(d.lng * 1e2) / 1e2
           })`
       )
       .labelSize('size')
       .labelDotRadius((d) => d.size / 5)
       .labelColor('color');

     // Setup renderer
     const renderer = new THREE.WebGLRenderer();
     renderer.setSize(window.innerWidth, window.innerHeight);
     document.getElementById('globeViz').appendChild(renderer.domElement);

   
     // Setup scene
     const scene = new THREE.Scene();
     scene.background = new THREE.Color(0xD9D9D9);
     scene.add(Globe);
     scene.add(new THREE.AmbientLight(0xbbbbbb));
     scene.add(new THREE.DirectionalLight(0.6));

    
     // Setup camera
     const camera = new THREE.PerspectiveCamera( 30, window.innerWidth/window.innerHeight, 0.1, 1000 );
     camera.updateProjectionMatrix();
     camera.position.z = 500;

     // Add camera controls
     const tbControls = new TrackballControls(camera, renderer.domElement);
     tbControls.minDistance = 101;
     tbControls.rotateSpeed = 5;
     tbControls.zoomSpeed = false;//0.8

     // Kick-off renderer
     (function animate() {
       // IIFE
       // Frame cycle
       tbControls.update();
       renderer.render(scene, camera);
       requestAnimationFrame(animate);
     })();
})

