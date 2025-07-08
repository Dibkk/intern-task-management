
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'th';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'app.title': 'Task Management System',
    'app.subtitle': 'Organize your work efficiently',
    'button.newTask': 'New Task',
    'stats.total': 'Total Tasks',
    'stats.completed': 'Completed',
    'stats.inProgress': 'In Progress',
    'stats.todo': 'To Do',
    'stats.overdue': 'Overdue',
    'search.placeholder': 'Search tasks...',
    'filter.allStatus': 'All Status',
    'filter.allPriority': 'All Priority',
    'filter.high': 'High',
    'filter.medium': 'Medium',
    'filter.low': 'Low',
    'tabs.all': 'All Tasks',
    'tabs.todo': 'To Do',
    'tabs.inProgress': 'In Progress',
    'tabs.completed': 'Completed',
    'button.edit': 'Edit',
    'button.delete': 'Delete',
    'button.start': 'Start',
    'button.complete': 'Complete',
    'message.noTasks': 'No tasks found',
    'message.createFirst': 'Create your first task to get started!',
    'toast.taskCreated': 'Task created successfully!',
    'toast.taskUpdated': 'Task updated successfully!',
    'toast.taskDeleted': 'Task deleted successfully!',
    'toast.statusChanged': 'Task marked as'
  },
  th: {
    'app.title': 'ระบบจัดการงาน',
    'app.subtitle': 'จัดระเบียบงานของคุณอย่างมีประสิทธิภาพ',
    'button.newTask': 'งานใหม่',
    'stats.total': 'งานทั้งหมด',
    'stats.completed': 'เสร็จแล้ว',
    'stats.inProgress': 'กำลังดำเนินการ',
    'stats.todo': 'รอดำเนินการ',
    'stats.overdue': 'เกินกำหนด',
    'search.placeholder': 'ค้นหางาน...',
    'filter.allStatus': 'สถานะทั้งหมด',
    'filter.allPriority': 'ความสำคัญทั้งหมด',
    'filter.high': 'สูง',
    'filter.medium': 'กลาง',
    'filter.low': 'ต่ำ',
    'tabs.all': 'งานทั้งหมด',
    'tabs.todo': 'รอดำเนินการ',
    'tabs.inProgress': 'กำลังดำเนินการ',
    'tabs.completed': 'เสร็จแล้ว',
    'button.edit': 'แก้ไข',
    'button.delete': 'ลบ',
    'button.start': 'เริ่ม',
    'button.complete': 'เสร็จสิ้น',
    'message.noTasks': 'ไม่พบงาน',
    'message.createFirst': 'สร้างงานแรกของคุณเพื่อเริ่มต้น!',
    'toast.taskCreated': 'สร้างงานสำเร็จ!',
    'toast.taskUpdated': 'อัปเดตงานสำเร็จ!',
    'toast.taskDeleted': 'ลบงานสำเร็จ!',
    'toast.statusChanged': 'เปลี่ยนสถานะงานเป็น'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
