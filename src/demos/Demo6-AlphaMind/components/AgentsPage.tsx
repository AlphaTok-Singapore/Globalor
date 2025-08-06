import { useState } from 'react';
import { Button } from '@/components/ui/base/button';
import { Input } from '@/components/ui/data-entry/input';
import { 
  Search, 
  RotateCcw, 
  Plus, 
  List, 
  Edit, 
  Trash2, 
  Square, 
  AtSign,
  Maximize2,
  Type,
  User
} from 'lucide-react';

interface Agent {
  id: string;
  name: string;
  code: string;
  sceneCode: string;
  description?: string;
  createdAt: string;
}

const mockAgents: Agent[] = [
  {
    id: "AG001",
    name: "Xiao Smart Phone Question Agent",
    code: "XSP_QA",
    sceneCode: "MOBILE_QA",
    createdAt: "2025-08-05 09:41:36"
  },
  {
    id: "AG002",
    name: "Ziwi Peak Community Robot",
    code: "ZP_CR",
    sceneCode: "COMMUNITY",
    description: "Used for customer questions in Ziwi Peak community content, for initial answers, reception, problem recording, public opinion monitoring, complaint feedback, etc.",
    createdAt: "2025-08-05 21:59:34"
  },
  {
    id: "AG003",
    name: "Video Content Text Extractor",
    code: "VCTE",
    sceneCode: "VIDEO_ANALYSIS",
    description: "Extracts author names and video titles from screenshots of video account content.",
    createdAt: "2025-07-28 11:05:15"
  },
  {
    id: "AG004",
    name: "Automatic Tagging Agent",
    code: "ATA",
    sceneCode: "FILE_TAGGING",
    description: "Mainly for tagging uploaded files with corresponding categories.",
    createdAt: "2025-07-23 10:58:22"
  },
  {
    id: "AG005",
    name: "Investment Promotion Agent",
    code: "IPA",
    sceneCode: "MARKETING",
    description: "Responsible for outputting Douyin script copy for Chongqing Investment Promotion Yutianfu project.",
    createdAt: "2025-07-10 16:57:54"
  },
  {
    id: "AG006",
    name: "Korean Interactive Agent",
    code: "KIA",
    sceneCode: "LANGUAGE",
    description: "Mina, extremely proficient in Chinese and Korean, likes to use humor, wisdom, and a unique perspective to record, analyze, and interact, a unique real-time voice assistant.",
    createdAt: "2025-08-05 11:27:19"
  },
  {
    id: "AG007",
    name: "O3 Internet Reasoning",
    code: "O3IR",
    sceneCode: "REASONING",
    description: "The most powerful O3 model can access the internet.",
    createdAt: "2025-08-05 11:27:01"
  },
  {
    id: "AG008",
    name: "3D Icon Generator",
    code: "3DIG",
    sceneCode: "DESIGN",
    createdAt: "2025-06-16 11:06:27"
  },
  {
    id: "AG009",
    name: "Poster Recognition",
    code: "PR",
    sceneCode: "IMAGE_RECOGNITION",
    createdAt: "2025-06-13 16:03:39"
  },
  {
    id: "AG010",
    name: "Font Design Assistant",
    code: "FDA",
    sceneCode: "DESIGN",
    createdAt: "2025-06-13 15:57:54"
  },
  {
    id: "AG011",
    name: "Robot Q&A System",
    code: "RQS",
    sceneCode: "QA",
    createdAt: "2025-07-10 16:57:46"
  },
  {
    id: "AG012",
    name: "Debi Sales Assistant",
    code: "DSA",
    sceneCode: "SALES",
    createdAt: "2025-07-27 00:16:58"
  },
  {
    id: "AG013",
    name: "Debi Intelligent Robot",
    code: "DIR",
    sceneCode: "AUTOMATION",
    createdAt: "2025-07-27 00:17:08"
  },
  {
    id: "AG014",
    name: "Problem Essence Insight",
    code: "PEI",
    sceneCode: "ANALYSIS",
    description: "A causal tracker who can penetrate the essence of problems.",
    createdAt: "2025-06-02 11:11:14"
  },
  {
    id: "AG015",
    name: "Deep Thinking Partner",
    code: "DTP",
    sceneCode: "COGNITION",
    description: "A true thinking partner with deep insights, good at grasping the essence, and skilled in strategic dialogue.",
    createdAt: "2025-06-02 11:02:47"
  },
  {
    id: "AG016",
    name: "Super Image Production Agent",
    code: "SIPA",
    sceneCode: "IMAGE_GENERATION",
    createdAt: "2025-06-09 16:36:17"
  }
];

