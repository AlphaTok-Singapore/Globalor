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
  BookOpen,
  // FileText,
  // Database,
  Tag
} from 'lucide-react';

interface KnowledgeItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  createdAt: string;
  updatedAt: string;
  size: string;
}

const mockKnowledgeItems: KnowledgeItem[] = [
  {
    id: "KB001",
    title: "Product Documentation",
    category: "Technical",
    tags: ["API", "Integration", "Guide"],
    description: "Complete product documentation including API references, integration guides, and best practices.",
    createdAt: "2025-08-05 09:41:36",
    updatedAt: "2025-08-05 15:30:22",
    size: "2.5 MB"
  },
  {
    id: "KB002",
    title: "Customer Support FAQ",
    category: "Support",
    tags: ["FAQ", "Customer", "Help"],
    description: "Frequently asked questions and common customer support scenarios with solutions.",
    createdAt: "2025-08-04 14:20:15",
    updatedAt: "2025-08-05 10:15:30",
    size: "1.8 MB"
  },
  {
    id: "KB003",
    title: "Sales Training Materials",
    category: "Training",
    tags: ["Sales", "Training", "Process"],
    description: "Comprehensive sales training materials including scripts, objection handling, and closing techniques.",
    createdAt: "2025-08-03 11:30:45",
    updatedAt: "2025-08-04 16:45:12",
    size: "3.2 MB"
  },
  {
    id: "KB004",
    title: "Technical Specifications",
    category: "Technical",
    tags: ["Specs", "Technical", "Architecture"],
    description: "Detailed technical specifications for system architecture and component integration.",
    createdAt: "2025-08-02 08:15:30",
    updatedAt: "2025-08-03 14:20:45",
    size: "4.1 MB"
  },
  {
    id: "KB005",
    title: "Marketing Guidelines",
    category: "Marketing",
    tags: ["Brand", "Guidelines", "Marketing"],
    description: "Brand guidelines and marketing best practices for consistent messaging and visual identity.",
    createdAt: "2025-08-01 16:45:20",
    updatedAt: "2025-08-02 09:30:15",
    size: "2.8 MB"
  },
  {
    id: "KB006",
    title: "Legal Documentation",
    category: "Legal",
    tags: ["Legal", "Compliance", "Terms"],
    description: "Legal documents including terms of service, privacy policies, and compliance requirements.",
    createdAt: "2025-07-31 13:20:10",
    updatedAt: "2025-08-01 11:45:30",
    size: "1.5 MB"
  }
];

export function KnowledgeBasePage() {
  const [knowledgeItems, setKnowledgeItems] = useState<KnowledgeItem[]>(mockKnowledgeItems);
  const [filters, setFilters] = useState({
    title: '',
    category: '',
    tags: ''
  });

  const handleSearch = () => {
    const filtered = mockKnowledgeItems.filter(item => {
      return (
        item.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        item.category.toLowerCase().includes(filters.category.toLowerCase()) &&
        item.tags.some(tag => tag.toLowerCase().includes(filters.tags.toLowerCase()))
      );
    });
    setKnowledgeItems(filtered);
  };

  const handleReset = () => {
    setFilters({
      title: '',
      category: '',
      tags: ''
    });
    setKnowledgeItems(mockKnowledgeItems);
  };

  const handleEdit = (itemId: string) => {
    console.log('Edit knowledge item:', itemId);
  };

  const handleDelete = (itemId: string) => {
    console.log('Delete knowledge item:', itemId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <div className="border-b border-border bg-background">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Home</span>
            <span>/</span>
            <span>Data</span>
            <span>/</span>
            <span className="text-foreground">Knowledge Base</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Title</label>
            <Input
              placeholder="Search by title"
              value={filters.title}
              onChange={(e) => setFilters({ ...filters, title: e.target.value })}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Category</label>
            <Input
              placeholder="Search by category"
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Tags</label>
            <Input
              placeholder="Search by tags"
              value={filters.tags}
              onChange={(e) => setFilters({ ...filters, tags: e.target.value })}
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
            New Knowledge Item
          </Button>
          <Button variant="outline">
            <List className="h-4 w-4 mr-2" />
            List Mode
          </Button>
        </div>
      </div>

      {/* Knowledge Items Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {knowledgeItems.map((item) => (
            <div key={item.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
              {/* Item Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm line-clamp-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.category}</p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <Button variant="ghost" size="sm" onClick={() => handleEdit(item.id)}>
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => handleDelete(item.id)}>
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              {/* Item Description */}
              <p className="text-xs text-muted-foreground mb-3 line-clamp-3">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {item.tags.map((tag, index) => (
                  <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Item Footer */}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Size: {item.size}</span>
                <span>Updated: {item.updatedAt.split(' ')[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 