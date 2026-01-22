import React from 'react';
import { FileText, Users, MapPin, BarChart3, CheckCircle } from 'lucide-react';

const ProcessOverview = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Strategy & Planning',
      description: 'We analyze your brand requirements and develop a comprehensive execution strategy.',
      step: '01'
    },
    {
      icon: Users,
      title: 'Team Deployment',
      description: 'Our trained merchandisers are assigned and briefed on your specific brand guidelines.',
      step: '02'
    },
    {
      icon: MapPin,
      title: 'On-Ground Execution',
      description: 'Professional execution of POSM installation, planogram compliance, and audits.',
      step: '03'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Reporting',
      description: 'Comprehensive reports with photos, compliance metrics, and actionable insights.',
      step: '04'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Continuous monitoring and optimization to ensure consistent brand standards.',
      step: '05'
    }
  ];

  return (
    <section className="py-20 bg-vm-bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Our Proven Process
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            A systematic approach that ensures consistent results and maximum brand impact
          </p>
        </div>

        <div className="relative">
          {/* Process line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-vm-accent/20 transform -translate-y-1/2"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                  {/* Step number */}
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-vm-accent text-white rounded-full flex items-center justify-center text-sm font-smooch font-400">
                    {step.step}
                  </div>
                  
                  <div className="flex items-center justify-center w-16 h-16 bg-vm-accent/10 rounded-xl mb-6 group-hover:bg-vm-accent/20 transition-colors duration-300 mt-4">
                    <step.icon className="w-8 h-8 text-vm-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-lg font-smooch font-400 text-vm-dark mb-3 group-hover:text-vm-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-vm-primary font-smooch font-300 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;