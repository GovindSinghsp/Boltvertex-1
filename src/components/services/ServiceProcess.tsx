import React from 'react';
import { FileText, Users, MapPin, BarChart3, CheckCircle } from 'lucide-react';

const ServiceProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Requirement Analysis',
      description: 'We understand your brand objectives, target markets, and specific requirements.',
      details: ['Brand guidelines review', 'Market analysis', 'Objective setting', 'Timeline planning']
    },
    {
      icon: Users,
      title: 'Team Assignment',
      description: 'Dedicated merchandisers are selected and trained for your specific needs.',
      details: ['Team selection', 'Brand training', 'Tool preparation', 'Communication setup']
    },
    {
      icon: MapPin,
      title: 'Field Execution',
      description: 'Professional execution across all designated locations with real-time updates.',
      details: ['Store visits', 'POSM installation', 'Compliance checks', 'Issue resolution']
    },
    {
      icon: BarChart3,
      title: 'Reporting & Analysis',
      description: 'Comprehensive reports with actionable insights and recommendations.',
      details: ['Data compilation', 'Photo documentation', 'Performance analysis', 'Recommendations']
    },
    {
      icon: CheckCircle,
      title: 'Continuous Optimization',
      description: 'Ongoing monitoring and improvement to ensure sustained success.',
      details: ['Performance review', 'Process refinement', 'Best practice sharing', 'Scaling strategies']
    }
  ];

  return (
    <section className="py-20 bg-vm-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-smooch font-200 text-vm-dark mb-6">
            Our Service Process
          </h2>
          <p className="text-lg font-smooch font-300 text-vm-primary max-w-3xl mx-auto">
            A systematic approach ensuring consistent results and maximum brand impact
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="group">
              <div className="flex items-start gap-8 p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-vm-accent/10 rounded-xl flex items-center justify-center group-hover:bg-vm-accent/20 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-vm-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-sm font-smooch font-400 text-vm-accent">Step {index + 1}</span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-smooch font-400 text-vm-dark mb-3 group-hover:text-vm-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg font-smooch font-300 text-vm-primary leading-relaxed mb-4">
                    {step.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center gap-2 p-3 bg-vm-bg-light rounded-lg">
                        <div className="w-2 h-2 bg-vm-accent rounded-full"></div>
                        <span className="text-sm font-smooch font-300 text-vm-primary">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-0.5 h-8 bg-vm-accent/30"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;