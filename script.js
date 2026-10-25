const shapes = {
    // Areas
    circle: {
        icon: '🔵',
        title: 'Circle Area',
        description: 'Enter radius to calculate area',
        type: 'area',
        inputs: [{ name: 'radius', label: 'Radius', type: 'number' }],
        formula: (inputs) => Math.PI * inputs.radius * inputs.radius,
        formulaText: (inputs) => `π × ${inputs.radius}² = `
    },
    square: {
        icon: '⬜',
        title: 'Square Area',
        description: 'Enter side length to calculate area',
        type: 'area',
        inputs: [{ name: 'side', label: 'Side Length', type: 'number' }],
        formula: (inputs) => inputs.side * inputs.side,
        formulaText: (inputs) => `${inputs.side}² = `
    },
    rectangle: {
        icon: '🟦',
        title: 'Rectangle Area',
        description: 'Enter length and width to calculate area',
        type: 'area',
        inputs: [
            { name: 'length', label: 'Length', type: 'number' },
            { name: 'width', label: 'Width', type: 'number' }
        ],
        formula: (inputs) => inputs.length * inputs.width,
        formulaText: (inputs) => `${inputs.length} × ${inputs.width} = `
    },
    triangle: {
        icon: '🔺',
        title: 'Triangle Area',
        description: 'Enter base and height to calculate area',
        type: 'area',
        inputs: [
            { name: 'base', label: 'Base', type: 'number' },
            { name: 'height', label: 'Height', type: 'number' }
        ],
        formula: (inputs) => 0.5 * inputs.base * inputs.height,
        formulaText: (inputs) => `½ × ${inputs.base} × ${inputs.height} = `
    },
    parallelogram: {
        icon: '▱',
        title: 'Parallelogram Area',
        description: 'Enter base and height to calculate area',
        type: 'area',
        inputs: [
            { name: 'base', label: 'Base', type: 'number' },
            { name: 'height', label: 'Height', type: 'number' }
        ],
        formula: (inputs) => inputs.base * inputs.height,
        formulaText: (inputs) => `${inputs.base} × ${inputs.height} = `
    },
    trapezoid: {
        icon: '🔷',
        title: 'Trapezoid Area',
        description: 'Enter parallel sides and height',
        type: 'area',
        inputs: [
            { name: 'side1', label: 'First Parallel Side', type: 'number' },
            { name: 'side2', label: 'Second Parallel Side', type: 'number' },
            { name: 'height', label: 'Height', type: 'number' }
        ],
        formula: (inputs) => 0.5 * (inputs.side1 + inputs.side2) * inputs.height,
        formulaText: (inputs) => `½ × (${inputs.side1} + ${inputs.side2}) × ${inputs.height} = `
    },
    rhombus: {
        icon: '🔶',
        title: 'Rhombus Area',
        description: 'Enter diagonal lengths',
        type: 'area',
        inputs: [
            { name: 'diagonal1', label: 'First Diagonal', type: 'number' },
            { name: 'diagonal2', label: 'Second Diagonal', type: 'number' }
        ],
        formula: (inputs) => 0.5 * inputs.diagonal1 * inputs.diagonal2,
        formulaText: (inputs) => `½ × ${inputs.diagonal1} × ${inputs.diagonal2} = `
    },
    pentagon: {
        icon: '⬟',
        title: 'Pentagon Area',
        description: 'Enter side length',
        type: 'area',
        inputs: [{ name: 'side', label: 'Side Length', type: 'number' }],
        formula: (inputs) => 0.25 * Math.sqrt(25 + 10 * Math.sqrt(5)) * inputs.side * inputs.side,
        formulaText: (inputs) => `¼√(25+10√5) × ${inputs.side}² = `
    },
    hexagon: {
        icon: '⬡',
        title: 'Hexagon Area',
        description: 'Enter side length',
        type: 'area',
        inputs: [{ name: 'side', label: 'Side Length', type: 'number' }],
        formula: (inputs) => (3 * Math.sqrt(3) / 2) * inputs.side * inputs.side,
        formulaText: (inputs) => `(3√3/2) × ${inputs.side}² = `
    },
    octagon: {
        icon: '⯃',
        title: 'Octagon Area',
        description: 'Enter side length',
        type: 'area',
        inputs: [{ name: 'side', label: 'Side Length', type: 'number' }],
        formula: (inputs) => 2 * (1 + Math.sqrt(2)) * inputs.side * inputs.side,
        formulaText: (inputs) => `2(1+√2) × ${inputs.side}² = `
    },
    ellipse: {
        icon: '⭕',
        title: 'Ellipse Area',
        description: 'Enter semi-major and semi-minor axes',
        type: 'area',
        inputs: [
            { name: 'semiMajor', label: 'Semi-major Axis (a)', type: 'number' },
            { name: 'semiMinor', label: 'Semi-minor Axis (b)', type: 'number' }
        ],
        formula: (inputs) => Math.PI * inputs.semiMajor * inputs.semiMinor,
        formulaText: (inputs) => `π × ${inputs.semiMajor} × ${inputs.semiMinor} = `
    },
    sector: {
        icon: '🍰',
        title: 'Sector Area',
        description: 'Enter radius and angle (in radians)',
        type: 'area',
        inputs: [
            { name: 'radius', label: 'Radius', type: 'number' },
            { name: 'angle', label: 'Angle (radians)', type: 'number' }
        ],
        formula: (inputs) => 0.5 * inputs.radius * inputs.radius * inputs.angle,
        formulaText: (inputs) => `½ × ${inputs.radius}² × ${inputs.angle} = `
    },
    annulus: {
        icon: '🍩',
        title: 'Annulus Area',
        description: 'Enter outer and inner radii',
        type: 'area',
        inputs: [
            { name: 'outerRadius', label: 'Outer Radius', type: 'number' },
            { name: 'innerRadius', label: 'Inner Radius', type: 'number' }
        ],
        formula: (inputs) => Math.PI * (inputs.outerRadius * inputs.outerRadius - inputs.innerRadius * inputs.innerRadius),
        formulaText: (inputs) => `π × (${inputs.outerRadius}² - ${inputs.innerRadius}²) = `
    },
    kite: {
        icon: '🪁',
        title: 'Kite Area',
        description: 'Enter diagonal lengths',
        type: 'area',
        inputs: [
            { name: 'diagonal1', label: 'First Diagonal', type: 'number' },
            { name: 'diagonal2', label: 'Second Diagonal', type: 'number' }
        ],
        formula: (inputs) => 0.5 * inputs.diagonal1 * inputs.diagonal2,
        formulaText: (inputs) => `½ × ${inputs.diagonal1} × ${inputs.diagonal2} = `
    },
    equilateral: {
        icon: '🔼',
        title: 'Equilateral Triangle Area',
        description: 'Enter side length',
        type: 'area',
        inputs: [{ name: 'side', label: 'Side Length', type: 'number' }],
        formula: (inputs) => (Math.sqrt(3) / 4) * inputs.side * inputs.side,
        formulaText: (inputs) => `(√3/4) × ${inputs.side}² = `
    },

    // Volumes
    cube: {
        icon: '🧊',
        title: 'Cube Volume',
        description: 'Enter side length',
        type: 'volume',
        inputs: [{ name: 'side', label: 'Side Length', type: 'number' }],
        formula: (inputs) => inputs.side * inputs.side * inputs.side,
        formulaText: (inputs) => `${inputs.side}³ = `
    },
    cuboid: {
        icon: '📦',
        title: 'Cuboid Volume',
        description: 'Enter length, width, and height',
        type: 'volume',
        inputs: [
            { name: 'length', label: 'Length', type: 'number' },
            { name: 'width', label: 'Width', type: 'number' },
            { name: 'height', label: 'Height', type: 'number' }
        ],
        formula: (inputs) => inputs.length * inputs.width * inputs.height,
        formulaText: (inputs) => `${inputs.length} × ${inputs.width} × ${inputs.height} = `
    },
    sphere: {
        icon: '⚽',
        title: 'Sphere Volume',
        description: 'Enter radius',
        type: 'volume',
        inputs: [{ name: 'radius', label: 'Radius', type: 'number' }],
        formula: (inputs) => (4/3) * Math.PI * inputs.radius * inputs.radius * inputs.radius,
        formulaText: (inputs) => `(4/3)π × ${inputs.radius}³ = `
    },
    cylinder: {
        icon: '🥫',
        title: 'Cylinder Volume',
        description: 'Enter radius and height',
        type: 'volume',
        inputs: [
            { name: 'radius', label: 'Radius', type: 'number' },
            { name: 'height', label: 'Height', type: 'number' }
        ],
        formula: (inputs) => Math.PI * inputs.radius * inputs.radius * inputs.height,
        formulaText: (inputs) => `π × ${inputs.radius}² × ${inputs.height} = `
    },
    cone: {
        icon: '🍦',
        title: 'Cone Volume',
        description: 'Enter radius and height',
        type: 'volume',
        inputs: [
            { name: 'radius', label: 'Radius', type: 'number' },
            { name: 'height', label: 'Height', type: 'number' }
        ],
        formula: (inputs) => (1/3) * Math.PI * inputs.radius * inputs.radius * inputs.height,
        formulaText: (inputs) => `(1/3)π × ${inputs.radius}² × ${inputs.height} = `
    },
    pyramid: {
        icon: '🔺',
        title: 'Pyramid Volume',
        description: 'Enter base area and height',
        type: 'volume',
        inputs: [
            { name: 'baseArea', label: 'Base Area', type: 'number' },
            { name: 'height', label: 'Height', type: 'number' }
        ],
        formula: (inputs) => (1/3) * inputs.baseArea * inputs.height,
        formulaText: (inputs) => `(1/3) × ${inputs.baseArea} × ${inputs.height} = `
    },
    prism: {
        icon: '📐',
        title: 'Prism Volume',
        description: 'Enter base area and height',
        type: 'volume',
        inputs: [
            { name: 'baseArea', label: 'Base Area', type: 'number' },
            { name: 'height', label: 'Height', type: 'number' }
        ],
        formula: (inputs) => inputs.baseArea * inputs.height,
        formulaText: (inputs) => `${inputs.baseArea} × ${inputs.height} = `
    },
    hemisphere: {
        icon: '🌗',
        title: 'Hemisphere Volume',
        description: 'Enter radius',
        type: 'volume',
        inputs: [{ name: 'radius', label: 'Radius', type: 'number' }],
        formula: (inputs) => (2/3) * Math.PI * inputs.radius * inputs.radius * inputs.radius,
        formulaText: (inputs) => `(2/3)π × ${inputs.radius}³ = `
    },
    torus: {
        icon: '🍩',
        title: 'Torus Volume',
        description: 'Enter major radius (R) and minor radius (r)',
        type: 'volume',
        inputs: [
            { name: 'majorRadius', label: 'Major Radius (R)', type: 'number' },
            { name: 'minorRadius', label: 'Minor Radius (r)', type: 'number' }
        ],
        formula: (inputs) => 2 * Math.PI * Math.PI * inputs.majorRadius * inputs.minorRadius * inputs.minorRadius,
        formulaText: (inputs) => `2π² × ${inputs.majorRadius} × ${inputs.minorRadius}² = `
    },
    ellipsoid: {
        icon: '🥚',
        title: 'Ellipsoid Volume',
        description: 'Enter semi-axes a, b, and c',
        type: 'volume',
        inputs: [
            { name: 'semiAxisA', label: 'Semi-axis a', type: 'number' },
            { name: 'semiAxisB', label: 'Semi-axis b', type: 'number' },
            { name: 'semiAxisC', label: 'Semi-axis c', type: 'number' }
        ],
        formula: (inputs) => (4/3) * Math.PI * inputs.semiAxisA * inputs.semiAxisB * inputs.semiAxisC,
        formulaText: (inputs) => `(4/3)π × ${inputs.semiAxisA} × ${inputs.semiAxisB} × ${inputs.semiAxisC} = `
    },
    tetrahedron: {
        icon: '🔻',
        title: 'Tetrahedron Volume',
        description: 'Enter edge length',
        type: 'volume',
        inputs: [{ name: 'edge', label: 'Edge Length', type: 'number' }],
        formula: (inputs) => (inputs.edge * inputs.edge * inputs.edge) / (6 * Math.sqrt(2)),
        formulaText: (inputs) => `${inputs.edge}³ / (6√2) = `
    },
    frustum: {
        icon: '🪣',
        title: 'Frustum Volume',
        description: 'Enter radii and height',
        type: 'volume',
        inputs: [
            { name: 'radius1', label: 'Top Radius', type: 'number' },
            { name: 'radius2', label: 'Bottom Radius', type: 'number' },
            { name: 'height', label: 'Height', type: 'number' }
        ],
        formula: (inputs) => (1/3) * Math.PI * inputs.height * (inputs.radius1 * inputs.radius1 + inputs.radius1 * inputs.radius2 + inputs.radius2 * inputs.radius2),
        formulaText: (inputs) => `(1/3)π × ${inputs.height} × (${inputs.radius1}² + ${inputs.radius1}×${inputs.radius2} + ${inputs.radius2}²) = `
    }
};

