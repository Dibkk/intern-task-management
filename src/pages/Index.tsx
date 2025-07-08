
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, Users, Target, Calendar, CheckCircle, Clock, Star, Award } from "lucide-react";
import { toast } from "sonner";

const Index = () => {
  const [activeProject, setActiveProject] = useState(0);

  const analyticsData = [
    { name: 'Jan', value: 85, projects: 12 },
    { name: 'Feb', value: 92, projects: 15 },
    { name: 'Mar', value: 78, projects: 10 },
    { name: 'Apr', value: 98, projects: 18 },
    { name: 'May', value: 87, projects: 14 },
    { name: 'Jun', value: 95, projects: 16 },
  ];

  const pieData = [
    { name: 'Completed', value: 65, color: '#10b981' },
    { name: 'In Progress', value: 25, color: '#3b82f6' },
    { name: 'Planning', value: 10, color: '#f59e0b' },
  ];

  const projects = [
    {
      title: "E-Commerce Analytics Platform",
      description: "Full-stack dashboard with real-time sales tracking, inventory management, and customer insights",
      status: "Completed",
      progress: 100,
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      impact: "Increased client revenue by 35%"
    },
    {
      title: "AI-Powered Task Management",
      description: "Smart project management tool with AI-driven priority suggestions and automated scheduling",
      status: "In Progress",
      progress: 75,
      tech: ["React", "Python", "TensorFlow", "PostgreSQL"],
      impact: "Reduced project delays by 50%"
    },
    {
      title: "Real-time Collaboration Platform",
      description: "Slack-like communication tool with video calls, file sharing, and team productivity analytics",
      status: "Planning",
      progress: 25,
      tech: ["React", "WebRTC", "Socket.io", "Redis"],
      impact: "Expected to boost team efficiency by 40%"
    }
  ];

  const skills = [
    { name: "React/TypeScript", level: 95 },
    { name: "Node.js/Express", level: 88 },
    { name: "Database Design", level: 85 },
    { name: "UI/UX Design", level: 92 },
    { name: "Data Analytics", level: 78 },
    { name: "Project Management", level: 90 }
  ];

  const handleProjectClick = (index: number) => {
    setActiveProject(index);
    toast.success(`Viewing ${projects[index].title}`, {
      description: "Project details loaded successfully"
    });
  };

  const handleContactClick = () => {
    toast.success("Contact information copied!", {
      description: "Ready to connect with potential employers"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Professional Project Portfolio
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Showcasing innovative solutions and technical expertise in modern web development
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-white border-white/30">
                <Award className="w-4 h-4 mr-2" />
                Full-Stack Developer
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-white border-white/30">
                <Star className="w-4 h-4 mr-2" />
                SVI Internship Candidate
              </Badge>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4"
              onClick={handleContactClick}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">Projects Completed</p>
                  <p className="text-3xl font-bold text-green-800">12</p>
                </div>
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Client Satisfaction</p>
                  <p className="text-3xl font-bold text-blue-800">98%</p>
                </div>
                <Star className="h-12 w-12 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-violet-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600">Technologies</p>
                  <p className="text-3xl font-bold text-purple-800">15+</p>
                </div>
                <Target className="h-12 w-12 text-purple-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-amber-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-orange-600">Experience</p>
                  <p className="text-3xl font-bold text-orange-800">3 Years</p>
                </div>
                <Clock className="h-12 w-12 text-orange-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="projects" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-white shadow-md rounded-lg p-1">
            <TabsTrigger value="projects" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              Featured Projects
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              Performance Analytics
            </TabsTrigger>
            <TabsTrigger value="skills" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
              Technical Skills
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card 
                  key={index} 
                  className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${
                    activeProject === index ? 'ring-4 ring-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50' : 'bg-white'
                  }`}
                  onClick={() => handleProjectClick(index)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold text-gray-800">{project.title}</CardTitle>
                      <Badge 
                        variant={project.status === 'Completed' ? 'default' : project.status === 'In Progress' ? 'secondary' : 'outline'}
                        className={
                          project.status === 'Completed' ? 'bg-green-500' : 
                          project.status === 'In Progress' ? 'bg-blue-500' : 'bg-yellow-500'
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="font-medium">Progress</span>
                        <span className="font-bold">{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="border-t pt-3">
                        <p className="text-sm font-medium text-green-600">
                          💡 {project.impact}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-500" />
                    Performance Trends
                  </CardTitle>
                  <CardDescription>Monthly project completion rates and quality scores</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={analyticsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-500" />
                    Project Distribution
                  </CardTitle>
                  <CardDescription>Current project status breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex justify-center gap-6 mt-4">
                    {pieData.map((entry, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                        <span className="text-sm font-medium">{entry.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg bg-white">
              <CardHeader>
                <CardTitle>Monthly Project Volume</CardTitle>
                <CardDescription>Projects completed per month with quality metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="projects" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Skills Tab */}
          <TabsContent value="skills" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-white">
                <CardHeader>
                  <CardTitle>Technical Proficiency</CardTitle>
                  <CardDescription>Core development skills and expertise levels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="font-bold text-blue-600">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-3" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <CardHeader>
                  <CardTitle className="text-blue-800">Key Achievements</CardTitle>
                  <CardDescription>Notable accomplishments and certifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                      <Award className="h-6 w-6 text-yellow-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Full-Stack Web Development Certification</h4>
                        <p className="text-sm text-gray-600">Advanced React, Node.js, and Database Management</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                      <Star className="h-6 w-6 text-blue-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Top 5% GitHub Contributor</h4>
                        <p className="text-sm text-gray-600">Active open-source contributor with 50+ repositories</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                      <Target className="h-6 w-6 text-green-500 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Client Success Rate: 98%</h4>
                        <p className="text-sm text-gray-600">Consistently delivering projects on time and budget</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-12">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact at SVI</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Passionate about creating innovative solutions and contributing to your team's success. 
              Let's build something amazing together!
            </p>
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-12 py-4 font-semibold"
              onClick={handleContactClick}
            >
              Let's Connect
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
