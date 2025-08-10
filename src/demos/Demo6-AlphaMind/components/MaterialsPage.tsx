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
  FileText,
  // Image,
  Video,
  // Music,
  File,
  Download,
  Eye
} from 'lucide-react';

interface MaterialItem {
  id: string;
  title: string;
  type: string;
  category: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  size: string;
  downloads: number;
  views: number;
}

const mockMaterialItems: MaterialItem[] = [
  {
    id: "MAT001",
    title: "Product Brochure",
    type: "PDF",
    category: "Marketing",
    description: "Comprehensive product brochure with specifications, features, and pricing information.",
    createdAt: "2025-08-05 09:41:36",
    updatedAt: "2025-08-05 15:30:22",
    size: "5.2 MB",
    downloads: 124,
    views: 856
  },
  {
    id: "MAT002",
    title: "Company Logo Pack",
    type: "ZIP",
    category: "Branding",
    description: "Complete logo package including vector files, different formats, and usage guidelines.",
    createdAt: "2025-08-04 14:20:15",
    updatedAt: "2025-08-05 10:15:30",
    size: "12.8 MB",
    downloads: 89,
    views: 432
  },
  {
    id: "MAT003",
    title: "Product Demo Video",
    type: "MP4",
    category: "Video",
    description: "High-quality product demonstration video showcasing key features and benefits.",
    createdAt: "2025-08-03 11:30:45",
    updatedAt: "2025-08-04 16:45:12",
    size: "45.6 MB",
    downloads: 67,
    views: 234
  },
  {
    id: "MAT004",
    title: "Training Presentation",
    type: "PPTX",
    category: "Training",
    description: "Comprehensive training presentation for new employees covering company policies and procedures.",
    createdAt: "2025-08-02 08:15:30",
    updatedAt: "2025-08-03 14:20:45",
    size: "8.9 MB",
    downloads: 156,
    views: 678
  },
  {
    id: "MAT005",
    title: "Brand Guidelines",
    type: "PDF",
    category: "Branding",
    description: "Complete brand guidelines including color palettes, typography, and design principles.",
    createdAt: "2025-08-01 16:45:20",
    updatedAt: "2025-08-02 09:30:15",
    size: "3.4 MB",
    downloads: 234,
    views: 987
  },
  {
    id: "MAT006",
    title: "Product Images",
    type: "ZIP",
    category: "Images",
    description: "High-resolution product images in various formats for marketing and documentation.",
    createdAt: "2025-07-31 13:20:10",
    updatedAt: "2025-08-01 11:45:30",
    size: "28.7 MB",
    downloads: 189,
    views: 543
  },
  {
    id: "MAT007",
    title: "Customer Testimonials",
    type: "MP4",
    category: "Video",
    description: "Video testimonials from satisfied customers sharing their experiences and feedback.",
    createdAt: "2025-07-30 10:30:25",
    updatedAt: "2025-07-31 14:15:40",
    size: "67.3 MB",
    downloads: 45,
    views: 321
  },
  {
    id: "MAT008",
    title: "Technical Manual",
    type: "PDF",
    category: "Technical",
    description: "Detailed technical manual with installation instructions and troubleshooting guide.",
    createdAt: "2025-07-29 09:15:35",
    updatedAt: "2025-07-30 16:20:50",
    size: "15.6 MB",
    downloads: 78,
    views: 234
  }
];

export function MaterialsPage() {
  const [materialItems, setMaterialItems] = useState<MaterialItem[]>(mockMaterialItems);
  const [filters, setFilters] = useState({
    title: '',
    type: '',
    category: ''
  });

  const handleSearch = () => {
    const filtered = mockMaterialItems.filter(item => {
      return (
        item.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        item.type.toLowerCase().includes(filters.type.toLowerCase()) &&
        item.category.toLowerCase().includes(filters.category.toLowerCase())
      );
    });
    setMaterialItems(filtered);
  };

  const handleReset = () => {
    setFilters({
      title: '',
      type: '',
      category: ''
    });
    setMaterialItems(mockMaterialItems);
  };

  const handleEdit = (itemId: string) => {
    console.log('Edit material item:', itemId);
  };

  const handleDelete = (itemId: string) => {
    console.log('Delete material item:', itemId);
  };

  const handleDownload = (itemId: string) => {
    console.log('Download material item:', itemId);
  };

  const handlePreview = (itemId: string) => {
    console.log('Preview material item:', itemId);
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return <FileText className="h-6 w-6 text-red-500" />;
      case 'MP4':
        return <Video className="h-6 w-6 text-blue-500" />;
      case 'ZIP':
        return <File className="h-6 w-6 text-yellow-500" />;
      case 'PPTX':
        return <FileText className="h-6 w-6 text-orange-500" />;
      default:
        return <File className="h-6 w-6 text-gray-500" />;
    }
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
            <span className="text-foreground">Materials</span>
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
            <label className="block text-sm font-medium mb-1">Type</label>
            <Input
              placeholder="Search by file type"
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
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
            Upload Material
          </Button>
          <Button variant="outline">
            <List className="h-4 w-4 mr-2" />
            List Mode
          </Button>
        </div>
      </div>

      {/* Material Items Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {materialItems.map((item) => (
            <div key={item.id} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
              {/* Item Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                    {getFileIcon(item.type)}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm line-clamp-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground">{item.type} • {item.category}</p>
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

              {/* Item Stats */}
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                <span>Size: {item.size}</span>
                <div className="flex items-center space-x-3">
                  <span className="flex items-center">
                    <Download className="h-3 w-3 mr-1" />
                    {item.downloads}
                  </span>
                  <span className="flex items-center">
                    <Eye className="h-3 w-3 mr-1" />
                    {item.views}
                  </span>
                </div>
              </div>

              {/* Item Actions */}
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 text-xs"
                  onClick={() => handlePreview(item.id)}
                >
                  <Eye className="h-3 w-3 mr-1" />
                  Preview
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 text-xs"
                  onClick={() => handleDownload(item.id)}
                >
                  <Download className="h-3 w-3 mr-1" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 