let currentShape = null;

function getInputTip(inputName) {
    const tips = {
        'radius': 'Distance from center to edge (e.g., 5 cm)',
        'side': 'Length of one side (e.g., 10 meters)',
        'length': 'Longer dimension (e.g., 15 feet)',
        'width': 'Shorter dimension (e.g., 8 feet)', 
        'height': 'Vertical measurement (e.g., 12 inches)',
        'base': 'Bottom side length (e.g., 6 units)',
        'diagonal1': 'First diagonal length (e.g., 8 cm)',
        'diagonal2': 'Second diagonal length (e.g., 6 cm)',
        'side1': 'First parallel side (e.g., 10 m)',
        'side2': 'Second parallel side (e.g., 6 m)',
        'semiMajor': 'Half of longest diameter (e.g., 7 units)',
        'semiMinor': 'Half of shortest diameter (e.g., 4 units)',
        'angle': 'In radians (π = 180°, π/2 = 90°)',
        'outerRadius': 'Outer circle radius (e.g., 8 cm)',
        'innerRadius': 'Inner circle radius (e.g., 3 cm)',
        'baseArea': 'Area of the base (e.g., 25 sq units)',
        'majorRadius': 'Distance to tube center (e.g., 5 cm)',
        'minorRadius': 'Tube thickness radius (e.g., 1 cm)',
        'semiAxisA': 'Semi-axis along X direction (e.g., 4 units)',
        'semiAxisB': 'Semi-axis along Y direction (e.g., 3 units)', 
        'semiAxisC': 'Semi-axis along Z direction (e.g., 2 units)',
        'edge': 'Length of any edge (e.g., 6 cm)',
        'radius1': 'Top circle radius (e.g., 3 cm)',
        'radius2': 'Bottom circle radius (e.g., 5 cm)'
    };
    
    return tips[inputName] || 'Enter a positive measurement value';
}

