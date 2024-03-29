export const parameters = {
    // Display reference cube, useful for orienting the field
    showCube: false,
    // '2D' or '3D' particle field
    dimension: '3D',
    // 'bounce' or 'passthru'
    // 'bounce' will make particles behave like balls thrown at a wall when hitting canvas boundaries
    // 'passthru' particles will disappear after hitting canvas boundaries and be added back into the scene elsewhere
    boundaryType: 'bounce',
    // Maximum velocity of particles
    velocity: 1.5,
    // Toggles antialiasing -- must be set during construction, cannot be changed after initial render
    // Slight performance optimization to set false, although lines will appear more jagged
    antialias: false,
    // Min/Max multipliers which constraint how particles move in each direction
    // The default values here allow for particles to move in completely random x, y, z directions
    // See the "Snowfall" preset for an example of how to use these values
    direction: {
        xMin: -1,
        xMax: 1,
        yMin: -1,
        yMax: 1,
        zMin: -1,
        zMax: 1
    },
    lines: {
        // 'rainbow' or 'solid' color of lines
        colorMode: 'rainbow',
        // Color of lines if colorMode: 'solid', must be hex color
        color: '#351CCB',
        // Transparency of lines
        transparency: 0.9,
        // true/false limit the maximum number of line connections per particle
        limitConnections: true,
        maxConnections: 20,
        // Minimum distance needed to draw line between to particles
        minDistance: 150,
        // true/false render lines
        visible: true
    },
    particles: {
        // 'rainbow' or 'solid' color of particles
        colorMode: 'rainbow',
        // Color of lines if colorMode: 'solid', must be hex color
        color: '#3FB568',
        // Transparency of particles
        transparency: 0.9,
        // 'square' or 'circle' shape of particles
        shape: 'square',
        // The exact number of particles to render
        count: 500,
        // The minimum particle size
        minSize: 10,
        // The maximum particle size
        maxSize: 75,
        // true/false render particles
        visible: true
    },
    /*
     * The camera rig is comprised of Three.js OrbitControls
     * Pass any valid OrbitControls properties, consult docs for more info
     *
     * https://threejs.org/docs/#examples/controls/OrbitControls
     */
    cameraControls: {
        // Enable or disable all camera interaction (click, drag, touch etc)
        enabled: true,
        // Enable or disable smooth dampening of camera movement
        enableDamping: true,
        dampingFactor: 0.2,
        // Enable or disable zooming in/out of camera
        enableZoom: false,
        // Enable or disable constant rotation of camera around scene
        autoRotate: true,
        // Rotation speed -- higher is faster
        autoRotateSpeed: 0.3,
        // If true, camera position will be reset whenever any option changes (including this one)
        // Useful when turning off autoRotate, the camera will return to FOV where scene fits to canvas
        resetCameraFlag: false
    }

}
