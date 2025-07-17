export interface CarData {
  id: number
  name: string
  brand: string
  model: string
  year: number
  price: string
  originalPrice?: string
  discount?: string
  images: string[]
  specs: {
    [key: string]: string
  }
  features: string[]
  description: string
  detailedDescription: string
  views: number
  rating: number
  category: string
  availability: string
  isNew?: boolean
  isFeatured?: boolean
  engine: {
    type: string
    displacement: string
    power: string
    torque: string
    fuelType: string
  }
  performance: {
    acceleration: string
    topSpeed: string
    fuelEconomy: string
    transmission: string
  }
  dimensions: {
    length: string
    width: string
    height: string
    wheelbase: string
    weight: string
  }
  interior: {
    seating: string
    cargo: string
    infotainment: string
    climate: string
  }
  safety: string[]
  warranty: {
    basic: string
    powertrain: string
    roadside: string
  }
  colors: string[]
  financing: {
    monthlyPayment: string
    downPayment: string
    apr: string
    term: string
  }
}

export const carsDatabase: { [key: string]: CarData } = {
  "1": {
    id: 1,
    name: "Tesla Model S Plaid",
    brand: "Tesla",
    model: "Model S Plaid",
    year: 2024,
    price: "$129,990",
    originalPrice: "$139,990",
    discount: "Save $10,000",
    category: "Electric Luxury Sedan",
    availability: "In Stock",
    isNew: true,
    isFeatured: true,
    images: [
      "/placeholder.svg?height=600&width=800&text=Tesla+Model+S+Front+View",
      "/placeholder.svg?height=600&width=800&text=Tesla+Model+S+Interior+Dashboard",
      "/placeholder.svg?height=600&width=800&text=Tesla+Model+S+Side+Profile",
      "/placeholder.svg?height=600&width=800&text=Tesla+Model+S+Rear+View",
      "/placeholder.svg?height=600&width=800&text=Tesla+Model+S+Charging+Port",
    ],
    description: "The quickest accelerating sedan ever built with tri-motor all-wheel drive.",
    detailedDescription:
      "The Tesla Model S Plaid represents the pinnacle of electric vehicle performance, combining breathtaking acceleration with cutting-edge technology. This revolutionary sedan features a tri-motor setup that delivers unprecedented power while maintaining the efficiency and sustainability that Tesla is known for. With its sleek aerodynamic design and luxurious interior, the Model S Plaid sets new standards for what an electric luxury sedan can achieve. Experience the future of automotive excellence with advanced autopilot capabilities, over-the-air updates, and a range that eliminates range anxiety.",
    specs: {
      Acceleration: "0-60 mph in 1.99s",
      "Top Speed": "200 mph",
      Range: "405 miles",
      Horsepower: "1,020 hp",
      "Drive Type": "All-Wheel Drive",
      Battery: "100 kWh",
      Charging: "250 kW Supercharging",
      Seating: "5 Adults",
    },
    engine: {
      type: "Electric Tri-Motor",
      displacement: "N/A",
      power: "1,020 hp",
      torque: "1,050 lb-ft",
      fuelType: "Electric",
    },
    performance: {
      acceleration: "0-60 mph in 1.99 seconds",
      topSpeed: "200 mph",
      fuelEconomy: "120 MPGe combined",
      transmission: "Single-Speed Direct Drive",
    },
    dimensions: {
      length: "196.0 in",
      width: "77.3 in",
      height: "56.9 in",
      wheelbase: "116.5 in",
      weight: "4,766 lbs",
    },
    interior: {
      seating: "5 Adults",
      cargo: "28 cu ft",
      infotainment: "17-inch Cinematic Display",
      climate: "Tri-Zone Climate Control",
    },
    features: [
      "Autopilot Included",
      "Premium Interior Materials",
      "Glass Roof",
      "22-Speaker Audio System",
      "Over-the-Air Updates",
      "Mobile Connector",
      "Heated & Ventilated Seats",
      "HEPA Air Filtration",
      "Wireless Phone Charging",
      "Premium Connectivity",
      "Bioweapon Defense Mode",
      "Dog Mode",
    ],
    safety: [
      "5-Star Overall Safety Rating",
      "Automatic Emergency Braking",
      "Blind Spot Monitoring",
      "Lane Departure Warning",
      "Adaptive Cruise Control",
      "360-Degree Camera System",
      "Forward Collision Warning",
      "Side Impact Protection",
    ],
    warranty: {
      basic: "4 years / 50,000 miles",
      powertrain: "8 years / 150,000 miles",
      roadside: "4 years / 50,000 miles",
    },
    colors: ["Pearl White", "Solid Black", "Midnight Silver", "Deep Blue", "Pearl Red"],
    financing: {
      monthlyPayment: "$1,899",
      downPayment: "$25,000",
      apr: "2.49%",
      term: "72 months",
    },
    views: 1247,
    rating: 4.9,
  },
  "2": {
    id: 2,
    name: "BMW M8 Competition",
    brand: "BMW",
    model: "M8 Competition",
    year: 2024,
    price: "$146,895",
    category: "Luxury Sports Coupe",
    availability: "In Stock",
    isFeatured: true,
    images: [
      "/placeholder.svg?height=600&width=800&text=BMW+M8+Competition+Front",
      "/placeholder.svg?height=600&width=800&text=BMW+M8+Luxury+Interior",
      "/placeholder.svg?height=600&width=800&text=BMW+M8+Side+Profile",
      "/placeholder.svg?height=600&width=800&text=BMW+M8+Engine+Bay",
      "/placeholder.svg?height=600&width=800&text=BMW+M8+Rear+Spoiler",
    ],
    description: "The ultimate expression of BMW's M performance philosophy in a luxury grand tourer.",
    detailedDescription:
      "The BMW M8 Competition represents the pinnacle of BMW's engineering prowess, combining raw performance with sophisticated luxury. This grand tourer features a hand-built twin-turbo V8 engine that delivers exhilarating performance while maintaining the refinement expected from a premium BMW. Every aspect of the M8 Competition has been meticulously crafted to provide an uncompromising driving experience that excels both on the track and on the open road. With its aggressive styling, carbon fiber accents, and race-inspired interior, this is BMW M at its finest.",
    specs: {
      Acceleration: "0-60 mph in 3.0s",
      "Top Speed": "190 mph",
      Horsepower: "617 hp",
      Torque: "553 lb-ft",
      "Drive Type": "All-Wheel Drive",
      Engine: "4.4L Twin-Turbo V8",
      Transmission: "8-Speed Automatic",
      "Fuel Economy": "15/22 mpg",
    },
    engine: {
      type: "Twin-Turbo V8",
      displacement: "4.4L",
      power: "617 hp",
      torque: "553 lb-ft",
      fuelType: "Premium Gasoline",
    },
    performance: {
      acceleration: "0-60 mph in 3.0 seconds",
      topSpeed: "190 mph (electronically limited)",
      fuelEconomy: "15 city / 22 highway mpg",
      transmission: "8-Speed M Steptronic Automatic",
    },
    dimensions: {
      length: "195.4 in",
      width: "74.9 in",
      height: "53.9 in",
      wheelbase: "112.4 in",
      weight: "4,345 lbs",
    },
    interior: {
      seating: "4 Adults",
      cargo: "12.3 cu ft",
      infotainment: "12.3-inch iDrive Display",
      climate: "4-Zone Automatic Climate Control",
    },
    features: [
      "M Competition Package",
      "Carbon Fiber Roof",
      "Merino Leather Interior",
      "Harman Kardon Surround Sound",
      "Adaptive M Suspension",
      "M Carbon Ceramic Brakes",
      "Heads-Up Display",
      "Wireless Apple CarPlay",
      "Gesture Control",
      "Active Driving Assistant Pro",
      "M Drive Professional",
      "Launch Control",
    ],
    safety: [
      "IIHS Top Safety Pick",
      "Automatic Emergency Braking",
      "Blind Spot Detection",
      "Lane Departure Warning",
      "Active Cruise Control",
      "Parking Assistant Plus",
      "Surround View Camera",
      "Night Vision",
    ],
    warranty: {
      basic: "4 years / 50,000 miles",
      powertrain: "4 years / 50,000 miles",
      roadside: "4 years / Unlimited miles",
    },
    colors: ["Alpine White", "Jet Black", "Storm Bay", "Sunset Orange", "Barcelona Blue"],
    financing: {
      monthlyPayment: "$2,149",
      downPayment: "$30,000",
      apr: "3.49%",
      term: "72 months",
    },
    views: 892,
    rating: 4.8,
  },
  "3": {
    id: 3,
    name: "Porsche 911 Turbo S",
    brand: "Porsche",
    model: "911 Turbo S",
    year: 2024,
    price: "$207,000",
    category: "Sports Car",
    availability: "Limited Stock",
    isFeatured: true,
    images: [
      "/placeholder.svg?height=600&width=800&text=Porsche+911+Turbo+S+Front",
      "/placeholder.svg?height=600&width=800&text=Porsche+911+Sport+Interior",
      "/placeholder.svg?height=600&width=800&text=Porsche+911+Side+View",
      "/placeholder.svg?height=600&width=800&text=Porsche+911+Rear+Wing",
      "/placeholder.svg?height=600&width=800&text=Porsche+911+Wheel+Detail",
    ],
    description: "The ultimate 911 - combining everyday usability with track-ready performance.",
    detailedDescription:
      "The Porsche 911 Turbo S represents over 50 years of sports car evolution, refined to perfection. This latest generation combines the iconic 911 silhouette with cutting-edge technology and breathtaking performance. The twin-turbocharged flat-six engine delivers incredible power while maintaining the characteristic Porsche driving dynamics that have made the 911 a legend. Whether navigating city streets or conquering race tracks, the 911 Turbo S delivers an unmatched driving experience with its active aerodynamics, adaptive suspension, and precision engineering.",
    specs: {
      Acceleration: "0-60 mph in 2.6s",
      "Top Speed": "205 mph",
      Horsepower: "640 hp",
      Torque: "590 lb-ft",
      "Drive Type": "All-Wheel Drive",
      Engine: "3.8L Twin-Turbo Flat-6",
      Transmission: "8-Speed PDK",
      Weight: "3,640 lbs",
    },
    engine: {
      type: "Twin-Turbo Flat-6",
      displacement: "3.8L",
      power: "640 hp",
      torque: "590 lb-ft",
      fuelType: "Premium Gasoline",
    },
    performance: {
      acceleration: "0-60 mph in 2.6 seconds",
      topSpeed: "205 mph",
      fuelEconomy: "18 city / 24 highway mpg",
      transmission: "8-Speed Porsche PDK",
    },
    dimensions: {
      length: "177.9 in",
      width: "74.0 in",
      height: "51.0 in",
      wheelbase: "96.5 in",
      weight: "3,640 lbs",
    },
    interior: {
      seating: "4 Adults",
      cargo: "4.6 cu ft front / 4.6 cu ft rear",
      infotainment: "10.9-inch PCM Touchscreen",
      climate: "Automatic Climate Control",
    },
    features: [
      "Porsche Active Suspension Management",
      "Sport Chrono Package",
      "Porsche Ceramic Composite Brakes",
      "Adaptive Sport Seats Plus",
      "Bose Surround Sound System",
      "Sport Exhaust System",
      "LED Matrix Headlights",
      "Porsche Communication Management",
      "Active Aerodynamics",
      "Launch Control",
      "Porsche Track Precision App",
      "Sport Response Button",
    ],
    safety: [
      "Porsche Stability Management",
      "Anti-lock Braking System",
      "Electronic Stability Control",
      "Traction Control",
      "Multiple Airbags",
      "Porsche Side Impact Protection",
      "Lane Change Assist",
      "ParkAssist",
    ],
    warranty: {
      basic: "4 years / 50,000 miles",
      powertrain: "4 years / 50,000 miles",
      roadside: "4 years / 50,000 miles",
    },
    colors: ["Guards Red", "Jet Black", "Carrara White", "Racing Yellow", "Gentian Blue"],
    financing: {
      monthlyPayment: "$2,899",
      downPayment: "$40,000",
      apr: "4.49%",
      term: "72 months",
    },
    views: 1456,
    rating: 4.9,
  },
  "4": {
    id: 4,
    name: "Mercedes-AMG GT 63 S",
    brand: "Mercedes-AMG",
    model: "GT 63 S",
    year: 2024,
    price: "$159,900",
    category: "Luxury Performance Sedan",
    availability: "In Stock",
    images: [
      "/placeholder.svg?height=600&width=800&text=Mercedes+AMG+GT+63+S+Front",
      "/placeholder.svg?height=600&width=800&text=Mercedes+AMG+Luxury+Interior",
      "/placeholder.svg?height=600&width=800&text=Mercedes+AMG+Side+Profile",
      "/placeholder.svg?height=600&width=800&text=Mercedes+AMG+Engine+Detail",
      "/placeholder.svg?height=600&width=800&text=Mercedes+AMG+Rear+Lights",
    ],
    description: "A four-door coupe that combines AMG performance with luxury comfort.",
    detailedDescription:
      "The Mercedes-AMG GT 63 S 4-Door represents the perfect fusion of race-bred performance and luxury refinement. This four-door coupe features AMG's handcrafted twin-turbo V8 engine, delivering exceptional power while maintaining the comfort and sophistication expected from Mercedes-Benz. The GT 63 S combines the practicality of a sedan with the performance of a supercar, making it the ultimate choice for those who refuse to compromise. With its distinctive coupe-like silhouette and spacious interior, this is luxury performance redefined.",
    specs: {
      Acceleration: "0-60 mph in 3.1s",
      "Top Speed": "195 mph",
      Horsepower: "630 hp",
      Torque: "664 lb-ft",
      "Drive Type": "4MATIC+ AWD",
      Engine: "4.0L Twin-Turbo V8",
      Transmission: "9-Speed AMG Speedshift",
      Seating: "5 Adults",
    },
    engine: {
      type: "AMG Twin-Turbo V8",
      displacement: "4.0L",
      power: "630 hp",
      torque: "664 lb-ft",
      fuelType: "Premium Gasoline",
    },
    performance: {
      acceleration: "0-60 mph in 3.1 seconds",
      topSpeed: "195 mph (electronically limited)",
      fuelEconomy: "16 city / 22 highway mpg",
      transmission: "AMG SPEEDSHIFT DCT 9G",
    },
    dimensions: {
      length: "196.4 in",
      width: "76.3 in",
      height: "55.7 in",
      wheelbase: "116.2 in",
      weight: "4,560 lbs",
    },
    interior: {
      seating: "5 Adults",
      cargo: "15.4 cu ft",
      infotainment: "12.3-inch MBUX Display",
      climate: "3-Zone Automatic Climate Control",
    },
    features: [
      "AMG Performance 4MATIC+",
      "AMG Ride Control+ Suspension",
      "AMG Performance Exhaust",
      "Nappa Leather Appointments",
      "Burmester 3D Surround Sound",
      "AMG Track Pace",
      "Multibeam LED Headlights",
      "AMG Night Package",
      "Panoramic Sunroof",
      "Wireless Charging",
      "AMG Dynamic Select",
      "Race Start Function",
    ],
    safety: [
      "Mercedes-Benz Intelligent Drive",
      "Active Brake Assist",
      "Blind Spot Assist",
      "Lane Keeping Assist",
      "Active Distance Assist",
      "PRE-SAFE System",
      "Crosswind Assist",
      "Active Parking Assist",
    ],
    warranty: {
      basic: "4 years / 50,000 miles",
      powertrain: "4 years / 50,000 miles",
      roadside: "4 years / Unlimited miles",
    },
    colors: ["Obsidian Black", "Iridium Silver", "Designo Cardinal Red", "AMG Solarbeam", "Graphite Grey"],
    financing: {
      monthlyPayment: "$2,299",
      downPayment: "$32,000",
      apr: "3.99%",
      term: "72 months",
    },
    views: 743,
    rating: 4.7,
  },
  "5": {
    id: 5,
    name: "Audi RS e-tron GT",
    brand: "Audi",
    model: "RS e-tron GT",
    year: 2024,
    price: "$142,400",
    category: "Electric Sports Sedan",
    availability: "In Stock",
    isNew: true,
    images: [
      "/placeholder.svg?height=600&width=800&text=Audi+RS+e-tron+GT+Front",
      "/placeholder.svg?height=600&width=800&text=Audi+RS+e-tron+Interior",
      "/placeholder.svg?height=600&width=800&text=Audi+RS+e-tron+Side",
      "/placeholder.svg?height=600&width=800&text=Audi+RS+e-tron+Charging",
      "/placeholder.svg?height=600&width=800&text=Audi+RS+e-tron+Rear",
    ],
    description: "Audi's first electric RS model - combining sustainability with performance.",
    detailedDescription:
      "The Audi RS e-tron GT marks a new era for Audi Sport, representing the brand's first fully electric RS model. This stunning grand tourer combines Audi's legendary quattro all-wheel drive system with cutting-edge electric propulsion technology. The result is a car that delivers breathtaking performance while maintaining zero local emissions. With its sculpted design and luxurious interior, the RS e-tron GT proves that electric vehicles can be both environmentally conscious and emotionally engaging. Experience the future of performance with instant torque delivery and whisper-quiet operation.",
    specs: {
      Acceleration: "0-60 mph in 3.1s",
      "Top Speed": "155 mph",
      Horsepower: "469 hp (590 hp boost)",
      Torque: "612 lb-ft",
      "Drive Type": "Quattro AWD",
      Range: "238 miles",
      Charging: "270 kW DC Fast Charging",
      Battery: "93.4 kWh",
    },
    engine: {
      type: "Dual Electric Motors",
      displacement: "N/A",
      power: "469 hp (590 hp with boost)",
      torque: "612 lb-ft",
      fuelType: "Electric",
    },
    performance: {
      acceleration: "0-60 mph in 3.1 seconds",
      topSpeed: "155 mph (electronically limited)",
      fuelEconomy: "107 MPGe combined",
      transmission: "2-Speed Automatic (rear)",
    },
    dimensions: {
      length: "195.4 in",
      width: "76.3 in",
      height: "53.5 in",
      wheelbase: "114.2 in",
      weight: "5,060 lbs",
    },
    interior: {
      seating: "4 Adults",
      cargo: "8.1 cu ft",
      infotainment: "12.3-inch Virtual Cockpit Plus",
      climate: "4-Zone Climate Control",
    },
    features: [
      "Adaptive Air Suspension",
      "RS Sport Exhaust (Synthetic Sound)",
      "Carbon Fiber Interior Trim",
      "Bang & Olufsen Premium Sound",
      "Matrix LED Headlights",
      "Audi Drive Select",
      "Virtual Cockpit Plus",
      "Wireless Phone Charging",
      "Panoramic Glass Roof",
      "RS Design Package",
      "Predictive Efficiency Assist",
      "e-tron Route Planner",
    ],
    safety: [
      "Audi Pre Sense",
      "Adaptive Cruise Control",
      "Lane Departure Warning",
      "Blind Spot Monitoring",
      "Rear Cross Traffic Alert",
      "360-Degree Camera System",
      "Traffic Sign Recognition",
      "Emergency Assist",
    ],
    warranty: {
      basic: "4 years / 50,000 miles",
      powertrain: "8 years / 100,000 miles",
      roadside: "4 years / Unlimited miles",
    },
    colors: ["Daytona Gray", "Florett Silver", "Mythos Black", "Tango Red", "Kemora Gray"],
    financing: {
      monthlyPayment: "$2,099",
      downPayment: "$28,000",
      apr: "2.99%",
      term: "72 months",
    },
    views: 634,
    rating: 4.6,
  },
  "6": {
    id: 6,
    name: "Lamborghini Huracán EVO",
    brand: "Lamborghini",
    model: "Huracán EVO",
    year: 2024,
    price: "$248,295",
    category: "Supercar",
    availability: "Limited Stock",
    isFeatured: true,
    images: [
      "/placeholder.svg?height=600&width=800&text=Lamborghini+Huracan+EVO+Front",
      "/placeholder.svg?height=600&width=800&text=Lamborghini+Huracan+Interior",
      "/placeholder.svg?height=600&width=800&text=Lamborghini+Huracan+Side",
      "/placeholder.svg?height=600&width=800&text=Lamborghini+Huracan+Engine",
      "/placeholder.svg?height=600&width=800&text=Lamborghini+Huracan+Rear",
    ],
    description: "The evolution of the Huracán - more powerful, more refined, more connected.",
    detailedDescription:
      "The Lamborghini Huracán EVO represents the natural evolution of the most successful Lamborghini ever. This supercar combines the raw emotion and performance that Lamborghini is famous for with cutting-edge technology and refined aerodynamics. The naturally aspirated V10 engine delivers an intoxicating soundtrack while the advanced vehicle dynamics system ensures that every drive is both thrilling and accessible. The Huracán EVO is not just a car; it's a statement of automotive passion, featuring active aerodynamics, rear-wheel steering, and the most advanced infotainment system ever fitted to a Lamborghini.",
    specs: {
      Acceleration: "0-60 mph in 2.9s",
      "Top Speed": "202 mph",
      Horsepower: "630 hp",
      Torque: "443 lb-ft",
      "Drive Type": "All-Wheel Drive",
      Engine: "5.2L V10",
      Transmission: "7-Speed Dual-Clutch",
      Weight: "3,135 lbs",
    },
    engine: {
      type: "Naturally Aspirated V10",
      displacement: "5.2L",
      power: "630 hp",
      torque: "443 lb-ft",
      fuelType: "Premium Gasoline",
    },
    performance: {
      acceleration: "0-60 mph in 2.9 seconds",
      topSpeed: "202 mph",
      fuelEconomy: "13 city / 18 highway mpg",
      transmission: "7-Speed Lamborghini Doppia Frizione",
    },
    dimensions: {
      length: "175.6 in",
      width: "75.8 in",
      height: "45.9 in",
      wheelbase: "103.1 in",
      weight: "3,135 lbs",
    },
    interior: {
      seating: "2 Adults",
      cargo: "3.5 cu ft",
      infotainment: "8.4-inch Lamborghini Infotainment System",
      climate: "Automatic Climate Control",
    },
    features: [
      "Lamborghini Dinamica Veicolo Integrata",
      "Magnetic Ride Suspension",
      "Carbon Fiber Monocoque",
      "Alcantara Interior",
      "Sensonum Audio System",
      "Active Aerodynamics",
      "Launch Control",
      "Lamborghini Telemetry",
      "Apple CarPlay",
      "Performance Data Recorder",
      "Rear-Wheel Steering",
      "Lamborghini Connect",
    ],
    safety: [
      "Advanced Stability Control",
      "Traction Control System",
      "Anti-lock Braking System",
      "Electronic Brake Distribution",
      "Multiple Airbags",
      "Roll Bars",
      "Tire Pressure Monitoring",
      "Hill Hold Control",
    ],
    warranty: {
      basic: "3 years / Unlimited miles",
      powertrain: "3 years / Unlimited miles",
      roadside: "3 years / Unlimited miles",
    },
    colors: ["Arancio Borealis", "Nero Nemesis", "Bianco Icarus", "Rosso Mars", "Verde Mantis"],
    financing: {
      monthlyPayment: "$3,499",
      downPayment: "$50,000",
      apr: "5.49%",
      term: "72 months",
    },
    views: 2156,
    rating: 4.8,
  },
}