function showTab(tab) {
    const areasTab = document.getElementById('areasTab');
    const volumesTab = document.getElementById('volumesTab');
    const areasSection = document.getElementById('areasSection');
    const volumesSection = document.getElementById('volumesSection');

    if (tab === 'areas') {
        areasTab.classList.add('tab-active');
        areasTab.classList.remove('text-white/80');
        volumesTab.classList.remove('tab-active');
        volumesTab.classList.add('text-white/80');
        areasSection.classList.remove('hidden');
        volumesSection.classList.add('hidden');
    } else {
        volumesTab.classList.add('tab-active');
        volumesTab.classList.remove('text-white/80');
        areasTab.classList.remove('tab-active');
        areasTab.classList.add('text-white/80');
        volumesSection.classList.remove('hidden');
        areasSection.classList.add('hidden');
    }
}

function showCalculator(shapeName) {
    currentShape = shapes[shapeName];
    
    document.getElementById('welcomePage').classList.add('hidden');
    document.getElementById('calculatorPage').classList.remove('hidden');
    
    document.getElementById('shapeIcon').textContent = currentShape.icon;
    document.getElementById('shapeTitle').textContent = currentShape.title;
    document.getElementById('shapeDescription').textContent = currentShape.description;
    
    const inputFields = document.getElementById('inputFields');
    inputFields.innerHTML = '';
    
    currentShape.inputs.forEach(input => {
        const div = document.createElement('div');
        div.innerHTML = `
            <label class="block text-gray-700 font-bold mb-1 text-sm">${input.label}</label>
            <input type="${input.type}" id="${input.name}" step="0.01" min="0.01" required 
                   class="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-xl focus:bg-white focus:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-200 text-base font-semibold transition-all text-gray-800"
                   placeholder="Enter value">
            <p class="text-xs text-purple-600 mt-1 font-medium">💡 ${getInputTip(input.name)}</p>
        `;
        inputFields.appendChild(div);
    });
    
    document.getElementById('result').classList.add('hidden');
    document.getElementById('result').innerHTML = '';
}

