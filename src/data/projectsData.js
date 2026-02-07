import testing_fixture from '../assets/testing_fixture.jpeg'
import assembly_fixture from '../assets/assembly_fixture.jpeg'
export const serviceCategories = [
  {
    id: "mechanical",
    name: "Mechanical Design Services",
    icon: "⚙️",
    shortDesc: "Expert CAD design and mechanical engineering solutions",
    fullDesc: "We provide comprehensive mechanical design services including 2D & 3D CAD design, product development, manufacturing drawings, reverse engineering, and FEA analysis."
  },
  {
    id: "software",
    name: "Software & IT Solutions",
    icon: "💻",
    shortDesc: "Custom web and enterprise software development",
    fullDesc: "From web applications to ERP systems, we build scalable solutions with modern tech stack, UI/UX design, and continuous support."
  },
  {
    id: "interior",
    name: "Layout Design Services",
    icon: "🎨",
    shortDesc: "Modern interior design for residential and commercial spaces",
    fullDesc: "We specialize in residential and commercial interior design, 3D visualization, space planning, and complete renovation projects."
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "Precision Manufacturing Ltd.",
    role: "Director",
    text: "Tekton Tech Solutions delivered exceptional mechanical design solutions. Their attention to detail and expertise in CAD/CAM saved us significant production costs.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "Digital Ventures Inc.",
    role: "CEO",
    text: "Outstanding software development team. They understood our requirements perfectly and delivered a scalable e-commerce platform ahead of schedule.",
    rating: 5
  },
  {
    id: 3,
    name: "Anil Patel",
    company: "Corporate Interiors Co.",
    role: "Owner",
    text: "The interior design team transformed our office space completely. The 3D visualization helped us make informed decisions before execution.",
    rating: 5
  }
];

export const stats = [
  { label: "Projects Completed", value: "150+" },
  { label: "Happy Clients", value: "80+" },
  { label: "Expert Team Members", value: "45+" },
  { label: "Years of Experience", value: "15+" }
];

export const projectsData = [
  {
    id: 1,
    title: "Testing fixture",
    category: "Mechanical",
    problem: "The client needed custom-designed testing fixtures to ensure accurate assembly, reliable testing, and improved overall efficiency.",
    solution: "We designed and developed custom testing fixtures that enabled precise assembly, reliable testing, reduced setup time, and enhanced productivity",
    tools: ["AutoCAD", "CATIA", "ANSYS"],
    image: testing_fixture
  },
  {
    id: 2,
    title: "E-Commerce Platform Development",
    category: "Software",
    problem: "Startup required a scalable e-commerce platform with modern UI and payment integration.",
    solution: "Built responsive web application with React, Node.js backend, Stripe payment gateway, and admin dashboard.",
    tools: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Corporate Office Interior Redesign",
    category: "Layout",
    problem: "Legacy office space needed modern renovation to improve employee productivity and brand image.",
    solution: "Complete 3D visualization, space planning with ergonomic furniture, and collaborative areas design.",
    tools: ["SketchUp", "Photoshop", "AutoCAD"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "IoT Device Integration",
    category: "Software",
    problem: "Manufacturing client needed IoT sensors integrated with their production line monitoring system.",
    solution: "Developed IoT dashboard with real-time data visualization, alerts, and predictive maintenance.",
    tools: ["Python", "IoT", "Dashboard", "Cloud"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Assembly Fixtures",
    category: "Mechanical",
    problem: "The client needed custom-designed assembly to ensure accurate assembly, reliable testing, and improved overall efficiency.",
    solution: "We designed and developed custom assembly that enabled precise assembly, reliable testing, reduced setup time, and enhanced productivity",
    tools: ["SOLIDWORKS", "ANSYS Fluent", "CAD"],
    image: assembly_fixture
  },
  {
    id: 6,
    title: "Luxury Residential Interior",
    category: "Layout",
    problem: "High-end residential project needed premium interior design with smart home integration planning.",
    solution: "Delivered 3D renders, material selection, space optimization, and technology placement layouts.",
    tools: ["3D Rendering", "Design", "Planning"],
    image: "https://images.unsplash.com/photo-1635939412822-8f3ee593d147?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxheW91dCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
  }
];