export function AgentsPage() {
  const [agents, setAgents] = useState<Agent[]>(mockAgents);
  const [filters, setFilters] = useState({
    agentId: '',
    agentName: '',
    code: '',
    sceneCode: ''
  });

  const handleSearch = () => {
    // Filter agents based on search criteria
    const filtered = mockAgents.filter(agent => {
      return (
        agent.id.toLowerCase().includes(filters.agentId.toLowerCase()) &&
        agent.name.toLowerCase().includes(filters.agentName.toLowerCase()) &&
        agent.code.toLowerCase().includes(filters.code.toLowerCase()) &&
        agent.sceneCode.toLowerCase().includes(filters.sceneCode.toLowerCase())
      );
    });
    setAgents(filtered);
  };

  const handleReset = () => {
    setFilters({
      agentId: '',
      agentName: '',
      code: '',
      sceneCode: ''
    });
    setAgents(mockAgents);
  };

  const handleEdit = (agentId: string) => {
    console.log('Edit agent:', agentId);
  };

  const handleDelete = (agentId: string) => {
    console.log('Delete agent:', agentId);
  };

  const handleExperienceCode = (agentId: string) => {
    console.log('Experience code for agent:', agentId);
  };

  const handleMiniProgram = (agentId: string) => {
    console.log('Mini program for agent:', agentId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <div className="border-b border-border bg-background">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Home</span>
            <span>/</span>
            <span>Agent Management</span>
            <span>/</span>
            <span className="text-foreground">Agent Management</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Type className="h-4 w-4" />
            </Button>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Agent ID</label>
            <Input
              placeholder="Please enter Agent ID"
              value={filters.agentId}
              onChange={(e) => setFilters({ ...filters, agentId: e.target.value })}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Agent Name</label>
            <Input
              placeholder="Please enter Agent Name"
              value={filters.agentName}
              onChange={(e) => setFilters({ ...filters, agentName: e.target.value })}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Code</label>
            <Input
              placeholder="Please enter Code"
              value={filters.code}
              onChange={(e) => setFilters({ ...filters, code: e.target.value })}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Scene Code</label>
            <Input
              placeholder="Please enter Scene Code"
              value={filters.sceneCode}
              onChange={(e) => setFilters({ ...filters, sceneCode: e.target.value })}
            />
          </div>
          <div className="flex items-end space-x-2">
            <Button onClick={handleSearch} className="bg-primary text-primary-foreground">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="outline" onClick={handleReset}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 border-b border-border">
        <div className="flex justify-end space-x-2">
          <Button className="bg-primary text-primary-foreground">
            <Plus className="h-4 w-4 mr-2" />
            New Agent
          </Button>
          <Button variant="outline">
            <List className="h-4 w-4 mr-2" />
            List Mode
          </Button>
        </div>
      </div>

      {/* Agent Cards Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {agents.map((agent) => (
            <div key={agent.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
              {/* Agent Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">A</span>
                    <span className="text-primary-foreground text-xs absolute -bottom-1 -right-1">i</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm line-clamp-2">{agent.name}</h3>
                    <p className="text-xs text-muted-foreground">{agent.createdAt}</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm" onClick={() => handleEdit(agent.id)}>
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleDelete(agent.id)}>
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              {/* Agent Description */}
              {agent.description && (
                <p className="text-xs text-muted-foreground mb-4 line-clamp-3">
                  {agent.description}
                </p>
              )}

              {/* Agent Actions */}
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 text-xs"
                  onClick={() => handleExperienceCode(agent.id)}
                >
                  <Square className="h-3 w-3 mr-1" />
                  Experience Code
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 text-xs"
                  onClick={() => handleMiniProgram(agent.id)}
                >
                  <AtSign className="h-3 w-3 mr-1" />
                  Mini Program
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 