function enterApp() {
    document.getElementById('landingPage').classList.add('hidden');
    document.getElementById('welcomePage').classList.remove('hidden');
}

function goHome() {
    document.getElementById('calculatorPage').classList.add('hidden');
    document.getElementById('welcomePage').classList.remove('hidden');
}

function exitApp() {
    document.getElementById('welcomePage').classList.add('hidden');
    document.getElementById('landingPage').classList.remove('hidden');
}

document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (!currentShape) return;
    
    const inputs = {};
    currentShape.inputs.forEach(input => {
        inputs[input.name] = parseFloat(document.getElementById(input.name).value);
    });
    
    const result = currentShape.formula(inputs);
    const unit = currentShape.type === 'area' ? 'sq units' : 'cubic units';
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <div class="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-5 text-center shadow-inner">
            <h3 class="text-xs font-bold text-purple-600 uppercase tracking-wider mb-1">Calculated Result</h3>
            <p class="text-3xl font-extrabold text-purple-900 my-1">${result.toFixed(4)} <span class="text-sm font-semibold text-purple-600">${unit}</span></p>
            <p class="text-xs text-gray-500 mt-2 font-mono bg-white/70 py-1.5 px-3 rounded-lg border border-purple-100 inline-block break-all">${currentShape.formulaText(inputs)}${result.toFixed(4)}</p>
        </div>
    `;
    resultDiv.classList.remove('hidden');
});