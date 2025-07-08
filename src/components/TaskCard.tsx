
import { useState } from 'react';
import { Task } from '@/types/task';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Edit, Trash2, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';
import { useLanguage } from '@/contexts/LanguageContext';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: Task['status']) => void;
}

export const TaskCard = ({ task, onEdit, onDelete, onStatusChange }: TaskCardProps) => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
    }
  };

  const getStatusColor = (status: Task['status']) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-blue-500';
      case 'todo': return 'bg-gray-500';
    }
  };

  const isOverdue = task.status !== 'completed' && task.dueDate < new Date();

  return (
    <Card className={`transition-all duration-300 hover:shadow-lg dark:bg-slate-800 dark:border-slate-700 ${isOverdue ? 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold dark:text-white">{task.title}</CardTitle>
          <div className="flex gap-2">
            <Badge className={getPriorityColor(task.priority)}>
              {t(`filter.${task.priority}`)}
            </Badge>
            <Badge className={getStatusColor(task.status)}>
              {task.status === 'in-progress' ? t('stats.inProgress') : t(`stats.${task.status}`)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {isExpanded ? task.description : `${task.description.substring(0, 100)}...`}
          {task.description.length > 100 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-500 ml-2 hover:underline"
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </button>
          )}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span className={isOverdue ? 'text-red-500 font-medium' : ''}>
              {format(task.dueDate, 'MMM dd, yyyy')}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>Created {format(task.createdAt, 'MMM dd')}</span>
          </div>
        </div>

        {task.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {task.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex justify-between items-center pt-3 border-t dark:border-slate-600">
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => onEdit(task)}
            >
              <Edit className="w-4 h-4 mr-1" />
              {t('button.edit')}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onDelete(task.id)}
            >
              <Trash2 className="w-4 h-4 mr-1" />
              {t('button.delete')}
            </Button>
          </div>

          {task.status !== 'completed' && (
            <Button
              size="sm"
              onClick={() => onStatusChange(task.id, 
                task.status === 'todo' ? 'in-progress' : 'completed'
              )}
              className="bg-green-500 hover:bg-green-600"
            >
              <CheckCircle className="w-4 h-4 mr-1" />
              {task.status === 'todo' ? t('button.start') : t('button.complete')}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
