import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dna, Brain, FlaskRound, Microscope, ArrowRight, Menu } from "lucide-react";
import Header from './components/header';
import Footer from './components/footer';
// Constants
const technologies = [
  { 
    category: "From Data to", 
    items: ["Targets & Biomarkers", "Small molecules", "Antibodies", "Enzymes", "ASO", "mRNA", "Gene Tx", "CMC"] 
  },
  { 
    category: "Powered by", 
    items: ["Agentic & Generative AI", "Computational Biology", "Computational Chemistry"] 
  }
];

const offerings = [
  {
    icon: <FlaskRound className="h-8 w-8" />,
    title: "Our Solutions",
    description: "Customizable platforms and solutions across the drug discovery value chain from target discovery to therapeutic development"
  },
  {
    icon: <Microscope className="h-8 w-8" />,
    title: "Our Services",
    description: "Offering services in computational sciences and technology to complement biopharma R&D"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Case Studies",
    description: "Helping clients accelerate drug discovery and development by building computational biology, computational chemistry, technology, and cloud solutions"
  }
];

const transformations = [
  {
    icon: <Dna className="h-8 w-8" />,
    title: "Multiscale Systems Biology",
    description: "Holistic understanding of target biology through GWAS and Omics analysis with generative AI and biomarker integration"
  },
  {
    icon: <FlaskRound className="h-8 w-8" />,
    title: "Better Chemistry",
    description: "Novel SMOL and biologicals design using generative AI with quantum chemistry principles"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Generative AI",
    description: "LLMs for protein and chemistry optimization, enabling advanced pharma industry applications"
  }
];

const advantages = [
  { 
    title: "Multi-domain skills", 
    description: "Expert team combining Biology, Chemistry, AI/ML, DevOps, and Cloud expertise" 
  },
  { 
    title: "Deep Focus", 
    description: "Dedicated to biopharma industry solutions across R&D value chain" 
  },
  { 
    title: "Solutions foundation", 
    description: "Robust architecture enabling rapid, high-quality solution development" 
  },
  { 
    title: "Agile + Enterprise-grade", 
    description: "Hands-on leadership with diverse expertise in startup and enterprise environments" 
  },
  { 
    title: "Client Centric", 
    description: "Flexible engagement model with client IP rights protection" 
  },
  { 
    title: "Client teams: Research + Informatics", 
    description: "Seamless collaboration with research and informatics divisions" 
  }
];



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-blue-300">
      <Header />
      <div className="bg-red-500 text-white text-center py-3 text-sm animate-marquee mt-20">
        Agnitha Proudly Participates in PMWC 2025 – Shaping the Future of Precision Medicine.{" "}
        <a href="https://pmwcintl.com/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">
          Learn More
        </a>
      </div>
              


      {/* Hero Section */}
      <section className="pt-0 bg-gradient-to-b from-blue-400 to-blue-300 text-black">
        
                
        <div className="container px-4 mx-auto py-24 mt-0 ">
          <div className="max-w-4xl mx-auto text-center mt-0">
            <h1 className="text-4xl font-bold mb-8 text-black ">
              Bridging Molecules and Machines to Accelerate Human Health
            </h1>
            <p className="text-xl mb-12 font-bold text-black italic">
  "Revolutionizing drug discovery with biopharma for rapid therapeutic advancement"
</p>
            <div className="relative h-72 mb-8">
              <img 
                src="https://www.kolabtree.com/blog/wp-content/uploads/2024/08/1.jpg" 
                alt="Drug Discovery Innovation" 
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
            
            {technologies.map((tech, idx) => (
              <div key={idx} className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-black">{tech.category}:</h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {tech.items.map((item, i) => (
                    <span key={i} className="bg-black text-white backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-300 flex items-center justify-center min-h-screen">
  <div className="container px-4 mx-auto text-center">
    <h2 className="text-4xl font-bold mb-16 text-black">
      Solutions Across the Biopharma Value Chain
    </h2>
    <div className="space-y-16">
      {offerings.map((item, idx) => (
        <div
          key={idx}
          className="relative bg-gradient-to-r from-slate-800 to-slate-600 rounded-[50px] p-12 shadow-lg mx-auto max-w-3xl"
        >
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 h-20 w-20 bg-slate-400 rounded-full flex items-center justify-center text-white text-4xl shadow-md">
            {item.icon}
          </div>
          <h3 className="text-3xl font-semibold text-white mt-12">{item.title}</h3>
          <p className="text-white/90 mt-4 mb-8">{item.description}</p>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-purple-700"
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      ))}
    </div>
  </div>
</section>



<section className="py-24 bg-blue-300 flex items-center justify-center">
  <div className="container px-4 mx-auto">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-bold mb-6 text-black">
        Deep Science & Deep Tech Integration
      </h2>
      <p className="text-xl text-black">
        Integrating high-throughput sciences with deep learning-based generative models
      </p>
    </div>
    <div className="space-y-12 mx-auto max-w-4xl">
      {transformations.map((item, idx) => (
        <div key={idx} className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
          <div className="h-24 w-24 bg-purple-300 rounded-full flex items-center justify-center">
            <div className="text-3xl text-slate-700">{item.icon}</div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-black mb-2">{item.title}</h3>
            <p className="text-lg text-gray-700">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Advantages Section */}
      <section className="py-24 bg-blue-300">
        <div className="container px-4 mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-black">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((item, idx) => (
              <Card key={idx} className="bg-slate-800 text-purple-200 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-800">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-400">
            Ready to Transform Your Drug Discovery Process?
          </h2>
          <Button size="lg" className="bg-purple-200 text-gray-800 hover:bg-white text-lg px-8 py-6">
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}